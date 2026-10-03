# [PROMPT-2] AUDIT REPORT: <AUDIT_TARGET_NAME>

**Data / Timestamp:** <YYYY-MM-DDTHH:MM:SSZ>  
**Auditor:** <Identificador do auditor independente>  
**Objeto Auditado:** <Candidato à entrega / ID do relatório de delivery ou commit auditado> `[FACT]`  
**Baseline Auditado:** <Commit, tag ou estado de referência verificado> `[FACT]`  
**Classificação Final:** `AUDIT_PASSED` | `AUDIT_FAILED` | `BLOCKED`

---

## 1. Escopo da Auditoria e Critérios Normativos

* **Objeto sob Exame:** <Identificação do artefato, commit, diff ou entrega submetida> `[FACT]`
* **Critérios Normativos Aplicados:** <Princípios, regras e pré-condições verificadas> `[REQUIREMENT]`
* **Limites de Escopo da Auditoria:**
  * O auditor examina estritamente o objeto submetido e as regras aplicáveis.
  * O auditor não amplia escopo, não cria novos requisitos técnicos e não introduz correções no código auditado. `[FACT]`

---

## 2. Evidências Examinadas

| Evidência Submetida | Origem / Tipo | Procedimento de Verificação Independente | Status de Validação |
|---|---|---|---|
| `<ex: Diff / Commit>` | `<Git / Repositório>` | `<Inspeção de diff contra baseline>` | `[EVIDENCE] Confirmado` |
| `<ex: Log de Teste>` | `<CI / Execução local>` | `<Reprodução independente do comando>` | `[EVIDENCE] Confirmado / Divergente` |
| `<ex: Referência Externa>` | `<URL / Ticket / Run ID>` | `<Verificação de acessibilidade e conteúdo>` | `[EVIDENCE] Confirmado` |

---

## 3. Procedimentos de Verificação Executados

* **Inspeção de Estado e Integridade:** <Comandos ou verificações de integridade executados> `[FACT]`
* **Verificação de Escopo:** <Conferência entre mandato autorizado e modificações observadas> `[FACT]`
* **Reprodução de Testes e Evidências:** <Passos executados de forma independente para atestar a entrega> `[FACT]`

---

## 4. Registro de Achados (Findings) [quando houver]

| ID do Finding | Severidade (`BLOCKING` / `HIGH` / `MEDIUM` / `LOW` / `INFO`) | Impacto Técnico / Normativo | Evidência Observável | Descrição do Achado |
|---|---|---|---|---|
| `<F-01>` | `<BLOCKING>` | `<ex: Quebra de pré-condição PC-02>` | `<Log / Linha / Commit>` | `<Descrição objetiva do achado>` |

> [!NOTE]
> **Papel do Auditor e Efeito dos Achados:**
> O auditor não possui veto soberano (`AUDITOR ≠ VETO SOBERANO`).
> Um achado (`FINDING`) impeditivo ou relevante pode suspender o avanço da transição auditada enquanto permanecer aberto e sem tratamento.
> O tratamento de um achado requer remediação via Hardening (Contrato 3) ou decisão humana de governança (`[HUMAN DECISION]`).

---

## 5. Advertência de Homologação e Produção

> [!IMPORTANT]
> **A aprovação na auditoria (`AUDIT_PASSED`) atesta a conformidade da entrega com o escopo e regras verificadas, mas NÃO constitui validação em produção, deploy automático nem homologação institucional soberana (`AUDIT_PASSED ≠ HOMOLOGATED`).**
> Homologações de negócio ou institucionais permanecem sob autoridade humana exclusiva.

---

## 6. Conclusão e Resultado da Auditoria

* **Resultado da Avaliação:** <`AUDIT_PASSED` | `AUDIT_FAILED` | `BLOCKED`>
* **Status de Fechamento de Sessão (Closeout):**
  * `<TECHNICALLY_CLEAN_GOVERNANCE_RECONCILED | TECHNICALLY_CLEAN_GOVERNANCE_PENDING | BLOCKED_GOVERNANCE_CONTAMINATION>`
* **Justificativa do Resultado:** <Síntese da conformidade verificada ou dos achados que impedem o avanço>
* **Próxima Ação Requerida:**
  * *Em caso de `AUDIT_PASSED`:* Disponível para decisão humana de homologação ou transição seguinte (acompanhado do Recibo de Reconciliação do GitHub).
  * *Em caso de `AUDIT_FAILED`:* Encaminhamento para Contrato 3 (Prompt 3 — Hardening Report) para saneamento dos achados.
  * *Em caso de `BLOCKED`:* Resolução de dependência, contaminação de branch ou pré-condição externa impeditiva.
