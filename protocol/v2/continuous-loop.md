# Continuous Engineering Loop & Exceções (Kit V2)

**Versão da Especificação:** 2.0.0
**Status:** Normativo — camada aditiva sobre `protocol/v1/`
**Documento Vinculado:** `risk-governance.md`, `delivery-window-envelope.md`, `human-gate-aggregation.md`, `authority-invariants-v2.md`

---

## 1. Continuous Engineering Loop

`[REQUIREMENT]` Dentro de um envelope ativo, a execução segue um **loop contínuo e determinístico**:

```text
OBSERVE → CLASSIFY → SELECT → DELIVER → VALIDATE → AUDIT (proporcional)
        → RECORD EVIDENCE → EXCEPTION?
              ├── NÃO → CONTINUE (loop)
              └── SIM → ESCALATE / HALT (Human Attention)
```

`[REQUIREMENT]` **Condições de continuidade (todas necessárias):** envelope ativo; ação dentro do escopo autorizado; `RISK_CLASS ≤ RISK_CEILING`; nenhuma `STOP_CONDITION`; nenhuma exceção aberta.

`[REQUIREMENT]` **Condições de parada (qualquer uma):** exceção detectada; envelope exausto; `STOP_CONDITION`; `EXIT_CRITERIA` satisfeito; closure.

```text
NO ENVELOPE → NO LOOP
CONTINUOUS LOOP ≠ CONTINUOUS AUTHORITY
```

---

## 2. Loop Control Classifications

`[REQUIREMENT]` Classificações internas do loop (não são estados da máquina de 12):

```text
LOOP_READY
LOOP_RUNNING
LOOP_AWAITING_HUMAN   (exceção aberta ou ato de autoridade pendente)
LOOP_HALTED           (sem envelope, stop condition ou envelope exausto)
LOOP_CLOSED           (exit criteria satisfeito; aguarda homologação humana)
```

```text
LOOP CLASSIFICATION ≠ STATE OF THE 12-STATE MACHINE
LOOP_CLOSED ≠ CLOSED
LOOP EXIT ≠ HUMAN CLOSURE
```

`[REQUIREMENT]` Da mesma forma que as Window Classifications, as Loop Classifications **não** pertencem à matriz de transições de `state-machine.md`.

---

## 3. Human Attention = Exception-Driven (not Phase-Driven)

`[REQUIREMENT]` A atenção humana é alocada por **exceção**, não por fase:

```text
HUMAN ATTENTION ∝ EXCEPTION SEVERITY
HUMAN ATTENTION ≠ f(NUMBER OF INCREMENTS)
NOTIFICATION ≠ APPROVAL
```

`[REQUIREMENT]` Atenção humana é requerida exatamente em:

1. concessão/renovação do envelope (`AUTHORITY ACT`);
2. resolução de exceção aberta;
3. publicação que exija autorização (HG2/política aplicável);
4. closure/homologação.

`[REQUIREMENT]` Nos ritos `SOVEREIGN`, o fluxo de fases de `protocol/v1/lifecycle.md` prevalece integralmente (HG1 + HG2). A política por exceção **não** reduz o rito soberano.

---

## 4. Taxonomia de Exceções

`[REQUIREMENT]` Somente exceções autênticas interrompem o loop.

| Exceção | Gatilho | Ação |
| :--- | :--- | :--- |
| `EX_AUTHORITY` | Necessidade de nova/expandida autorização ou envelope | `HALT` → ato de autoridade |
| `EX_SCOPE` | Ação fora do envelope, scope drift ou window budget exausto | `HALT`/`WINDOW SPLIT` |
| `EX_RISK` | Elevação para `SOVEREIGN` ou acima do `RISK_CEILING` | `HALT` → reclassificação |
| `EX_REVERSIBILITY` | Decisão irreversível / alto blast radius | `HALT` → decisão humana consciente |
| `EX_NORMATIVE` | Conflito normativo ou lacuna insanável | `BLOCK` → `HUMAN DECISION REQUIRED` |
| `EX_PUBLICATION` | Publicação que exija autorização | `HALT` → autorização humana |
| `EX_CLOSURE` | Encerramento/homologação | `HALT` → Human Gate 2 |
| `EX_SECURITY` | Risco material de segurança, corrupção de dados, violação de autoridade ou defeito irreversível conhecido | `BLOCK` → tratamento imediato |
| `EX_AMBIGUITY` | Ambiguidade irresolúvel no envelope | `BLOCK` → arbitragem humana |
| `EX_ENVIRONMENT` | Falha de pré-condição (PC-01..PC-10) que exija decisão | `BLOCK` → decisão humana |

`[REQUIREMENT]` Cada exceção produz um **Exception Record** (`templates/exception-record.md`): causa, escopo afetado, ação impedida, evidência observável, condição de resolução, autoridade necessária.

`[REQUIREMENT]` **Não-exceções** (não interrompem): incremento rotineiro dentro do envelope, teste/validação local, refino de UI/copy/doc, correção reversível de baixo risco, checkpoint e micro-evidência.

```text
EXCEPTION DETECTION ≠ EXCEPTION RESOLUTION
```

`[REQUIREMENT]` O agente **detecta e escala**; **nunca** resolve a exceção por si. A resolução é ato humano.

`[REQUIREMENT]` A transição para estado de parada obedece à matriz de `state-machine.md`. O alvo fail-closed é `BLOCKED`; `EX_CLOSURE`/`EX_PUBLICATION`, e somente a partir de `AUDIT_PASSED`, alcançam `AWAITING_HUMAN_CLOSURE`. Nunca há transição direta para `CLOSED`.

---

## 5. Não Autoridade

`[REQUIREMENT]` O loop é um modo de execução, não uma concessão de poder.

```text
LOOP HALTS ON AUTHORITY BOUNDARY
AGENT DETECTS, NEVER SELF-AUTHORIZES
```
