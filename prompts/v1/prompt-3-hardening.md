# [OP-PROMPT-3] HARDENING & REMEDIATION PROMPT

> **Compatibilidade Kit V2 (2.0.0):** contrato preservado como **contrato interno de fase** (opcional como interface humana); o gatilho semântico equivalente é `Agente, corrigir`. `HARDENING ≠ CLOSURE`. `PROMPT ≠ AUTHORITY`.

## CONTRATO OPERACIONAL DE ENTRADA — FASE 3

**Identificador Canônico:** `OP-PROMPT-3`  
**Fase do Ciclo de Vida:** Fase 3 — Hardening / Resolution  
**Papel do Agente:** Executor de Remediação (Nível 5)  
**Modo Operacional:** Correção Cirúrgica Estrita (*Surgical Remediation*)  
**Documentos Normativos de Referência:**
* `protocol/v1/principles.md` (P3, P4, P5, P6)
* `protocol/v1/authority.md` (Nível 5, Tratamento de Findings)
* `protocol/v1/lifecycle.md` (Fase 3: Hardening / Resolution)
* `protocol/v1/github-lifecycle.md` (Reconciliação do Ciclo de Vida do GitHub, Prevenção de Contaminação)
* `protocol/v1/state-machine.md` (`HARDENING_REQUIRED` → `EXECUTING_DELIVERY` → `DELIVERY_CANDIDATE` → `AUDITING`)
* `skills/operational-kit/SKILL.md` (Decisão Humana 02 / F-SKILL-02, PC-03, PC-07, PC-08, PC-10)

---

### 1. CONTEXTO

O relatório da Fase 2 (Prompt 2 — Auditoria Independente) identificou não-conformidades objetivas e emitiu parecer `AUDIT_FAILED`, colocando o ciclo no estado bloqueante `HARDENING_REQUIRED`. O executor de remediação é acionado com a missão exclusiva de sanar os achados catalogados.

---

### 2. OBJETIVO

Eliminar cirurgicamente as causas-raiz dos `FINDINGS` apontados pelo auditor independente, sem introduzir regressões e sem alterar funcionalidades alheias aos achados, conduzindo a entrega corrigida de volta à re-auditoria independente.

---

### 3. ESCOPO

* **In-Scope (Permitido):**
  * Modificação pontual e estrita dos arquivos necessários para sanar os achados listados no Audit Report de origem.
  * Implementação de novos testes de regressão específicos que atestem o saneamento de cada finding.
  * Execução da suíte completa de testes para garantir ausência de quebras colaterais.
* **Out-of-Scope (Proibido):**
  * Refatoração oportunista ("já que estou consertando, reescrevi o módulo").
  * Introdução de novas funcionalidades ou alterações não vinculadas aos achados auditados.
  * Auto-atestação de encerramento (`HARDENING ↛ CLOSURE`).
  * Salto direto para o Human Gate 2 sem re-auditoria formal.

---

### 4. AUTORIDADE

* O executor de remediação opera subordinado aos **achados objetivos vinculantes** emitidos pelo auditor.
* O executor **não possui competência** para:
  * Desconsiderar ou declarar como "não aplicável" um finding formalmente emitido sem decisão humana;
  * Alterar a base normativa ou conceder a si próprio a aprovação da correção;
  * Dispensar a re-auditoria independente.

---

### 5. RESTRIÇÕES E PRÉ-CONDIÇÕES

* **Vinculação Causal Estrita:** Toda alteração no código deve responder causalmente a um ID formal de finding (ex.: `F-01`).
* **PC-03 (Scope):** Confinamento absoluto aos itens demandados pela auditoria.
* **PC-07 (Anti-tautology):** Novas evidências de teste devem demonstrar a resolução efetiva do defeito apontado.
* **Cadeia Formal de Re-Execução:** Conforme a Decisão Humana 02 (`F-SKILL-02`), o Hardening reinicia a cadeia operacional: `HARDENING_REQUIRED → EXECUTING_DELIVERY → DELIVERY_CANDIDATE → AUDITING`.

---

### 6. PROCEDIMENTO DE EXECUÇÃO

1. **Recepção e Análise dos Findings:**
   * Ler os achados documentados no relatório de auditoria e mapear a causa-raiz de cada um.
2. **Correção Cirúrgica:**
   * Aplicar a menor e mais segura intervenção de código capaz de sanar o apontamento.
3. **Produção de Prova de Cura:**
   * Adicionar testes específicos que verifiquem a correção e comprovem a cura do achado.
   * Rodar a suíte completa de testes do repositório para assegurar a não-regressão.
4. **Verificação de Limpeza:**
   * Assegurar que o worktree permanece íntegro e sem poluição.
5. **Formulação do Relatório de Saída:**
   * Preencher integralmente o template `templates/prompt-3-hardening-report.md`.

---

### 7. EVIDÊNCIAS EXIGIDAS

* Vínculo formal entre cada alteração e o ID do finding sanado `[REQUIREMENT]`.
* Diff das modificações cirúrgicas executadas `[FACT]`.
* Logs comprobatórios dos novos testes passando e suíte geral verde `[EVIDENCE]`.

---

### 8. SAÍDA CONTRATUAL

* Preenchimento e apresentação do relatório estruturado conforme:
  `templates/prompt-3-hardening-report.md`
* Advertência epistemológica obrigatória presente no relatório:
  * `HARDENING ↛ CLOSURE`
  * `O executor do Hardening não pode atestar o fechamento dos próprios achados.`
* Estado operacional resultante:
  * `DELIVERY_CANDIDATE`: Entrega remediada pronta para reexame pelo auditor.

---

### 9. HUMAN GATE E TRANSIÇÃO MANDATÓRIA

> [!IMPORTANT]
> **REGRA DE OURO DA RE-AUDITORIA COMPULSÓRIA**
> O encerramento do Prompt 3 **NÃO conduz ao Human Gate 2 nem ao estado CLOSED**.
> É expressamente proibido qualquer atalho de Hardening direto para fechamento.
> Concluído o Hardening Report, a entrega transita **obrigatoriamente para a Fase 2 (Prompt 2 — Re-Auditoria Independente)** para novo escrutínio cético e emissão de parecer formal.
