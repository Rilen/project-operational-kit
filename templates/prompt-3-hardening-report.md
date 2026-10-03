# [PROMPT-3] HARDENING REPORT: <REMEDIATION_TARGET_NAME>

**Data / Timestamp:** <YYYY-MM-DDTHH:MM:SSZ>  
**Executor do Hardening:** <Identificador do agente / operador de remediação>  
**Auditoria de Origem:** <ID ou link do Relatório de Auditoria que gerou os achados> `[FACT]`  
**Baseline Inicial:** <Commit ou estado de partida do hardening> `[FACT]`  
**Baseline Final:** <Commit ou estado remediado submetido para re-auditoria> `[FACT]`  
**Status Operacional:** `RE_AUDIT_CANDIDATE`

---

## 1. Escopo Estrito da Remediação

* **Achados Alvo (Findings Vinculados):**
  * `<ID do Finding, ex: F-01>`: `<Descrição resumida do achado a sanear>` `[REQUIREMENT]`
* **Proibição de Refatoração Oportunista:**
  * O escopo desta intervenção é estritamente limitado ao saneamento dos achados identificados na auditoria de origem.
  * Modificações não relacionadas, melhorias não autorizadas ou refatorações colaterais são proibidas. `[FACT]`

---

## 2. Ações Corretivas Executadas

* **Detalhamento das Correções por Achado:**
  * **Tratamento de `<ID do Finding>`:**
    * *Causa Raiz Identificada:* <Descrição sucinta da causa técnica ou documental> `[FACT]`
    * *Alteração Realizada:* <Descrição objetiva da modificação implementada> `[FACT]`
    * *Arquivos Modificados:* `<caminho/arquivo>` `[FACT]`
* **Resumo de Arquivos Alterados:**
  * `[*] <caminho/arquivo>` `[FACT]`

---

## 3. Novas Evidências e Verificação de Não-Regressão

* **Evidências de Resolução dos Achados:**
  * `<Evidência 1: novo log, teste de regressão, hash ou diff comprovando saneamento>` `[EVIDENCE]`
* **Verificação de Ausência de Regressões:**
  * `<Resultado da suíte de integridade ou testes existentes>`: `<Status: Passou>` `[EVIDENCE]`
* **Limitações Técnicas Remanescentes:** <Restrições conhecidas ou notas técnicas> `[FACT]`

---

## 4. Regra Vinculante de Transição do Ciclo de Vida

> [!IMPORTANT]
> **O saneamento via Hardening requer obrigatoriamente retorno para re-auditoria independente (`HARDENING → RE-AUDITORIA`).**
> É expressamente proibida a transição direta do Hardening para encerramento (`HARDENING ↛ CLOSURE`).
> O executor do Hardening não pode atestar o fechamento dos próprios achados.

---

## 5. Estado Final do Hardening

* **Status da Intervenção:** `RE_AUDIT_CANDIDATE`
* **Próxima Transição Mandatória:** Submissão ao Contrato 2 (Prompt 2 — Re-Auditoria Independente).
