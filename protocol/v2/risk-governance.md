# Governança Proporcional ao Risco (Kit V2)

**Versão da Especificação:** 2.0.0
**Status:** Normativo — camada **aditiva** sobre `protocol/v1/`
**Documento Vinculado:** `principles.md` (Princípio 6), `lifecycle.md` (V1), `delivery-window-envelope.md`, `continuous-loop.md`, `human-gate-aggregation.md`

---

## 1. Visão Geral

Este documento operacionaliza o **Princípio 6 (Verificabilidade e Proporcionalidade)** em um mecanismo determinístico de **classes de risco**, permitindo que o rito de governança seja proporcional ao risco da intervenção **sem nunca relaxar autoridade, evidência ou fail-closed**.

```text
GOVERNANCE COST ∝ RISK
GOVERNANCE COST ≠ f(NUMBER OF CHANGES)
```

### 1.1 Precedência (aditividade estrita)

```text
PART I (protocol/v1) = BASELINE SOVEREIGN
PART II (protocol/v2) QUALIFIES PART I BY RISK CLASS
RESTRICTIVE-DEFAULT APPLIES WITHIN A CLASS, NOT ACROSS PART I/II PARAMETRIZATION
```

`[REQUIREMENT]` Esta camada **não revoga** `protocol/v1/`. O ciclo de quatro fases e os dois Human Gates de `lifecycle.md` permanecem o **baseline `SOVEREIGN`**. `FAST` e `CONTROLLED` seguem a parametrização de `human-gate-aggregation.md`, **sem** remover a autoridade humana final.

`[REQUIREMENT]` Conflito entre `v1` e `v2` na mesma classe resolve-se pela interpretação **mais restritiva**. Conflito de **invariantes** (autoridade, evidência, fail-closed) resolve-se sempre a favor do invariante.

---

## 2. Classes de Risco

`[REQUIREMENT]` Existem exatamente três classes: `FAST`, `CONTROLLED`, `SOVEREIGN`.

| Classe | Candidatos | Pré-requisitos inegociáveis |
| :--- | :--- | :--- |
| `FAST` | UI/apresentação, copy, documentação factual, testes, acessibilidade, adapters reversíveis, pequenos refactors, glue de baixo risco | baixo blast radius; reversível; **sem** authority change, trust-boundary change, sensitive-data semantics change, security primitive change, Constitution change, Policy change, produção |
| `CONTROLLED` | capability de aplicação; comportamento de domínio sem authority semantics; fluxo significativo de uma superfície; mudança arquitetural limitada; integração de baixo privilégio; lifecycle de aplicação/sessão | nenhum trigger soberano |
| `SOVEREIGN` | Constituição/base normativa, Policy, autorização, autenticação, RBAC, Human Gate, release governance, dados sensíveis, primitivas criptográficas, produção, irreversível/alto blast radius, trust boundary | ciclo completo (`protocol/v1/lifecycle.md`) |

`[REQUIREMENT]` As classes descrevem **risco da intervenção**, não maturidade do projeto (isso permanece em `project-archetypes.md`).

---

## 3. Classificação Fail-Closed

`[REQUIREMENT]`

```text
FAST ? CONTROLLED        → CONTROLLED
CONTROLLED ? SOVEREIGN   → SOVEREIGN
UNKNOWN RISK             → ESCALATE (SOVEREIGN)
UNCERTAINTY              → MORE GOVERNANCE
```

`[REQUIREMENT]` A classificação **não pode** depender de opinião livre do agente. Em ambiguidade, aplica-se o fail-closed acima. `UNKNOWN ≠ ALLOW`.

---

## 4. Matriz de Triggers de Escalonamento

`[REQUIREMENT]` Qualquer trigger soberano promove a missão para `SOVEREIGN`:

```text
CONSTITUTION_CHANGE · POLICY_CHANGE · AUTHORIZATION_CHANGE · AUTHENTICATION_CHANGE
RBAC_CHANGE · SECURITY_PRIMITIVE_CHANGE · SENSITIVE_DATA_CHANGE · TRUST_BOUNDARY_CHANGE
PRODUCTION_CHANGE · RELEASE_AUTHORITY_CHANGE · IRREVERSIBLE_OPERATION · HIGH_BLAST_RADIUS
SCHEMA_MIGRATION_RISK · EXTERNAL_INTEGRATION_WITH_PRIVILEGE · AUDITABILITY_REDUCTION
```

`[REQUIREMENT]` Promovem a `CONTROLLED` (quando nenhum soberano ocorrer):

```text
NEW_APPLICATION_CAPABILITY · NEW_DOMAIN_BEHAVIOR · NEW_ROUTE_WITH_MUTATION
SESSION_LIFECYCLE_CHANGE · EXTERNAL_INTEGRATION_LOW_PRIVILEGE · CROSS_MODULE_ARCHITECTURE_CHANGE
```

`[REQUIREMENT]` Indicam `FAST` (somente quando nenhum trigger superior ocorrer):

```text
DOC_ONLY · COPY_ONLY · UI_PRESENTATION_ONLY · TEST_ONLY
REVERSIBLE_ADAPTER · LOW_RISK_REFACTOR
```

`[REQUIREMENT]` `FAST` existe somente quando nenhum trigger superior ocorrer e todos os triggers observados forem conhecidos e FAST-safe.

---

## 5. Auto-Escalonamento

`[REQUIREMENT]` O agente **pode** promover `FAST → CONTROLLED` e `CONTROLLED → SOVEREIGN`. O agente **não pode**, autonomamente, rebaixar uma classe fixada por decisão humana.

```text
SELF-ESCALATION: ALLOWED (UP)
SELF-DOWNGRADE: FORBIDDEN
```

`[REQUIREMENT]` A autoridade humana pode fixar/rebaixar a classe; o rebaixamento humano é registrado como `[HUMAN DECISION]`.

---

## 6. Reconciliação: PROPORTIONAL GOVERNANCE ≠ FAST TRACK

`[REQUIREMENT]` A governança proporcional **não** é um "Fast Track" e **não** é um atalho de autoridade:

```text
PROPORTIONAL GOVERNANCE ≠ FAST TRACK
AGGREGATED GATES ≠ REMOVED AUTHORITY
CONTINUOUS LOOP ≠ CONTINUOUS AUTHORITY
```

`[REQUIREMENT]` Definição normativa de **"Fast Track" (proibido)**: qualquer rito que **remova, simule ou dispense** autoridade humana, evidência, fail-closed ou auditoria exigível. A parametrização por classe do V2 **preserva todos** os invariantes; apenas **agrega** gates e **modula** a densidade probatória conforme o risco, sempre dentro de um envelope autorizado.

`[REQUIREMENT]` A vedação de `SKILL §8.8` a "atalhos/overrides" permanece vigente e **não** é contraditada: altera-se apenas a leitura — proporcionalidade **regulada por classe** é aplicação legítima do Princípio 6, não atalho.

```text
NO WRITE WITHOUT MANDATE/ENVELOPE
NO AUTHORITY WITHOUT HUMAN AUTHORITY ACT
```

---

## 7. Não Autoridade

`[REQUIREMENT]` Esta camada não cria autoridade nova e subordina-se integralmente aos Níveis 1 e 2 de `authority.md`. Nenhuma classe autoriza ação fora de um envelope humano.
