# ENGINEERING EXCEPTION RECORD — TEMPLATE

> Registro estruturado de exceção que interrompe o Continuous Engineering Loop (Kit V2, `protocol/v2/continuous-loop.md`).
> `EXCEPTION DETECTION ≠ EXCEPTION RESOLUTION` · `NOTIFICATION ≠ APPROVAL`

## Identificação

- EXCEPTION_CLASS: `[FACT]` (`EX_AUTHORITY` | `EX_SCOPE` | `EX_RISK` | `EX_REVERSIBILITY` | `EX_NORMATIVE` | `EX_PUBLICATION` | `EX_CLOSURE` | `EX_SECURITY` | `EX_AMBIGUITY` | `EX_ENVIRONMENT`)
- WINDOW_ID / TRACKING_UNIT: `[FACT]`
- RISK_CLASS / RISK_CEILING: `[FACT]`

## Causa e Impacto

- CAUSE: `[FACT]`
- AFFECTED_SCOPE: `[FACT]`
- ACTION_BLOCKED: `[FACT]`
- EVIDENCE: `[EVIDENCE]`

## Parada do Loop

- LOOP_CLASSIFICATION: `[FACT]` (`LOOP_AWAITING_HUMAN` | `LOOP_HALTED`)
- EXCEPTION_ACTION: `[REQUIREMENT]` (`HALT` | `BLOCK`)

## Resolução

- RESOLUTION_CONDITION: `[REQUIREMENT]`
- AUTHORITY_REQUIRED: `[AUTHORIZATION]`
- HUMAN_DECISION: `[HUMAN DECISION]`

`[REQUIREMENT]` O agente detecta e escala; a resolução pertence à autoridade humana.
`[REQUIREMENT]` Resolvida a exceção, o loop só retoma dentro de envelope ativo e abaixo do risk ceiling.
`[REQUIREMENT]` Registro preenchido é evidência; NÃO é homologação.
