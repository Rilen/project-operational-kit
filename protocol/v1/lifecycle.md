# Ciclo de Vida Normativo V1

**Versão da Especificação:** 1.0.0  
**Status:** Normativo  
**Documento Vinculado:** `principles.md`, `authority.md`

---

> **Nota de precedência (Kit V2, a partir de 2.0.0):** este ciclo de quatro fases e dois Human Gates é o **baseline `SOVEREIGN`**. A camada aditiva `protocol/v2/` **qualifica** este ciclo por classe de risco (`FAST`/`CONTROLLED`/`SOVEREIGN`) **sem revogá-lo** e sem remover a autoridade humana final. Ver `protocol/v2/human-gate-aggregation.md`.

---

## 1. Visão Geral

O ciclo de vida do `project-operational-kit` organiza qualquer intervenção técnica em um fluxo determinístico, estruturado em quatro etapas operacionais canônicas e dois Human Gates obrigatórios.

O objetivo do ciclo de vida é assegurar rastreabilidade de ponta a ponta, erradicar o viés de auto-aprovação e garantir que nenhuma linha de código seja introduzida sem mandado explícito e verificação independente.

```
┌────────────────────────────────────────────────────────┐
│ FASE 0: BOOTSTRAP / BASELINE                           │
│ - Diagnóstico do repositório e inspeção fática         │
│ - Extração e prova de carga normativa (NBR)            │
│ - Diagnóstico do estado do ambiente e Git              │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
               [ HUMAN GATE 1: MANDATE ]
         Definição de Missão & Congelamento de Escopo
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│ FASE 1: DELIVERY                                       │
│ - Execução objetiva do escopo autorizado               │
│ - Foco funcional: implementar e rodar testes locais    │
│ - Geração de evidência preliminar de funcionamento     │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│ FASE 2: INDEPENDENT AUDIT                              │
│ - Avaliação adversarial, cética e independente         │
│ - Confronto do diff contra normas e critérios          │
│ - Emissão de parecer formal:                           │
│   PASS / WARNING / FINDING / BLOCK                     │
└───────────────────────────┬────────────────────────────┘
                            │
             ┌──────────────┴──────────────┐
             │ Havendo Findings            │ Zero Findings (PASS)
             ▼                             ▼
┌──────────────────────────┐  [ HUMAN GATE 2: CLOSURE ]
│ FASE 3: HARDENING        │  Revisão Final, Merge, Sign-off
│ - Correção estrita dos   │               │
│   findings apontados     │               ▼
│ - Re-execução de testes  │          [ CLOSED ]
│ - Retorno compulsório    │
│   à Fase 2 (Auditoria)   │
└──────────────────────────┘
```

---

## 2. As Quatro Fases Canônicas

### Fase 0: Bootstrap / Baseline (Prompt 0)
* **Objetivo:** Estabelecer a consciência fática e normativa do ambiente antes de qualquer alteração física em arquivos do projeto.
* **Operações Permitidas:** Exclusivamente de leitura e diagnóstico (*Read-Only*).
* **Entregável Obrigatório: Normative Baseline Record (NBR):**
  1. Identificação formal das fontes normativas encontradas.
  2. Caminho físico no projeto.
  3. Identidade da fonte (hash criptográfico ou commit SHA) comprovando a exata versão lida.
  4. Data e hora da leitura.
  5. Cláusulas aplicáveis extraídas que afetam a missão.
  6. Lacunas, ambiguidades ou conflitos detectados.
  7. Matriz de vínculo entre as regras identificadas e as ações propostas.
* **Condição de Saída:** Diagnóstico completo apresentado ao operador humano. Se houver contradição normativa insanável, o estado fixa-se em `STATUS = BLOCKED`.

---

### Transição: Human Gate 1 (Mandate & Scope Freeze)
* **Ato Soberano:** O operador humano examina o relatório do Bootstrap, avalia as lacunas apontadas, define formalmente a missão e autoriza os critérios de aceitação e limites de escopo.
* **Invariante:** É proibido avançar para a Fase 1 sem a emissão inequívoca da ordem de execução humana.

---

### Fase 1: Delivery (Prompt 1)
* **Objetivo:** Transformar a missão autorizada em uma entrega funcional verificável.
* **Princípio Operacional: Delivery First:** Foco na resolução funcional do problema e na passagem da suíte de testes. O executor não deve interromper o fluxo com micro-auditorias acadêmicas ou debates estilísticos desprovidos de base em cláusula pétrea.
* **Restrições Rígidas:**
  * O executor opera estritamente dentro da branch de trabalho e dos limites do escopo autorizado.
  * Proibição de expansão oportunista de escopo ("já que mexi aqui, refatorei outro módulo").
  * Execução da suíte de testes local e geração de logs comprobatórios.
* **Condição de Saída:** Código funcional entregue com suíte de testes passando. O executor submete a entrega para auditoria independente (`DELIVERY_CANDIDATE`).

---

### Fase 2: Independent Audit (Prompt 2)
* **Objetivo:** Avaliar a entrega sob postura formalmente cética, adversarial e desconectada do esforço de construção.
* **Princípio Operacional: Audit Second:** Congelamento do código para análise minuciosa de impacto, regressão, concorrência, bordas e conformidade constitucional.
* **Verificações Inegociáveis:**
  1. **Confronto com Normas:** O diff viola alguma cláusula pétrea do NBR?
  2. **Confinamento de Escopo:** Foram modificados apenas os arquivos autorizados?
  3. **Higiene do Worktree:** O trabalho poluiu o ambiente com arquivos não rastreados ou temporários?
  4. **Antitautologia de Testes:** Os testes adicionados realmente falhariam na ausência da correção implementada?
* **Tipos de Parecer Formal:**
  * **PASS:** Conformidade plena; nenhum impedimento técnico detectado.
  * **WARNING:** Apontamento técnico menor que não fere normas pétreas; submetido ao operador.
  * **FINDING:** Não-conformidade objetiva ou falha técnica; exige transição para a Fase 3.
  * **BLOCK:** Violação grave de segurança, quebra constitucional ou risco de integridade; paralisa a execução.

---

### Fase 3: Hardening / Resolution (Prompt 3)
* **Objetivo:** Solução pontual e cirúrgica dos apontamentos levantados na auditoria independente.
* **Restrições Rígidas:**
  * Escopo estritamente restrito à lista de `FINDINGS` emitida pelo auditor.
  * Vedada a introdução de novos recursos ou refatorações alheias aos achados.
* **Regra de Ouro da Re-auditoria:** Concluída a correção no Prompt 3, o agente retorna **compulsoriamente à Fase 2 (Auditoria)**. Não existe atalho direto de Hardening para Closure.

---

### Transição de Conclusão: Human Gate 2 (Closure)
* **Ato Soberano:** Ocorre exclusivamente após a emissão de parecer `PASS` pela auditoria independente e apresentação do diagnóstico de reconciliação de governança (`github-lifecycle.md`).
* **Operações do Portão:**
  * Revisão final do parecer de auditoria e do Recibo de Reconciliação do GitHub pelo operador humano.
  * Deliberação sobre eventuais desvios de governança identificados (*Governance Drift*).
  * Autorização formal para integração do código (merge em branch canônica, publicação, deploy) e eventuais mutações no GitHub (fechamento de issue, merge de PR, atualização de project).
  * Homologação institucional e arquivamento formal do ciclo.
* **Transição Final:** Missão atinge o estado terminal `CLOSED`.
