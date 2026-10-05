# Delivery Window & Delivery Envelope (Kit V2)

**Versão da Especificação:** 2.0.0
**Status:** Normativo — camada aditiva sobre `protocol/v1/`
**Documento Vinculado:** `risk-governance.md`, `continuous-loop.md`, `human-gate-aggregation.md`

---

## 1. Delivery Window

`[REQUIREMENT]` Uma **Delivery Window** é um conjunto limitado de incrementos correlatos a uma capacidade, aprovado por autoridade humana. Campos mínimos:

```text
WINDOW_ID
GOAL
SCOPE
RISK_CLASS
RISK_CEILING
TEST_BASELINE
TRACKING_UNIT
ALLOWED_AREAS
PROHIBITED_AREAS
PUBLICATION_POLICY
STOP_CONDITIONS
EXIT_CRITERIA
```

`[REQUIREMENT]` Uma window pode conter múltiplos incrementos, testes, correções ordinárias e pequenos passos **sem Human Gate individual**, desde que permaneça dentro do envelope (Seção 2) e abaixo do `RISK_CEILING`.

---

## 2. Delivery Envelope

`[REQUIREMENT]` O **Delivery Envelope** é a **autorização humana delimitada** (goal, scope, risk ceiling, áreas permitidas/proibidas, publication policy, stop conditions).

```text
INSIDE AUTHORIZED ENVELOPE  → OPERATIONAL AUTONOMY
OUTSIDE AUTHORIZED ENVELOPE → STOP / ESCALATE
NO ENVELOPE                 → NO DELIVERY
```

`[REQUIREMENT]` O agente **nunca cria a própria autorização**. O envelope é um `AUTHORITY ACT` humano (`[AUTHORIZATION]`).

---

## 3. Window Classifications ≠ Estados

`[REQUIREMENT]` `FAST`/`CONTROLLED` usam **Window Classifications**. Os 12 estados canônicos de `state-machine.md` permanecem **fechados e inalterados**.

```text
WINDOW_PLANNED
WINDOW_CLASSIFIED
WINDOW_AUTHORIZED
WINDOW_IN_DELIVERY
WINDOW_VALIDATING
WINDOW_AUDITING
WINDOW_AWAITING_HUMAN_CLOSEOUT
WINDOW_CLOSED
```

`[REQUIREMENT]` Nenhuma Window Classification coincide com um estado canônico (prefixo `WINDOW_` garante a separação categórica).

```text
WINDOW CLASSIFICATION ≠ STATE OF THE 12-STATE MACHINE
```

`[REQUIREMENT]` Nenhuma Window Classification é origem ou destino válido da matriz de transições de `state-machine.md`.

---

## 4. Window Budget e Split

`[REQUIREMENT]` Para impedir window infinita, considerar: scope drift, breadth de capability/issue, breadth arquitetural, `RISK_CEILING` e fronteiras de sessão. Budget excedido ⇒ `WINDOW SPLIT` ou `RISK RECLASSIFICATION`. **Não** usar apenas LOC.

`[REQUIREMENT]` O split/reclassificação exige atenção humana quando alterar escopo, classe ou ceiling.

---

## 5. Autonomia e Limites

`[REQUIREMENT]` Dentro do envelope, o agente opera com **autonomia operacional determinística** conforme a classe (`continuous-loop.md`). Fora do envelope, ou na ausência de envelope, a ação é proibida: `STOP → ESCALATE`.

```text
DETERMINISTIC CONTINUATION INSIDE AUTHORIZED BOUNDARIES
NO ENVELOPE → NO LOOP
```
