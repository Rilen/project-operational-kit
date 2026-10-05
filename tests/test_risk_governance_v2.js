'use strict';

/**
 * PROJECT OPERATIONAL KIT — SUÍTE DE TESTES CONCEITUAIS V2
 * RISK-PROPORTIONAL GOVERNANCE & CONTINUOUS ENGINEERING LOOP
 *
 * Valida a camada aditiva protocol/v2/ e a integridade documental:
 * classificação fail-closed, escalonamento só para cima, envelope/loop,
 * agregação de gates, exceções, gatilhos semânticos, invariantes e reconciliações.
 *
 * PRESERVED BASELINE: protocol/v1/ (SOVEREIGN) não é revogado.
 * PROPORTIONAL GOVERNANCE != FAST TRACK
 * AGGREGATED GATES != REMOVED AUTHORITY
 * CONTINUOUS LOOP != CONTINUOUS AUTHORITY
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

// -------------------------------------------------------------
// Modelo conceitual de referência (não-autoritativo)
// -------------------------------------------------------------

const STATES = [
    'UNINITIALIZED', 'NORMATIVE_LOADING', 'DISCOVERY_READY', 'AWAITING_HUMAN_MANDATE',
    'EXECUTING_DELIVERY', 'DELIVERY_CANDIDATE', 'AUDITING', 'AUDIT_PASSED',
    'HARDENING_REQUIRED', 'AWAITING_HUMAN_CLOSURE', 'CLOSED', 'BLOCKED'
];

const WINDOW_CLASSIFICATIONS = [
    'WINDOW_PLANNED', 'WINDOW_CLASSIFIED', 'WINDOW_AUTHORIZED', 'WINDOW_IN_DELIVERY',
    'WINDOW_VALIDATING', 'WINDOW_AUDITING', 'WINDOW_AWAITING_HUMAN_CLOSEOUT', 'WINDOW_CLOSED'
];

const LOOP_CLASSIFICATIONS = [
    'LOOP_READY', 'LOOP_RUNNING', 'LOOP_AWAITING_HUMAN', 'LOOP_HALTED', 'LOOP_CLOSED'
];

const EXCEPTION_CLASSES = [
    'EX_AUTHORITY', 'EX_SCOPE', 'EX_RISK', 'EX_REVERSIBILITY', 'EX_NORMATIVE',
    'EX_PUBLICATION', 'EX_CLOSURE', 'EX_SECURITY', 'EX_AMBIGUITY', 'EX_ENVIRONMENT'
];

const SOVEREIGN_TRIGGERS = [
    'CONSTITUTION_CHANGE', 'POLICY_CHANGE', 'AUTHORIZATION_CHANGE', 'AUTHENTICATION_CHANGE',
    'RBAC_CHANGE', 'SECURITY_PRIMITIVE_CHANGE', 'SENSITIVE_DATA_CHANGE', 'TRUST_BOUNDARY_CHANGE',
    'PRODUCTION_CHANGE', 'RELEASE_AUTHORITY_CHANGE', 'IRREVERSIBLE_OPERATION', 'HIGH_BLAST_RADIUS',
    'SCHEMA_MIGRATION_RISK', 'EXTERNAL_INTEGRATION_WITH_PRIVILEGE', 'AUDITABILITY_REDUCTION'
];

const CONTROLLED_TRIGGERS = [
    'NEW_APPLICATION_CAPABILITY', 'NEW_DOMAIN_BEHAVIOR', 'NEW_ROUTE_WITH_MUTATION',
    'SESSION_LIFECYCLE_CHANGE', 'EXTERNAL_INTEGRATION_LOW_PRIVILEGE', 'CROSS_MODULE_ARCHITECTURE_CHANGE'
];

const FAST_TRIGGERS = [
    'DOC_ONLY', 'COPY_ONLY', 'UI_PRESENTATION_ONLY', 'TEST_ONLY',
    'REVERSIBLE_ADAPTER', 'LOW_RISK_REFACTOR'
];

const RISK_RANK = { FAST: 0, CONTROLLED: 1, SOVEREIGN: 2 };

/** Classificação FAIL-CLOSED. */
function classify(triggers = []) {
    const known = new Set([...SOVEREIGN_TRIGGERS, ...CONTROLLED_TRIGGERS, ...FAST_TRIGGERS]);
    if (triggers.length === 0) return 'SOVEREIGN'; // fail-closed: desconhecido
    if (triggers.some(t => !known.has(t))) return 'SOVEREIGN'; // trigger desconhecido
    if (triggers.some(t => SOVEREIGN_TRIGGERS.includes(t))) return 'SOVEREIGN';
    if (triggers.some(t => CONTROLLED_TRIGGERS.includes(t))) return 'CONTROLLED';
    return 'FAST';
}

/** Auto-escalonamento: só para cima. */
function selfEscalationAllowed(from, to) {
    return RISK_RANK[to] >= RISK_RANK[from];
}

/** Classificação do Continuous Loop (fail-closed: segurança precede exit criteria). */
function loopState({
    envelopeActive,
    withinEnvelope = true,
    withinRiskCeiling = true,
    stopCondition = false,
    exception = null,
    exitCriteriaMet = false
}) {
    if (!envelopeActive) return 'LOOP_HALTED';
    if (exception) return 'LOOP_AWAITING_HUMAN';
    if (stopCondition) return 'LOOP_HALTED';
    if (!withinEnvelope || !withinRiskCeiling) return 'LOOP_HALTED';
    if (exitCriteriaMet) return 'LOOP_CLOSED';
    return 'LOOP_RUNNING';
}

function mayContinue(opts) {
    return loopState(opts) === 'LOOP_RUNNING';
}

/** Agregação de Human Gates por classe. */
function aggregateGates(riskClass) {
    switch (riskClass) {
        case 'FAST': return 'NONE_PER_INCREMENT_IN_ENVELOPE';
        case 'CONTROLLED': return 'WINDOW_AUTH + AGGREGATED_CLOSEOUT';
        case 'SOVEREIGN': return 'HG1 + HG2';
        default: return 'HG1 + HG2';
    }
}

/** Atenção humana por exceção (não por fase). */
function requiresHumanAttention({ exception = null, publication = false, closure = false, authorityAct = false } = {}) {
    return Boolean(exception) || publication || closure || authorityAct;
}

/** Estado-alvo fail-closed de uma exceção. */
function exceptionTargetState(exception, auditPassed = false) {
    if ((exception === 'EX_CLOSURE' || exception === 'EX_PUBLICATION') && auditPassed) {
        return 'AWAITING_HUMAN_CLOSURE';
    }
    return 'BLOCKED';
}

const TRIGGER_MAP = {
    'Agente, iniciar sessão': 'OP-PROMPT-0',
    'Agente, continuar': 'CONTINUOUS_LOOP',
    'Agente, tratar issue #N': 'ISSUE_FLOW',
    'Agente, auditar': 'OP-PROMPT-2',
    'Agente, corrigir': 'OP-PROMPT-3',
    'Agente, publicar': 'PUBLICATION',
    'Agente, status': 'READ_ONLY_STATUS',
    'Agente, finalizar sessão': 'CLOSEOUT'
};

function read(rel) {
    return fs.readFileSync(path.join(ROOT, rel), 'utf8');
}

// -------------------------------------------------------------
// Suíte
// -------------------------------------------------------------

function runTests() {
    console.log(`\n${C.bold}PROJECT OPERATIONAL KIT — Risk-Proportional Governance V2 Suite${C.reset}\n`);

    console.log(`${C.dim}--- Modelo conceitual (fail-closed, escalonamento, loop) ---${C.reset}`);

    check('classify: fail-closed — trigger desconhecido → SOVEREIGN', () => {
        assert.strictEqual(classify(['SOMETHING_UNKNOWN']), 'SOVEREIGN');
    });

    check('classify: fail-closed — nenhum trigger → SOVEREIGN', () => {
        assert.strictEqual(classify([]), 'SOVEREIGN');
    });

    check('classify: trigger soberano → SOVEREIGN', () => {
        assert.strictEqual(classify(['POLICY_CHANGE']), 'SOVEREIGN');
        assert.strictEqual(classify(['NEW_APPLICATION_CAPABILITY', 'PRODUCTION_CHANGE']), 'SOVEREIGN');
    });

    check('classify: controlled → CONTROLLED; fast-only → FAST (fail-closed em mistura/desconhecido)', () => {
        assert.strictEqual(classify(['NEW_APPLICATION_CAPABILITY']), 'CONTROLLED');
        assert.strictEqual(classify(['DOC_ONLY']), 'FAST');
        assert.strictEqual(classify(['UI_PRESENTATION_ONLY', 'TEST_ONLY']), 'FAST');
        assert.strictEqual(classify(['DOC_ONLY', 'POLICY_CHANGE']), 'SOVEREIGN');
        assert.strictEqual(classify(['DOC_ONLY', 'SOMETHING_UNKNOWN']), 'SOVEREIGN');
    });

    check('self-escalation: para cima permitido; rebaixamento proibido', () => {
        assert.strictEqual(selfEscalationAllowed('FAST', 'CONTROLLED'), true);
        assert.strictEqual(selfEscalationAllowed('CONTROLLED', 'SOVEREIGN'), true);
        assert.strictEqual(selfEscalationAllowed('SOVEREIGN', 'CONTROLLED'), false);
        assert.strictEqual(selfEscalationAllowed('CONTROLLED', 'FAST'), false);
    });

    check('loop: NO ENVELOPE → NO LOOP', () => {
        assert.strictEqual(loopState({ envelopeActive: false }), 'LOOP_HALTED');
        assert.strictEqual(mayContinue({ envelopeActive: false }), false);
    });

    check('loop: exceção → LOOP_AWAITING_HUMAN (não continua)', () => {
        assert.strictEqual(loopState({ envelopeActive: true, exception: 'EX_SCOPE' }), 'LOOP_AWAITING_HUMAN');
        assert.strictEqual(mayContinue({ envelopeActive: true, exception: 'EX_SCOPE' }), false);
    });

    check('loop: segurança (envelope/ceiling) precede exit criteria', () => {
        assert.strictEqual(loopState({ envelopeActive: true, withinEnvelope: false, exitCriteriaMet: true }), 'LOOP_HALTED');
        assert.strictEqual(loopState({ envelopeActive: true, withinRiskCeiling: false, exitCriteriaMet: true }), 'LOOP_HALTED');
        assert.strictEqual(loopState({ envelopeActive: true, exitCriteriaMet: true }), 'LOOP_CLOSED');
    });

    check('classificações (Window/Loop) NÃO são estados canônicos', () => {
        for (const c of [...WINDOW_CLASSIFICATIONS, ...LOOP_CLASSIFICATIONS]) {
            assert.ok(!STATES.includes(c), `${c} não pode ser um estado canônico`);
        }
    });

    check('agregação de Human Gates por classe', () => {
        assert.strictEqual(aggregateGates('FAST'), 'NONE_PER_INCREMENT_IN_ENVELOPE');
        assert.strictEqual(aggregateGates('CONTROLLED'), 'WINDOW_AUTH + AGGREGATED_CLOSEOUT');
        assert.strictEqual(aggregateGates('SOVEREIGN'), 'HG1 + HG2');
    });

    check('atenção humana é por exceção/atos, não por fase', () => {
        assert.strictEqual(requiresHumanAttention({}), false);
        assert.strictEqual(requiresHumanAttention({ exception: 'EX_RISK' }), true);
        assert.strictEqual(requiresHumanAttention({ publication: true }), true);
        assert.strictEqual(requiresHumanAttention({ closure: true }), true);
        assert.strictEqual(requiresHumanAttention({ authorityAct: true }), true);
    });

    check('exceção mapeia fail-closed; closure/publicação só após auditoria; nunca CLOSED', () => {
        for (const ex of EXCEPTION_CLASSES) {
            assert.strictEqual(exceptionTargetState(ex), 'BLOCKED');
        }
        assert.strictEqual(exceptionTargetState('EX_CLOSURE', true), 'AWAITING_HUMAN_CLOSURE');
        assert.strictEqual(exceptionTargetState('EX_PUBLICATION', true), 'AWAITING_HUMAN_CLOSURE');
        assert.notStrictEqual(exceptionTargetState('EX_CLOSURE', true), 'CLOSED');
    });

    check('gatilhos semânticos completos e mapeados', () => {
        const expected = [
            'Agente, iniciar sessão', 'Agente, continuar', 'Agente, tratar issue #N',
            'Agente, auditar', 'Agente, corrigir', 'Agente, publicar',
            'Agente, status', 'Agente, finalizar sessão'
        ];
        for (const t of expected) assert.ok(TRIGGER_MAP[t], `gatilho ausente: ${t}`);
    });

    console.log(`\n${C.dim}--- Integridade documental da camada V2 ---${C.reset}`);

    check('Normativo: os 8 documentos de protocol/v2/ existem e são legíveis', () => {
        const files = [
            'risk-governance.md', 'delivery-window-envelope.md', 'continuous-loop.md',
            'human-gate-aggregation.md', 'proportional-validation-audit.md',
            'operational-triggers.md', 'reporting-and-tracking-compression.md',
            'authority-invariants-v2.md'
        ];
        for (const f of files) {
            const p = path.join(ROOT, 'protocol', 'v2', f);
            assert.ok(fs.existsSync(p), `documento ausente: protocol/v2/${f}`);
            assert.ok(fs.readFileSync(p, 'utf8').length > 100, `documento vazio: ${f}`);
        }
    });

    check('Templates V2: delivery-envelope, micro-evidence-record, exception-record', () => {
        for (const f of ['delivery-envelope.md', 'micro-evidence-record.md', 'exception-record.md']) {
            const p = path.join(ROOT, 'templates', f);
            assert.ok(fs.existsSync(p), `template ausente: templates/${f}`);
        }
    });

    check('risk-governance: classes + fail-closed + escalonamento + reconciliação Fast Track', () => {
        const t = read('protocol/v2/risk-governance.md');
        assert.ok(t.includes('FAST') && t.includes('CONTROLLED') && t.includes('SOVEREIGN'));
        assert.ok(t.includes('UNKNOWN RISK') && t.includes('ESCALATE'));
        assert.ok(t.includes('DOC_ONLY') && t.includes('UI_PRESENTATION_ONLY'));
        assert.ok(t.includes('SELF-ESCALATION: ALLOWED (UP)'));
        assert.ok(t.includes('SELF-DOWNGRADE: FORBIDDEN'));
        assert.ok(t.includes('PROPORTIONAL GOVERNANCE ≠ FAST TRACK'));
        assert.ok(t.includes('AGGREGATED GATES ≠ REMOVED AUTHORITY'));
        assert.ok(t.includes('CONTINUOUS LOOP ≠ CONTINUOUS AUTHORITY'));
    });

    check('delivery-window-envelope: NO ENVELOPE → NO DELIVERY e Window Classifications ≠ estados', () => {
        const t = read('protocol/v2/delivery-window-envelope.md');
        assert.ok(t.includes('NO ENVELOPE') && t.includes('NO DELIVERY'));
        assert.ok(t.includes('WINDOW CLASSIFICATION ≠ STATE OF THE 12-STATE MACHINE'));
    });

    check('continuous-loop: loop, exceções e Human Attention exception-driven', () => {
        const t = read('protocol/v2/continuous-loop.md');
        assert.ok(t.includes('NO ENVELOPE → NO LOOP'));
        assert.ok(t.includes('HUMAN ATTENTION ≠ f(NUMBER OF INCREMENTS)'));
        assert.ok(t.includes('EXCEPTION DETECTION ≠ EXCEPTION RESOLUTION'));
        assert.ok(t.includes('LOOP_CLOSED ≠ CLOSED'));
        for (const ex of EXCEPTION_CLASSES) assert.ok(t.includes(ex), `exceção ausente no doc: ${ex}`);
    });

    check('authority-invariants-v2: reconciliação do veto do auditor', () => {
        const t = read('protocol/v2/authority-invariants-v2.md');
        assert.ok(t.includes('AUDITOR ≠ VETO SOBERANO'));
        assert.ok(t.includes('BINDING ON TECHNICAL TRANSITION'));
        assert.ok(t.includes('PART I (protocol/v1) = BASELINE SOVEREIGN'));
    });

    check('operational-triggers: Prompt 0..3 como contratos internos; TRIGGER ≠ AUTHORIZATION', () => {
        const t = read('protocol/v2/operational-triggers.md');
        assert.ok(t.includes('KEEP INTERNALLY'));
        assert.ok(t.includes('TRIGGER ≠ AUTHORIZATION'));
        for (const g of ['Agente, iniciar sessão', 'Agente, continuar', 'Agente, publicar']) {
            assert.ok(t.includes(g), `gatilho ausente no doc: ${g}`);
        }
    });

    check('README e SKILL referenciam a camada V2 e reconciliação', () => {
        const readme = read('README.md');
        const skill = read('skills/operational-kit/SKILL.md');
        assert.ok(readme.includes('protocol/v2'));
        assert.ok(readme.includes('PART II (protocol/v2) QUALIFICA POR CLASSE DE RISCO'));
        assert.ok(skill.includes('Governança Proporcional ao Risco — Camada V2'));
        assert.ok(skill.includes('PROPORTIONAL GOVERNANCE ≠ FAST TRACK'));
    });

    check('Precedência: protocol/v1 preservado (baseline SOVEREIGN) e 6 princípios intactos', () => {
        const principles = read('protocol/v1/principles.md');
        for (let i = 1; i <= 6; i++) {
            assert.ok(principles.includes(`Princípio ${i}:`), `Princípio ${i} ausente`);
        }
        const lifecycle = read('protocol/v1/lifecycle.md');
        assert.ok(lifecycle.includes('baseline `SOVEREIGN`'));
        const sm = read('protocol/v1/state-machine.md');
        assert.ok(sm.includes('não** são estados desta máquina') || sm.includes('não são estados desta máquina'));
    });

    check('Closeout: KIT UPDATE ≠ PROJECT UPDATE e não-atualização de consumidores', () => {
        const t = read('protocol/v2/authority-invariants-v2.md') + read('README.md');
        assert.ok(t.includes('KIT UPDATE'));
        assert.ok(t.includes('PART II (protocol/v2) QUALIFIES') || t.includes('QUALIFICA POR CLASSE DE RISCO'));
    });

    console.log(`\n════════════════════════════════════════════════════════════════`);
    console.log(`  Resultado da Suíte Risk-Governance V2: ${passed} verificações PASS, ${failed} FAIL`);
    console.log(`════════════════════════════════════════════════════════════════\n`);

    if (failed > 0) process.exit(1);
}

runTests();
