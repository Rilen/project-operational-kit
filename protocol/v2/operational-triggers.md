# Gatilhos Operacionais Semânticos (Kit V2)

**Versão da Especificação:** 2.0.0
**Status:** Normativo — camada aditiva sobre `protocol/v1/`
**Documento Vinculado:** `risk-governance.md`, `continuous-loop.md`, `human-gate-aggregation.md`

---

## 1. Gatilhos Semânticos

`[REQUIREMENT]` A interface humana passa a admitir **gatilhos semânticos** genéricos. O agente interpreta a intenção e opera dentro do rito aplicável.

| Gatilho | Invoca | Regras inegociáveis |
| :--- | :--- | :--- |
| `Agente, iniciar sessão` | Bootstrap / Discovery (read-only) | `DISCOVERY_READY`; nunca inicia delivery |
| `Agente, continuar` | Continuous Engineering Loop dentro de envelope ativo | `NO ENVELOPE → NO LOOP`; para em exceção |
| `Agente, tratar issue #N` | Fluxo orientado por issue | exige autorização/mandato; não muta tracking sem autorização |
| `Agente, auditar` | Auditoria independente | `EXECUTOR ≠ AUDITOR` |
| `Agente, corrigir` | Hardening cirúrgico | só findings; `HARDENING ↛ CLOSURE` |
| `Agente, publicar` | Publicação | exige autorização humana aplicável |
| `Agente, status` | Diagnóstico read-only | não altera estado |
| `Agente, finalizar sessão` | Closeout / reconciliação | `FINALIZE ≠ STATE BYPASS`; respeita gates |

`[REQUIREMENT]` Um gatilho semântico **não é** autorização, não suspende pré-condições (PC-01..PC-10), não substitui baseline, mandato, envelope, evidência ou gate.

```text
TRIGGER ≠ AUTHORIZATION
HUMAN DEFINES INTENT + AUTHORITY
PROTOCOL DEFINES PROCEDURE
```

---

## 2. Prompt 0/1/2/3 como Contratos Internos Compatíveis

`[REQUIREMENT]` `OP-PROMPT-0..3` **não são removidos**. Permanecem como **contratos internos de fase**, `KEEP INTERNALLY` — opcionais como interface humana, preservados como definição de fase, entradas, limites e saídas.

`[REQUIREMENT]` Mapeamento gatilho → contrato interno:

```text
iniciar sessão   → OP-PROMPT-0 (Bootstrap)
continuar        → Continuous Loop (V2, dentro do envelope)
tratar issue #N  → Fluxo de issue (V2) + OP-PROMPT-1/2 conforme fase
auditar          → OP-PROMPT-2 (Audit)
corrigir         → OP-PROMPT-3 (Hardening)
publicar         → Publicação (autorização humana)
status           → Diagnóstico read-only
finalizar sessão → Closeout / reconciliação
```

`[REQUIREMENT]` Os contratos internos permanecem compatíveis e rastreáveis; a interface humana deixa de **precisar** invocá-los nominalmente.

---

## 3. Não Autoridade

`[REQUIREMENT]` Gatilhos e contratos não criam autoridade.

```text
TRIGGER ≠ AUTHORITY
SKILL ≠ AUTHORITY
PROMPT ≠ AUTHORITY
```
