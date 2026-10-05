# CHANGELOG — Project Operational Kit

Todas as alterações notáveis neste projeto serão documentadas neste arquivo.
O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao Versionamento Semântico.

---

## [2.0.0] - 2026-10-05

### Adicionado — Camada Aditiva V2: Risk-Proportional Governance & Continuous Engineering Loop
- **`protocol/v2/risk-governance.md`:** classes `FAST` / `CONTROLLED` / `SOVEREIGN`, classificação **fail-closed**, matriz de triggers de escalonamento e **auto-escalonamento somente para cima**. Operacionaliza o Princípio 6 (Verificabilidade e Proporcionalidade).
- **`protocol/v2/delivery-window-envelope.md`:** **Delivery Window** e **Delivery Envelope** (autorização humana delimitada); `NO ENVELOPE → NO DELIVERY`; Window Classifications **não** são estados canônicos.
- **`protocol/v2/continuous-loop.md`:** **Continuous Engineering Loop** dentro de envelope ativo; Loop Control Classifications **não** são estados; **taxonomia de exceções** (`EX_AUTHORITY`, `EX_SCOPE`, `EX_RISK`, `EX_REVERSIBILITY`, `EX_NORMATIVE`, `EX_PUBLICATION`, `EX_CLOSURE`, `EX_SECURITY`, `EX_AMBIGUITY`, `EX_ENVIRONMENT`); **Human Attention = Exception-Driven, Not Phase-Driven**.
- **`protocol/v2/human-gate-aggregation.md`:** agregação de Human Gates por classe (FAST/CONTROLLED) preservando HG1/HG2 para `SOVEREIGN`.
- **`protocol/v2/proportional-validation-audit.md`:** densidade de validação/auditoria proporcional (Automated / Integrated Independent / Sovereign Independent).
- **`protocol/v2/operational-triggers.md`:** gatilhos operacionais semânticos (`Agente, iniciar sessão` · `continuar` · `tratar issue #N` · `auditar` · `corrigir` · `publicar` · `status` · `finalizar sessão`) e preservação dos `OP-PROMPT-0..3` como **contratos internos compatíveis**.
- **`protocol/v2/reporting-and-tracking-compression.md`:** **Micro Evidence** e compressão de tracking (`PRODUCT CAPABILITY → ISSUE`; `SMALL STEP → CHECKPOINT`).
- **`protocol/v2/authority-invariants-v2.md`:** invariantes e reconciliações — auditor sem soberania, Fast Track proibido × proporcionalidade, precedência aditiva.
- **Templates:** `templates/delivery-envelope.md`, `templates/micro-evidence-record.md`, `templates/exception-record.md`.
- **Testes:** `tests/test_risk_governance_v2.js` (classificação fail-closed, escalonamento, loop, agregação, exceções, gatilhos, invariantes e integridade documental).

### Reconciliado
- **"Auditor com poder de veto vinculante" × "AUDITOR ≠ VETO SOBERANO":** o veto técnico do auditor vincula **apenas a transição técnica** (`FINDING → HARDENING_REQUIRED`); **não** confere autoridade soberana e **não** se sobrepõe aos Níveis 1/2 (`protocol/v2/authority-invariants-v2.md`).
- **"Fast Track proibido" × "risk-proportional governance":** `PROPORTIONAL GOVERNANCE ≠ FAST TRACK`, `AGGREGATED GATES ≠ REMOVED AUTHORITY`, `CONTINUOUS LOOP ≠ CONTINUOUS AUTHORITY`. A proibição de `SKILL §8.8` permanece vigente; a proporcionalidade **regulada por classe** é aplicação legítima do Princípio 6.

### Modificado
- `README.md`: camada aditiva V2 e estrutura canônica do repositório.
- `skills/operational-kit/SKILL.md`: seção V2 e reconciliação da vedação de "Fast Track".
- `protocol/v1/lifecycle.md` e `protocol/v1/state-machine.md`: notas de precedência (V1 = baseline `SOVEREIGN`; Window/Loop Classifications ≠ estados).
- `prompts/v1/prompt-0..3`: nota de compatibilidade V2 (contratos internos).

### Preservado
- Os **seis princípios canônicos** permanecem **inalterados**.
- `protocol/v1/` permanece o **baseline `SOVEREIGN`**; a V2 é **aditiva**.
- **`KIT UPDATE ≠ PROJECT UPDATE`:** nenhum projeto consumidor é atualizado automaticamente.

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
