# Especificação da Máquina de Estados Normativa

**Versão da Especificação:** 1.0.0  
**Status:** Normativo (Especificação Conceitual / Não-Executável em Código)  
**Documento Vinculado:** `principles.md`, `lifecycle.md`

---

## 1. Visão Geral

Este documento formaliza os estados operacionais, eventos disparadores e invariantes de transição que governam o comportamento de qualquer agente ou operador no `project-operational-kit`.

Esta especificação é puramente normativa e documental, estabelecendo as condições lógicas que determinam se uma transição de estado é lícita ou se configura violação de processo.

---

## 2. Inventário Canônico dos Estados

| Estado | Definição Operacional | Natureza |
| :--- | :--- | :--- |
| `UNINITIALIZED` | Ponto zero anterior a qualquer inspeção ou carregamento de contexto. | Inicial |
| `NORMATIVE_LOADING` | Leitura, identificação e hashing do corpus normativo do projeto. | Transitório |
| `DISCOVERY_READY` | Diagnóstico de baseline concluído; aguardando apresentação formal. | Estável |
| `AWAITING_HUMAN_MANDATE` | Ponto de parada obrigatório (Human Gate 1). Aguarda definição de missão. | Bloqueante |
| `EXECUTING_DELIVERY` | Implementação do escopo autorizado com foco funcional e testes locais. | Transitório |
| `DELIVERY_CANDIDATE` | Entrega técnica concluída pelo executor; congelada para auditoria. | Estável |
| `AUDITING` | Avaliação adversarial, independente e confrontação contra normas. | Transitório |
| `AUDIT_PASSED` | Auditoria concluída com parecer formal `PASS` (zero findings impeditivos). | Estável |
| `HARDENING_REQUIRED` | Auditoria emitiu `FINDING` ou `BLOCK`; exige correção circunscrita. | Bloqueante |
| `AWAITING_HUMAN_CLOSURE` | Ponto de parada obrigatório (Human Gate 2). Aguarda deliberação de merge/aceite. | Bloqueante |
| `CLOSED` | Missão concluída formalmente com homologação humana e registro. | Terminal |
| `BLOCKED` | Parada mandatória por quebra de invariante, contradição normativa ou risco. | De Exceção |

---

## 3. Matriz Determinística de Transições

```
┌─────────────────────────┬───────────────────────────────┬─────────────────────────┐
│ Estado Origem           │ Evento / Condição             │ Estado Destino          │
├─────────────────────────┼───────────────────────────────┼─────────────────────────┤
│ UNINITIALIZED           │ Início do Bootstrap (Prompt 0)│ NORMATIVE_LOADING       │
├─────────────────────────┼───────────────────────────────┼─────────────────────────┤
│ NORMATIVE_LOADING       │ NBR estruturado e validado    │ DISCOVERY_READY         │
├─────────────────────────┼───────────────────────────────┼─────────────────────────┤
│ NORMATIVE_LOADING       │ Conflito normativo ou lacuna  │ BLOCKED                 │
├─────────────────────────┼───────────────────────────────┼─────────────────────────┤
│ DISCOVERY_READY         │ Relatório apresentado         │ AWAITING_HUMAN_MANDATE  │
├─────────────────────────┼───────────────────────────────┼─────────────────────────┤
│ AWAITING_HUMAN_MANDATE  │ Mandato humano emitido        │ EXECUTING_DELIVERY      │
├─────────────────────────┼───────────────────────────────┼─────────────────────────┤
│ AWAITING_HUMAN_MANDATE  │ Mandato recusado ou ambíguo   │ BLOCKED                 │
├─────────────────────────┼───────────────────────────────┼─────────────────────────┤
│ EXECUTING_DELIVERY      │ Testes locais verdes + diff ok│ DELIVERY_CANDIDATE      │
├─────────────────────────┼───────────────────────────────┼─────────────────────────┤
│ EXECUTING_DELIVERY      │ Violação de integridade       │ BLOCKED                 │
├─────────────────────────┼───────────────────────────────┼─────────────────────────┤
│ DELIVERY_CANDIDATE      │ Invocação do Auditor(Prompt 2)│ AUDITING                │
├─────────────────────────┼───────────────────────────────┼─────────────────────────┤
│ AUDITING                │ Parecer emitido: PASS         │ AUDIT_PASSED            │
├─────────────────────────┼───────────────────────────────┼─────────────────────────┤
│ AUDITING                │ Parecer emitido: FINDING      │ HARDENING_REQUIRED      │
├─────────────────────────┼───────────────────────────────┼─────────────────────────┤
│ AUDITING                │ Parecer emitido: BLOCK        │ BLOCKED                 │
├─────────────────────────┼───────────────────────────────┼─────────────────────────┤
│ HARDENING_REQUIRED      │ Início do Prompt 3 (Hardening)│ EXECUTING_DELIVERY      │
├─────────────────────────┼───────────────────────────────┼─────────────────────────┤
│ AUDIT_PASSED            │ Relatório final submetido     │ AWAITING_HUMAN_CLOSURE  │
├─────────────────────────┼───────────────────────────────┼─────────────────────────┤
│ AWAITING_HUMAN_CLOSURE  │ Autorização humana de merge   │ CLOSED                  │
├─────────────────────────┼───────────────────────────────┼─────────────────────────┤
│ AWAITING_HUMAN_CLOSURE  │ Mudanças solicitadas pelo hum.│ HARDENING_REQUIRED      │
├─────────────────────────┼───────────────────────────────┼─────────────────────────┤
│ BLOCKED                 │ Intervenção e decisão humana  │ AWAITING_HUMAN_MANDATE  │
└─────────────────────────┴───────────────────────────────┴─────────────────────────┘
```

---

## 4. Transições Estritamente Proibidas (Violações de Processo)

As seguintes transições configuram violações diretas dos princípios canônicos:

1. **Auto-Aprovação Direta:**  
   `EXECUTING_DELIVERY` ou `DELIVERY_CANDIDATE` ➔ `CLOSED`  
   *(Viola o Princípio 4 - Avaliação Independente e Princípio 2 - Autoridade).*
2. **Ignorar o Auditor:**  
   `HARDENING_REQUIRED` ➔ `AWAITING_HUMAN_CLOSURE` ou `CLOSED`  
   *(Viola a regra da Re-auditoria compulsória; após correção, é obrigatório reingressar em AUDITING).*
3. **Escrita sem Mandato:**  
   `DISCOVERY_READY` ➔ `EXECUTING_DELIVERY`  
   *(Viola o Princípio 3 - Conformidade de Ação e Princípio 2 - Human Gate).*
4. **Auto-Desbloqueio:**  
   `BLOCKED` ➔ qualquer estado ativo sem registro explícito de decisão humana.  
   *(Viola o Princípio 2 - Soberania da Autoridade).*
