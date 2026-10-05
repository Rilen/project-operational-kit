# Agregação de Human Gates (Kit V2)

**Versão da Especificação:** 2.0.0
**Status:** Normativo — camada aditiva sobre `protocol/v1/`
**Documento Vinculado:** `risk-governance.md`, `delivery-window-envelope.md`, `authority-invariants-v2.md`

---

## 1. Princípio

`[REQUIREMENT]` A densidade de Human Gates é proporcional à classe de risco:

```text
FAST        : nenhum novo Human Gate por microincremento (dentro do envelope autorizado)
CONTROLLED  : autorização de window + closeout agregado
SOVEREIGN   : HG1 + HG2 completos (protocol/v1/lifecycle.md)
```

```text
AGGREGATED HUMAN GATE ≠ REMOVED HUMAN AUTHORITY
```

`[REQUIREMENT]` Uma window `CONTROLLED` exige normalmente **1 autorização humana inicial + 1 decisão humana final**.

---

## 2. Qualificação do Ciclo V1

`[REQUIREMENT]` Esta seção **qualifica** `protocol/v1/lifecycle.md` e `authority.md` §5: o ciclo de dois portões é o **baseline `SOVEREIGN`**. `FAST` e `CONTROLLED` seguem a agregação acima, **sem** que isso remova a autoridade humana final (closeout/publicação).

```text
PART I lifecycle = SOVEREIGN BASELINE
PART II aggregation QUALIFIES BY CLASS
```

---

## 3. Limites invioláveis

`[REQUIREMENT]` Independentemente da classe, permanecem obrigatórios:

```text
NO WRITE WITHOUT MANDATE/ENVELOPE
NO SELF-APPROVAL
SILENCE/TIMEOUT ≠ APPROVAL
CLOSURE REQUIRES HUMAN AUTHORITY
PUBLICATION REQUIRES APPLICABLE AUTHORIZATION
```

`[REQUIREMENT]` A agregação **não** autoriza auto-aprovação, **não** dispensa evidência e **não** reduz auditabilidade. Ela apenas **agrupa** atos de autoridade que, de outro modo, seriam meramente mecânicos.

```text
MECHANICAL INTERVENTION ≠ AUTHORITY ACT
```

---

## 4. Reconciliação: AGGREGATED GATES ≠ REMOVED AUTHORITY

`[REQUIREMENT]` Agregar gates é concentrar atos de autoridade em pontos significativos (concessão de envelope e closeout), **não** suprimi-los. A autoridade humana permanece integral e final em: envelope, exceção, publicação e closure.
