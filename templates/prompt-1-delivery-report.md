# [PROMPT-1] DELIVERY REPORT: <MISSION_NAME>

**Data / Timestamp:** <YYYY-MM-DDTHH:MM:SSZ>  
**Executor:** <Identificador do executor / agente / operador>  
**Baseline Inicial:** <Commit ou estado de partida> `[FACT]`  
**Baseline Final:** <Commit ou estado resultante da entrega> `[FACT]`  
**Status Operacional:** `DELIVERY_CANDIDATE`

---

## 1. Mandato e Autorização

* **Missão Autorizada:** <Título ou descrição da missão executada> `[REQUIREMENT]`
* **Referência de Autorização:** <Decisão humana, issue, ticket ou mandato com link/id> `[AUTHORIZATION]`
* **Escopo Autorizado:** <Limites acordados e declarados no mandato> `[REQUIREMENT]`

---

## 2. Escopo Executado vs. Escopo Autorizado

* **Itens Implementados (In-Scope):**
  * `<Item 1>` `[FACT]`
  * `<Item 2>` `[FACT]`
* **Limites de Escopo Respeitados (Out-of-Scope mantido intacto):**
  * `<Item intocado 1>` `[FACT]`
  * `<Item intocado 2>` `[FACT]`

---

## 3. Estado Inicial vs. Estado Final

* **Resumo das Alterações:** <Síntese das modificações introduzidas> `[FACT]`
* **Arquivos Modificados / Criados / Removidos:**
  * `[+] <caminho/arquivo_criado>` `[FACT]`
  * `[*] <caminho/arquivo_modificado>` `[FACT]`
  * `[-] <caminho/arquivo_removido>` `[FACT]`
* **Estado do Workspace / Worktree:** <ex: limpo, sem arquivos residuais não rastreados> `[FACT]`

---

## 4. Evidências de Execução e Verificação

* **Evidências Coletadas:**
  * `<Evidência 1: hash, log, commit, link de CI, URL ou observação>` `[EVIDENCE]`
  * `<Evidência 2: resultado de inspeção ou comando>` `[EVIDENCE]`
* **Testes Executados [quando aplicável]:**
  * `<Comando de teste / inspeção executado>`: `<Resultado obtido: Passou / Falhou>` `[EVIDENCE]`
  * *Ciclo Red → Green [quando aplicável a correção de defeito/regressão]:* `<Red: teste falhando antes / Green: teste passando após correção>` `[EVIDENCE]`
  * *Caso não aplicável (ex: documentação, baseline ou arquitetura):* `N/A — <Justificativa técnica>` `[FACT]`

---

## 5. Limitações Conhecidas e Riscos Residuais

* **Limitações Técnicas Conhecidas:** <Restrições ou dívidas técnicas não impeditivas> `[FACT]`
* **Riscos Residuais Identificados:** <Condições que demandam atenção na operação ou auditoria> `[HYPOTHESIS]`

---

## 6. Desvios e Exceções [quando aplicável]

* **Desvios Encontrados / Requeridos:** <Nenhum desvio ocorrido | Registro de desvio com ID e autorização> `[FACT]`
* **Referência ao Registro de Desvios:** `<ID do registro em deviations.md.template ou N/A>` `[EVIDENCE]`

---

## 7. Advertência Epistêmica e de Governança

> [!IMPORTANT]
> **O relatório do executor NÃO constitui auditoria independente (`EXECUTOR REPORT ≠ INDEPENDENT AUDIT`).**
> A existência de testes com resultado positivo não constitui homologação (`TESTED ≠ HOMOLOGATED`).
> Esta entrega é submetida exclusivamente como candidata à auditoria independente (`DELIVERY_CANDIDATE`).

---

## 8. Estado Final da Entrega

* **Status da Fase:** `DELIVERY_CANDIDATE`
* **Transição Requerida:** Submissão ao Contrato 2 (Prompt 2 — Auditoria Independente).
