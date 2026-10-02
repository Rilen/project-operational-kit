# Taxonomia Epistemológica e Regime de Evidências

**Versão da Especificação:** 1.0.0  
**Status:** Normativo  
**Documento Vinculado:** `principles.md`

---

## 1. Visão Geral

Este documento estabelece o vocabulário epistemológico controlado e os padrões de prova empírica do `project-operational-kit`.

Para evitar alucinações, confusão entre opiniões e fatos e a aceitação de falsas conformidades, qualquer dado manipulado por agentes ou operadores deve ser categorizado com rigor ontológico estrito.

---

## 2. Taxonomia Epistemológica de Dados

Toda informação técnica dentro do ciclo de vida deve ser classificada em uma das seguintes categorias formais:

| Categoria | Definição Epistemológica | Critério de Aceite / Prova |
| :--- | :--- | :--- |
| **FACT (Fato)** | Estado objetivo, verificável e comprovado no ambiente real. | Exit code de execução, commit SHA no repositório, saída do ambiente. |
| **EVIDENCE (Evidência)** | Registro durável, imutável e reproduzível que sustenta um fato. | Log completo de teste com timestamp, diff Git, URL de PR, log de CI. |
| **HYPOTHESIS (Hipótese)** | Conjectura explicativa ou preditiva que carece de verificação empírica. | Suposição de causa-raiz, inferência sobre intenção de código não documentado. |
| **REQUIREMENT (Requisito)** | Declaração prescritiva formalmente adotada no escopo da missão. | Critério de aceitação constante no mandato emitido no Human Gate 1. |
| **HUMAN DECISION (Decisão)** | Determinação inequívoca e soberana manifestada pela autoridade humana. | Ordem de missão registrada, resolução de conflito normativo, homologação. |
| **PROPOSAL (Proposta)** | Solução técnica ou arquitetural sugerida pelo agente, pendente de chancela. | Plano de implementação apresentado no Bootstrap ou em relatório de auditoria. |
| **FINDING (Achado)** | Não-conformidade, regressão ou defeito técnico identificado pela auditoria. | Apontamento objetivo no relatório da Fase 2 vinculado a uma violação normativa. |
| **BLOCK (Bloqueio)** | Condição fática ou jurídica que impede a transição lícita de estado. | Quebra de invariante, contradição normativa, risco de perda de dados. |
| **AUTHORIZATION (Autorização)** | Licença expressa dada pelo operador humano para transição ou alteração. | Assinatura formal de Human Gate ou aprovação de desvio local. |

---

## 3. Desacoplamento entre Estados Operacionais e de Qualidade

É terminantemente proibido inferir um estado de qualidade a partir de um estado operacional de automação:

```
┌───────────┐      ┌──────────┐      ┌────────────┐      ┌─────────────────────────┐      ┌─────────────┐
│  TESTED   │  ≠   │  MERGED  │  ≠   │  DEPLOYED  │  ≠   │ VALIDATED IN PRODUCTION │  ≠   │ HOMOLOGATED │
└───────────┘      └──────────┘      └────────────┘      └─────────────────────────┘      └─────────────┘
```

### Proibições Categóricas de Inferência:
1. **Falácia do Commit:** `Commit realizado ≠ Missão concluída`. Um commit registra apenas uma alteração de arquivo; não prova que o requisito foi satisfeito.
2. **Falácia do CI:** `CI verde ≠ Requisito funcional comprovado`. Um pipeline verde comprova apenas ausência de falha sintática ou passagem de testes configurados; não valida adequação negocial.
3. **Falácia do PR:** `PR aberto ≠ PR aprovado`. A existência de uma proposta de integração não confere autorização para fechamento.
4. **Falácia do Deploy:** `Deploy realizado ≠ Homologação`. Disponibilização em ambiente não substitui o aceite formal da Autoridade Humana.

---

## 4. Cadeia Canônica de Rastreabilidade

Todo artefato persistido no repositório deve pertencer à cadeia causal da intervenção:

```
MISSION (Mandato Humano)
   │
   ▼
DELIVERY (Implementação Funcional)
   │
   ▼
AUDIT (Verificação Independente)
   │
   ▼
FINDING (Identificação de Não-Conformidade)
   │
   ▼
CORRECTION (Hardening Cirúrgico)
   │
   ▼
VALIDATION (Re-auditoria Compulsória)
   │
   ▼
CLOSURE (Homologação Final)
```

* Todo commit de entrega deve responder a um critério de aceitação autorizado.
* Todo commit de hardening deve responder estritamente a um finding registrado.

---

## 5. Regra da Antitautologia de Testes

Para afastar a patologia dos falsos positivos (testes que passam antes e depois da correção sem exercer o comportamento novo):
* O teste adicionado para validar uma correção ou novo comportamento deve demonstrar **capacidade de falha prévia** na ausência da modificação correspondente.
* Testes que aprovam cegamente o código antes da correção são desqualificados pelo auditor como evidência idônea.

---

## 6. Verificabilidade Distribuída (Continuidade Inter-Máquinas)

Para viabilizar que diferentes computadores ou instâncias de agentes operem sem perda de continuidade:
1. Nenhum estado decisório crítico pode residir exclusivamente na memória volátil de um terminal ou em anotações locais não persistidas.
2. Qualquer agente que assumir a governança do projeto em outro nó deve ser capaz de reconstruir o estado operacional a partir exclusivamente das evidências compartilhadas e registradas no repositório.
