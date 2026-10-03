# [RECEIPT] GITHUB LIFECYCLE RECONCILIATION RECEIPT

**Data / Timestamp:** <YYYY-MM-DDTHH:MM:SSZ>  
**Ambiente / Identificador:** <ID_DO_AMBIENTE_OU_WORKSPACE>  
**Missão / Demanda:** <MISSÃO_OU_ISSUE_VINCULADA>  
**Branch Ativa:** <NOME_DA_BRANCH> `[FACT]`  
**HEAD Commit:** <HASH_DO_COMMIT_HEAD> `[FACT]`  
**Estado da Sessão:** `TECHNICALLY_CLEAN_GOVERNANCE_RECONCILED` | `TECHNICALLY_CLEAN_GOVERNANCE_PENDING` | `TECHNICALLY_DIRTY_GOVERNANCE_PENDING` | `BLOCKED_GOVERNANCE_CONTAMINATION`

---

## 1. Inventário de Capacidades do GitHub (Discovery)

| Superfície | Status (`PRESENT` / `ABSENT` / `NOT USED` / `UNKNOWN` / `N/A`) | Identificador / Detalhes Observados | Fonte de Inspeção (`gh` / `API` / `Git`) |
|---|---|---|---|
| **Repository & Remote** | `<PRESENT>` | `<ex: Rilen/project-operational-kit>` | `[FACT] git remote -v` |
| **Issues** | `<PRESENT / ABSENT / NOT USED>` | `<ex: Issue #NN - Título>` | `[FACT] gh issue view / api` |
| **Pull Requests** | `<PRESENT / ABSENT / NOT USED>` | `<ex: PR #MM - Título>` | `[FACT] gh pr view / api` |
| **Milestones** | `<PRESENT / ABSENT / NOT USED>` | `<ex: Milestone v1.0.0 (ID 1)>` | `[FACT] gh api milestones` |
| **Projects** | `<PRESENT / ABSENT / NOT USED>` | `<ex: Project "Roadmap 2026">` | `[FACT] gh project list` |
| **Labels** | `<PRESENT / ABSENT / NOT USED>` | `<ex: type:hardening, priority:medium>` | `[FACT] gh issue view` |
| **Releases / Tags** | `<PRESENT / ABSENT / NOT USED>` | `<ex: v1.0.0>` | `[FACT] git tag -l` |

---

## 2. Reconciliação da Demanda / Issue

* **Issue Vinculada:** `<#NN — Título da Demanda>` `[FACT]`
* **Estado Remoto:** `<OPEN | CLOSED>` `[FACT]`
* **Critérios de Aceitação da Issue:**
  * `[ ] <Critério 1>`: `<Atendido / Pendente / Não verificado>` `[EVIDENCE]`
  * `[ ] <Critério 2>`: `<Atendido / Pendente / Não verificado>` `[EVIDENCE]`
* **Veredito de Conformidade Técnica:**
  * `<IMPLEMENTATION_COMPLETE | IMPLEMENTATION_PENDING | N/A>`
* **Veredito de Governança da Issue:**
  * `<ISSUE_GOVERNANCE_RECONCILED | ISSUE_GOVERNANCE_PENDING>`
  * *Nota Epistemológica:* `IMPLEMENTATION COMPLETE ≠ ISSUE GOVERNANCE COMPLETE`. A conclusão do código não fecha a issue sem autorização humana.

---

## 3. Reconciliação de Branch e Risco de Contaminação (PR & Git)

* **Branch Base:** `<ex: main>` `[FACT]`
* **Branch da Missão:** `<ex: feat/issue-19-rate-limit>` `[FACT]`
* **Pull Request Associado:** `<PR #MM | Nenhum associado>` `[FACT]`
* **Verificação de Contaminação Cruzada de Branches (*Cross-Issue Contamination*):**
  * *Commits da branch divergem da base:* `<SIM / NÃO>` `[FACT]`
  * *Presença de commits de outras issues não integradas:* `<DETECTADO / NÃO DETECTADO>` `[FACT]`
  * *Avaliação de Risco:* `<NENHUM_RISCO | RISCO_CONTAMINAÇÃO_DETECTADO>`
  * *Ação Preventiva [se risco detectado]:* `<Isolamento de branch requerido / Parada mandatória>` `[BLOCK]`

---

## 4. Reconciliação de Milestone e Project

* **Milestone Observado:** `<Nome do Milestone ou N/A>` `[FACT]`
  * *Alinhamento:* `<Coerente com a entrega | Divergente | Sem milestone>` `[FACT]`
  * *Progresso Agregado:* `<Derivado do estado das issues componentes>` `[FACT]`
* **GitHub Project Observado:** `<Nome do Project ou N/A>` `[FACT]`
  * *Status Atual do Card:* `<ex: Backlog / In Progress / Review / Done>` `[FACT]`
  * *Status Técnico Real:* `<ex: DELIVERY_CANDIDATE>` `[FACT]`
  * *Alinhamento:* `<ALINHADO | DRIFT_DETECTADO | N/A>`

---

## 5. Diagnóstico de Governança e Drift (*Governance Drift*)

| Categoria do Drift | Superfície Afetada | Descrição do Desvio Observado | Ação Proposta de Saneamento |
|---|---|---|---|
| `<ex: DRIFT_ISSUE_UNRESOLVED>` | `<Issue #NN>` | `<Código implementado, mas issue permanece sem evidências>` | `<Submeter parecer de auditoria e fechar no Human Gate 2>` |
| `<ex: DRIFT_PROJECT_STATUS_MISMATCH>` | `<Project>` | `<Card permanece em 'In Progress' após entrega>` | `<Atualizar card para 'Ready for Review' após autorização>` |

*Se nenhum drift for identificado: Registrar `Nenhum desvio de governança identificado. Estado técnico e gerencial alinhados.`* `[FACT]`

---

## 6. Ações Necessárias e Autorização Humana

* **Ações de Governança Propostas:**
  - [ ] `<ex: Atualizar comentários da Issue #NN com evidências do teste>` `[PROPOSAL]`
  - [ ] `<ex: Submeter Pull Request para origin/main>` `[PROPOSAL]`
  - [ ] `<ex: Mover card no GitHub Projects para Done>` `[PROPOSAL]`
  - [ ] `<ex: Fechar Issue #NN após merge>` `[PROPOSAL]`
* **Requer Autorização Humana para Mutação Remota no GitHub?**
  * `SIM` (Mutações em Issues, PRs, Projects ou Milestones dependem do Human Gate).

---

## 7. Parecer de Fechamento de Sessão (*Closeout Verdict*)

* **Dimensão Técnica:** `<TECHNICALLY_CLEAN | TECHNICALLY_DIRTY>`
* **Dimensão de Governança:** `<GOVERNANCE_RECONCILED | GOVERNANCE_PENDING>`
* **Classificação Consolidada:**
  * `<TECHNICALLY_CLEAN_GOVERNANCE_RECONCILED | TECHNICALLY_CLEAN_GOVERNANCE_PENDING | TECHNICALLY_DIRTY_GOVERNANCE_PENDING | BLOCKED_GOVERNANCE_CONTAMINATION>`
* **Advertência:**
  > [!IMPORTANT]
  > O status `TECHNICALLY_CLEAN_GOVERNANCE_PENDING` impede a alegação de encerramento total. A sessão encerra a engenharia física, mas deixa explícitas as deliberações gerenciais necessárias para o operador no GitHub.
