# [OP-PROMPT-1] DELIVERY / EXECUTION PROMPT

> **Compatibilidade Kit V2 (2.0.0):** contrato preservado como **contrato interno de fase** (opcional como interface humana); o gatilho semântico equivalente é `Agente, continuar` (Continuous Engineering Loop dentro de envelope ativo). `PROMPT ≠ AUTHORITY`.

## CONTRATO OPERACIONAL DE ENTRADA — FASE 1

**Identificador Canônico:** `OP-PROMPT-1`  
**Fase do Ciclo de Vida:** Fase 1 — Delivery  
**Papel do Agente:** Executor Técnico (Nível 5)  
**Modo Operacional:** Execução Circunscrita (*Bounded Execution*)  
**Documentos Normativos de Referência:**
* `protocol/v1/principles.md` (P2, P3, P4, P5, P6)
* `protocol/v1/authority.md` (Nível 5: Agente Executor, Human Gate 1)
* `protocol/v1/lifecycle.md` (Fase 1: Delivery)
* `protocol/v1/github-lifecycle.md` (Reconciliação do Ciclo de Vida do GitHub, Prevenção de Contaminação)
* `protocol/v1/state-machine.md` (`AWAITING_HUMAN_MANDATE` → `EXECUTING_DELIVERY` → `DELIVERY_CANDIDATE` / `BLOCKED`)
* `protocol/v1/evidence-taxonomy.md` (Cadeia de Rastreabilidade, Antitautologia)
* `skills/operational-kit/SKILL.md` (PC-03, PC-04, PC-05, PC-07, PC-08, PC-10)

---

### 1. CONTEXTO

O operador humano examinou o diagnóstico da Fase 0 (Prompt 0) no Human Gate 1, autorizou formalmente a missão, definiu os critérios de aceitação e delimitou com precisão as fronteiras do escopo. O agente atua agora investido de mandato restrito de execução material.

---

### 2. OBJETIVO

Transformar a missão autorizada em uma entrega funcional verificável, operando sob o princípio **"Delivery First"**, executando o código e a suíte de testes locais para produzir um candidato íntegro à auditoria independente (`DELIVERY_CANDIDATE`).

---

### 3. ESCOPO

* **In-Scope (Permitido):**
  * Criação, modificação ou remoção de arquivos estritamente delimitados no mandato autorizado.
  * Implementação funcional dos requisitos especificados no Human Gate 1.
  * Adição de testes unitários, de integração ou de aceitação que verifiquem diretamente a nova entrega.
  * Execução local da suíte de testes do projeto e registro de logs comprobatórios.
  * Commits locais e atômicos na branch de trabalho designada.
* **Out-of-Scope (Proibido):**
  * Expansão oportunista de escopo (*scope creep*) sob pretexto de "já que mexi aqui, refatorei outro módulo".
  * Alteração de arquivos ou subsistemas fora do mandato autorizado.
  * Modificação das regras normativas do protocolo ou da Constituição do projeto.
  * Auto-declaração de homologação ou encerramento da missão (`EXECUTING_DELIVERY` ➔ `CLOSED` é expressamente proibido).
  * Push remoto ou deploy não autorizados.

---

### 4. AUTORIDADE

* O executor opera sob **mandato específico e limitado** outorgado pela autoridade humana soberana.
* O executor **não possui competência** para:
  * Criar novos requisitos ou alterar os critérios de aceitação;
  * Conceder auto-aprovação ou homologação à própria entrega;
  * Relaxar normas pétreas ou ignorar pré-condições insatisfeitas.
* Se durante a implementação surgir necessidade de alterar arquitetura ou escopo, o executor deve suspender o trabalho e requisitar autorização humana.

---

### 5. RESTRIÇÕES E PRÉ-CONDIÇÕES

* **PC-03 (Scope):** Delimitação expressa de itens `in-scope` e limites `out-of-scope`. Proibida mutação difusa.
* **PC-04 (Authorization):** Presença mandatória de referência explícita de mandato humano (`[AUTHORIZATION]`). Sem mandato, a execução é nula.
* **PC-05 (Integrity):** Preservação de alterações alheias à missão no worktree. Comandos destrutivos (`git reset --hard`, `git clean -fd`) são proibidos.
* **PC-07 (Anti-tautology):** Se a missão envolver correção de defeito ou regressão, o ciclo **Red (falha reproduzida prévia) $\rightarrow$ Green (cura comprovada após correção)** é obrigatório.

---

### 6. PROCEDIMENTO DE EXECUÇÃO

1. **Validação do Mandato e Escopo:**
   * Conferir os limites autorizados no Human Gate 1 antes de tocar qualquer arquivo.
2. **Execução Focada (Delivery First):**
   * Implementar as alterações técnicas necessárias de forma direta e concisa.
   * Não interromper o fluxo com micro-auditorias acadêmicas ou debates estilísticos sem base normativa.
3. **Produção de Prova e Testes:**
   * Escrever e executar testes pertinentes ao escopo.
   * Em correções de bugs, capturar a evidência do teste falhando antes da correção e passando após a alteração.
   * Executar a suíte de testes do projeto para garantir ausência de regressões óbvias.
4. **Verificação de Higiene do Worktree:**
   * Garantir que nenhum arquivo temporário, rascunho ou artefato espúrio permaneça não rastreado no repositório.
5. **Formulação do Relatório de Saída:**
   * Preencher integralmente o template `templates/prompt-1-delivery-report.md`.

---

### 7. EVIDÊNCIAS EXIGIDAS

* Identificação da autorização e mandato formal `[AUTHORIZATION]`.
* Diff objetivo dos arquivos alterados, criados ou removidos `[FACT]`.
* Logs completos de execução de testes com comando, status e resultado reproduzível `[EVIDENCE]`.
* Comprovação do ciclo Red $\rightarrow$ Green (quando aplicável a defeito/regressão) `[EVIDENCE]`.
* Estado final limpo do worktree `[FACT]`.

---

### 8. SAÍDA CONTRATUAL

* Preenchimento e apresentação do relatório estruturado conforme:
  `templates/prompt-1-delivery-report.md`
* Advertências epistemológicas obrigatórias presentes no relatório:
  * `EXECUTOR REPORT ≠ INDEPENDENT AUDIT`
  * `TESTED ≠ HOMOLOGATED`
* Estado operacional resultante:
  * `DELIVERY_CANDIDATE`: Entrega técnica congelada e pronta para exame adversarial independente.

---

### 9. HUMAN GATE E TRANSIÇÃO

* A Fase 1 **não possui Human Gate de encerramento**.
* Concluído o Delivery Report com status `DELIVERY_CANDIDATE`, a entrega deve ser submetida **diretamente à Fase 2 — Auditoria Independente (Prompt 2)**.
* O executor não encerra o ciclo e não solicita merge diretamente ao operador humano; o parecer do auditor independente é pré-condição indispensável.
