'use strict';

/**
 * PROJECT OPERATIONAL KIT — SUÍTE DE TESTES CONCEITUAIS
 * GITHUB LIFECYCLE RECONCILIATION & GOVERNANCE DRIFT
 *
 * Valida a conformidade da especificação em protocol/v1/github-lifecycle.md
 * e a lógica de classificação dos 10 casos obrigatórios da missão.
 */

const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');

const C = {
    reset: '\x1b[0m',
    bold: '\x1b[1m',
    dim: '\x1b[2m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m'
};

let passed = 0;
let failed = 0;

function check(name, fn) {
    try {
        fn();
        passed++;
        console.log(`  ${C.green}✔ PASS${C.reset} ${name}`);
    } catch (err) {
        failed++;
        console.log(`  ${C.red}✘ FAIL${C.reset} ${name}`);
        console.log(`     ${C.dim}${err.stack || err.message}${C.reset}`);
    }
}

/**
 * Modelo conceitual de reconciliação de governança GitHub.
 * Implementa as regras estritas da especificação github-lifecycle.md.
 */
function reconcileGitHubLifecycle({
    capabilities = {},
    technicalState = 'IN_PROGRESS',
    worktreeClean = true,
    issue = null,
    pr = null,
    milestone = null,
    project = null,
    branchCommits = [],
    missionIssueNumber = null,
    humanMutationAuthorization = false,
    requestedMutation = null
}) {
    // 1. Capability Discovery & Normalização
    const surfaces = {
        issues: capabilities.issues || 'NOT USED',
        prs: capabilities.prs || 'NOT USED',
        milestones: capabilities.milestones || 'NOT USED',
        projects: capabilities.projects || 'NOT USED'
    };

    const drifts = [];
    const actions = [];
    let blocked = false;
    let blockReason = null;

    // 2. Cross-Issue Branch Contamination Check
    if (missionIssueNumber && branchCommits.length > 0) {
        const foreignCommits = branchCommits.filter(c => c.issueNumber && c.issueNumber !== missionIssueNumber);
        if (foreignCommits.length > 0) {
            blocked = true;
            blockReason = 'CROSS_ISSUE_BRANCH_CONTAMINATION';
            drifts.push({
                type: 'DRIFT_CROSS_ISSUE_CONTAMINATION',
                message: `Branch contém commits da Issue #${foreignCommits[0].issueNumber} contaminando o escopo da Issue #${missionIssueNumber}`
            });
        }
    }

    // 3. Issue Reconciliation (se em uso)
    let issueReconciliation = 'N/A';
    if (surfaces.issues === 'PRESENT' && issue) {
        if (technicalState === 'IMPLEMENTATION_COMPLETE' && issue.state === 'OPEN') {
            issueReconciliation = 'ISSUE_GOVERNANCE_PENDING';
            drifts.push({
                type: 'DRIFT_ISSUE_UNRESOLVED',
                message: `Implementação técnica completa, mas Issue #${issue.number} permanece aberta sem parecer final`
            });
            actions.push(`Submeter relatório de auditoria e solicitar fechamento da Issue #${issue.number} no Human Gate 2`);
        } else if (technicalState !== 'IMPLEMENTATION_COMPLETE' && issue.state === 'CLOSED') {
            issueReconciliation = 'PREMATURE_CLOSURE_DRIFT';
            drifts.push({
                type: 'DRIFT_PREMATURE_CLOSURE',
                message: `Issue #${issue.number} está fechada no GitHub, mas a evidência técnica de implementação está pendente`
            });
        } else if (technicalState === 'IN_PROGRESS' && issue.state === 'OPEN') {
            issueReconciliation = 'COHERENT_IN_PROGRESS';
        } else if (technicalState === 'IMPLEMENTATION_COMPLETE' && issue.state === 'CLOSED') {
            issueReconciliation = 'ISSUE_GOVERNANCE_RECONCILED';
        }
    }

    // 4. Milestone Reconciliation (se em uso)
    let milestoneReconciliation = 'N/A';
    if (surfaces.milestones === 'PRESENT' && milestone) {
        // Progresso do milestone é derivado das issues, não inventado artificialmente
        const totalIssues = milestone.totalIssues || 0;
        const closedIssues = milestone.closedIssues || 0;
        const derivedProgress = totalIssues > 0 ? (closedIssues / totalIssues) * 100 : 0;
        milestoneReconciliation = {
            id: milestone.id,
            title: milestone.title,
            derivedProgress: `${derivedProgress.toFixed(0)}%`,
            issuesCount: totalIssues,
            closedCount: closedIssues
        };
    }

    // 5. Project Reconciliation (se em uso)
    let projectReconciliation = 'N/A';
    if (surfaces.projects === 'PRESENT' && project) {
        if (technicalState === 'IMPLEMENTATION_COMPLETE' && project.status !== 'Done' && project.status !== 'Review') {
            drifts.push({
                type: 'DRIFT_PROJECT_STATUS_MISMATCH',
                message: `GitHub Project status '${project.status}' divergente da realidade técnica (IMPLEMENTATION_COMPLETE)`
            });
            actions.push(`Atualizar card no Project para 'Ready for Review' ou 'Done' após aprovação`);
        }
    }

    // 6. Mutation Protection (Human Gate)
    if (requestedMutation && !humanMutationAuthorization) {
        blocked = true;
        blockReason = 'BLOCKED_BY_HUMAN_GATE';
    }

    // 7. Consolidar Closeout State
    let closeoutState = 'UNKNOWN';
    if (blocked && blockReason === 'CROSS_ISSUE_BRANCH_CONTAMINATION') {
        closeoutState = 'BLOCKED_GOVERNANCE_CONTAMINATION';
    } else if (blocked && blockReason === 'BLOCKED_BY_HUMAN_GATE') {
        closeoutState = 'BLOCKED_BY_HUMAN_GATE';
    } else if (worktreeClean && technicalState === 'IMPLEMENTATION_COMPLETE') {
        closeoutState = drifts.length === 0 ? 'TECHNICALLY_CLEAN_GOVERNANCE_RECONCILED' : 'TECHNICALLY_CLEAN_GOVERNANCE_PENDING';
    } else if (!worktreeClean || technicalState !== 'IMPLEMENTATION_COMPLETE') {
        closeoutState = 'TECHNICALLY_DIRTY_GOVERNANCE_PENDING';
    }

    return {
        surfaces,
        drifts,
        actions,
        blocked,
        blockReason,
        closeoutState,
        issueReconciliation,
        milestoneReconciliation
    };
}

function runTests() {
    console.log(`\n${C.bold}PROJECT OPERATIONAL KIT — GitHub Lifecycle Reconciliation Suite${C.reset}\n`);

    // Validação de Existência Normativa dos Arquivos
    check('Normativo: protocol/v1/github-lifecycle.md existe e é legível', () => {
        const filePath = path.join(ROOT, 'protocol', 'v1', 'github-lifecycle.md');
        assert.ok(fs.existsSync(filePath), 'Arquivo github-lifecycle.md deve existir');
        const content = fs.readFileSync(filePath, 'utf8');
        assert.ok(content.includes('Git clean'), 'Deve conter o princípio Git clean');
        assert.ok(content.includes('Discovery Before Mutation'), 'Deve conter a regra de Discovery');
        assert.ok(content.includes('CROSS_ISSUE'), 'Deve abordar contaminação de branches');
    });

    check('Template: templates/github-lifecycle-reconciliation-receipt.md existe e é legível', () => {
        const filePath = path.join(ROOT, 'templates', 'github-lifecycle-reconciliation-receipt.md');
        assert.ok(fs.existsSync(filePath), 'Recibo deve existir');
        const content = fs.readFileSync(filePath, 'utf8');
        assert.ok(content.includes('GITHUB LIFECYCLE RECONCILIATION RECEIPT'));
        assert.ok(content.includes('TECHNICALLY_CLEAN_GOVERNANCE_PENDING'));
    });

    check('Skill: skills/operational-kit/SKILL.md contém PC-10 e Recibo', () => {
        const filePath = path.join(ROOT, 'skills', 'operational-kit', 'SKILL.md');
        const content = fs.readFileSync(filePath, 'utf8');
        assert.ok(content.includes('PC-10 GitHub Lifecycle Reconciliation'));
        assert.ok(content.includes('github-lifecycle-reconciliation-receipt.md'));
    });

    // -------------------------------------------------------------
    // Os 10 Casos Obrigatórios da Missão
    // -------------------------------------------------------------
    console.log(`\n${C.dim}--- Execução dos 10 Casos Obrigatórios da Missão ---${C.reset}`);

    // CASE 1: Projeto sem Issues
    check('CASE 1: Projeto sem Issues → Resultado: N/A, sem erro', () => {
        const res = reconcileGitHubLifecycle({
            capabilities: { issues: 'NOT USED' },
            technicalState: 'IMPLEMENTATION_COMPLETE',
            worktreeClean: true
        });
        assert.strictEqual(res.surfaces.issues, 'NOT USED');
        assert.strictEqual(res.issueReconciliation, 'N/A');
        assert.strictEqual(res.drifts.length, 0);
        assert.strictEqual(res.closeoutState, 'TECHNICALLY_CLEAN_GOVERNANCE_RECONCILED');
    });

    // CASE 2: Projeto com Issue aberta e implementação em progresso
    check('CASE 2: Projeto com Issue aberta e implementação em progresso → Resultado: estado coerente', () => {
        const res = reconcileGitHubLifecycle({
            capabilities: { issues: 'PRESENT' },
            technicalState: 'IN_PROGRESS',
            worktreeClean: false,
            issue: { number: 19, state: 'OPEN' }
        });
        assert.strictEqual(res.surfaces.issues, 'PRESENT');
        assert.strictEqual(res.issueReconciliation, 'COHERENT_IN_PROGRESS');
        assert.strictEqual(res.drifts.length, 0);
        assert.strictEqual(res.closeoutState, 'TECHNICALLY_DIRTY_GOVERNANCE_PENDING');
    });

    // CASE 3: Implementação concluída e Issue ainda não reconciliada
    check('CASE 3: Implementação concluída e Issue ainda não reconciliada → Resultado: governance pending/drift detectado', () => {
        const res = reconcileGitHubLifecycle({
            capabilities: { issues: 'PRESENT' },
            technicalState: 'IMPLEMENTATION_COMPLETE',
            worktreeClean: true,
            issue: { number: 19, state: 'OPEN' }
        });
        assert.strictEqual(res.issueReconciliation, 'ISSUE_GOVERNANCE_PENDING');
        assert.ok(res.drifts.some(d => d.type === 'DRIFT_ISSUE_UNRESOLVED'));
        assert.strictEqual(res.closeoutState, 'TECHNICALLY_CLEAN_GOVERNANCE_PENDING');
    });

    // CASE 4: Issue fechada sem evidência suficiente
    check('CASE 4: Issue fechada sem evidência suficiente (implementação pendente) → Resultado: drift detectado', () => {
        const res = reconcileGitHubLifecycle({
            capabilities: { issues: 'PRESENT' },
            technicalState: 'PENDING_EVIDENCE',
            worktreeClean: true,
            issue: { number: 19, state: 'CLOSED' }
        });
        assert.strictEqual(res.issueReconciliation, 'PREMATURE_CLOSURE_DRIFT');
        assert.ok(res.drifts.some(d => d.type === 'DRIFT_PREMATURE_CLOSURE'));
    });

    // CASE 5: Milestone presente
    check('CASE 5: Milestone presente → Resultado: analisar issues associadas, não manipular porcentagem direta', () => {
        const res = reconcileGitHubLifecycle({
            capabilities: { milestones: 'PRESENT' },
            milestone: { id: 1, title: 'v1.1.0', totalIssues: 4, closedIssues: 3 }
        });
        assert.strictEqual(res.milestoneReconciliation.derivedProgress, '75%');
        assert.strictEqual(res.milestoneReconciliation.issuesCount, 4);
    });

    // CASE 6: Project ausente
    check('CASE 6: Project ausente → Resultado: N/A', () => {
        const res = reconcileGitHubLifecycle({
            capabilities: { projects: 'NOT USED' },
            project: null
        });
        assert.strictEqual(res.surfaces.projects, 'NOT USED');
        assert.strictEqual(res.drifts.length, 0);
    });

    // CASE 7: Project presente com status divergente
    check('CASE 7: Project presente com status divergente → Resultado: project state drift', () => {
        const res = reconcileGitHubLifecycle({
            capabilities: { projects: 'PRESENT' },
            technicalState: 'IMPLEMENTATION_COMPLETE',
            worktreeClean: true,
            project: { id: 'p1', name: 'Roadmap', status: 'Backlog' }
        });
        assert.ok(res.drifts.some(d => d.type === 'DRIFT_PROJECT_STATUS_MISMATCH'));
        assert.strictEqual(res.closeoutState, 'TECHNICALLY_CLEAN_GOVERNANCE_PENDING');
    });

    // CASE 8: PR relacionado e coerente
    check('CASE 8: PR relacionado e coerente → Resultado: PASS', () => {
        const res = reconcileGitHubLifecycle({
            capabilities: { prs: 'PRESENT', issues: 'PRESENT' },
            technicalState: 'IMPLEMENTATION_COMPLETE',
            worktreeClean: true,
            issue: { number: 19, state: 'CLOSED' },
            pr: { number: 21, state: 'MERGED', base: 'main' },
            branchCommits: [{ hash: 'abc', issueNumber: 19 }],
            missionIssueNumber: 19
        });
        assert.strictEqual(res.drifts.length, 0);
        assert.strictEqual(res.closeoutState, 'TECHNICALLY_CLEAN_GOVERNANCE_RECONCILED');
    });

    // CASE 9: Branch contém trabalho independente de outra Issue
    check('CASE 9: Branch contém trabalho de outra Issue → Resultado: cross-issue contamination sinalizada', () => {
        const res = reconcileGitHubLifecycle({
            capabilities: { issues: 'PRESENT' },
            technicalState: 'IMPLEMENTATION_COMPLETE',
            worktreeClean: true,
            missionIssueNumber: 19,
            branchCommits: [
                { hash: 'abc1', issueNumber: 19 },
                { hash: 'def2', issueNumber: 6 } // Contaminação com Issue #6!
            ]
        });
        assert.strictEqual(res.blocked, true);
        assert.strictEqual(res.blockReason, 'CROSS_ISSUE_BRANCH_CONTAMINATION');
        assert.ok(res.drifts.some(d => d.type === 'DRIFT_CROSS_ISSUE_CONTAMINATION'));
        assert.strictEqual(res.closeoutState, 'BLOCKED_GOVERNANCE_CONTAMINATION');
    });

    // CASE 10: Mutation sem autorização
    check('CASE 10: Mutação remota sem autorização → Resultado: BLOCKED BY HUMAN GATE', () => {
        const res = reconcileGitHubLifecycle({
            capabilities: { issues: 'PRESENT' },
            technicalState: 'IMPLEMENTATION_COMPLETE',
            worktreeClean: true,
            requestedMutation: 'CLOSE_ISSUE_19',
            humanMutationAuthorization: false
        });
        assert.strictEqual(res.blocked, true);
        assert.strictEqual(res.blockReason, 'BLOCKED_BY_HUMAN_GATE');
        assert.strictEqual(res.closeoutState, 'BLOCKED_BY_HUMAN_GATE');
    });

    console.log(`\n════════════════════════════════════════════════════════════════`);
    console.log(`  Resultado da Suíte GitHub Lifecycle: ${passed} verificações PASS, ${failed} FAIL`);
    console.log(`════════════════════════════════════════════════════════════════\n`);

    if (failed > 0) process.exit(1);
}

runTests();
