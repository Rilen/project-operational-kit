# CHANGELOG — Project Operational Kit

Todas as alterações notáveis neste projeto serão documentadas neste arquivo.
O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao Versionamento Semântico.

---

## [1.1.0] - 2026-10-03

### Adicionado
- **Norma Canônica de Reconciliação do Ciclo de Vida do GitHub (`protocol/v1/github-lifecycle.md`):**
  - Estabelecimento do princípio fundamental: `"Git clean" ≠ "Project governance reconciled"`.
  - Separação entre dimensão técnica de execução e dimensão gerencial no GitHub.
  - Princípio mandatório *Discovery Before Mutation* com estados formais de superfície: `PRESENT`, `ABSENT`, `NOT USED`, `UNKNOWN`, `NOT APPLICABLE`.
  - Reconciliação dimensional para Issues, Pull Requests, Milestones e GitHub Projects.
  - Detecção preventiva de contaminação cruzada de branches (*Cross-Issue Branch Contamination*).
  - Formalização conceitual e taxonomia de *GitHub Governance Drift* (`DRIFT_ISSUE_UNRESOLVED`, `DRIFT_PREMATURE_CLOSURE`, `DRIFT_PROJECT_STATUS_MISMATCH`, etc.).
  - Semântica de encerramento expressiva (*Closeout Semantics*): `TECHNICALLY_CLEAN_GOVERNANCE_RECONCILED`, `TECHNICALLY_CLEAN_GOVERNANCE_PENDING`, `TECHNICALLY_DIRTY_GOVERNANCE_PENDING`, `BLOCKED_GOVERNANCE_CONTAMINATION`.
- **Pré-Condição Operacional PC-10 na Skill (`skills/operational-kit/SKILL.md`):**
  - Guia procedimental para auditoria e governança das superfícies do GitHub.
  - Regra estrita de Human Gate para qualquer mutação gerencial remota.
- **Template Canônico do Recibo de Reconciliação (`templates/github-lifecycle-reconciliation-receipt.md`):**
  - Modelo padronizado de saída para inventário de capacidades, reconciliação de issue/PR/milestone/project e plano de saneamento.
- **Suíte de Testes Conceituais e Validação (`tests/test_github_lifecycle_reconciliation.js`):**
  - Cobertura dos 10 casos canônicos de governança e compatibilidade.

### Modificado
- `README.md`: Atualização da estratificação de 4 camadas para incluir `github-lifecycle.md`, pré-condição PC-10 e o novo template de recibo.
- `protocol/v1/lifecycle.md`: Integração da reconciliação de governança e do recibo no Human Gate 2 (Closure).
- `prompts/v1/prompt-0-bootstrap.md`, `prompt-1-delivery.md`, `prompt-2-audit.md`, `prompt-3-hardening.md`: Inclusão de referências à norma de reconciliação do GitHub e pré-condição PC-10.
- `templates/prompt-0-bootstrap-report.md`, `prompt-1-delivery-report.md`, `prompt-2-audit-report.md`: Adição de campos de diagnóstico de superfícies e status consolidado de closeout.

---

## [1.0.0] - 2026-10-02

### Adicionado
- Versão canônica inaugural do **Project Operational Kit**.
- Base normativa V1 em `protocol/v1/`: `principles.md`, `authority.md`, `lifecycle.md`, `state-machine.md`, `evidence-taxonomy.md`, `project-archetypes.md`.
- Skill Operacional V1 em `skills/operational-kit/SKILL.md` com pré-condições PC-01 a PC-09.
- Contratos operacionais de entrada em `prompts/v1/`: Prompts 0 a 3.
- Templates formais de saída em `templates/`: Bootstrap, Delivery, Audit, Hardening e Deviations.
