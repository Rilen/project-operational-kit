# DELIVERY ENVELOPE — TEMPLATE

> Autorização humana delimitada (Kit V2, `protocol/v2/delivery-window-envelope.md`).
> `NO ENVELOPE → NO DELIVERY` · `ENVELOPE ≠ AUTHORITY` (o envelope é concedido pela autoridade; não a substitui).

## Identificação

- WINDOW_ID: `[FACT]`
- GOAL: `[REQUIREMENT]`
- TRACKING_UNIT: `[FACT]` (issue/PR/mission ref, or `NOT USED`)
- CREATED_FROM_BASELINE: `[FACT]` (commit SHA)

## Classificação

- RISK_CLASS: `[FACT]` (`FAST` | `CONTROLLED` | `SOVEREIGN`)
- RISK_CEILING: `[REQUIREMENT]`
- ESCALATION_TRIGGERS_OBSERVED: `[FACT]`

## Escopo

- ALLOWED_AREAS (in): `[REQUIREMENT]`
- PROHIBITED_AREAS (out): `[REQUIREMENT]`
- SCOPE_NOTES: `[REQUIREMENT]`

## Rito

- VALIDATION_DENSITY: `[REQUIREMENT]`
- HUMAN_GATE_MODEL: `[REQUIREMENT]` (aggregated | full)
- PUBLICATION_POLICY: `[REQUIREMENT]`
- STOP_CONDITIONS: `[REQUIREMENT]`
- EXIT_CRITERIA: `[REQUIREMENT]`
- TEST_BASELINE: `[EVIDENCE]`

## Autorização

- AUTHORIZED_BY: `[AUTHORIZATION]`
- AUTHORITY_ACT_DATE: `[FACT]`
- DEVIATIONS: `[FACT]`

`[REQUIREMENT]` Envelope sem `AUTHORIZED_BY` humano é nulo; nenhuma ação material pode ocorrer.
