# Validação e Auditoria Proporcionais (Kit V2)

**Versão da Especificação:** 2.0.0
**Status:** Normativo — camada aditiva sobre `protocol/v1/`
**Documento Vinculado:** `risk-governance.md`, `continuous-loop.md`, `authority-invariants-v2.md`, `evidence-taxonomy.md`

---

## 1. Densidade probatória por classe

`[REQUIREMENT]`

```text
FAST        : AUTOMATED AUDIT            (testes/lint automatizados dentro do envelope)
CONTROLLED  : INTEGRATED INDEPENDENT AUDIT (no fechamento da window)
SOVEREIGN   : SOVEREIGN INDEPENDENT AUDIT  (ciclo completo de protocol/v1)
```

`[REQUIREMENT]` A densidade da auditoria é proporcional ao risco; a **exigência de evidência** nunca é dispensada.

```text
PROPORTIONAL VALIDATION ≠ NO VALIDATION
VALIDATION DENSITY ≠ AUTHORITY
```

---

## 2. Independência

`[REQUIREMENT]` Quando a classe exigir independência, aplica-se a separação de funções do Princípio 4:

```text
EXECUTOR ≠ AUDITOR (WHEN INDEPENDENCE REQUIRED)
```

`[REQUIREMENT]` `FAST` admite auditoria automatizada dentro do envelope; `CONTROLLED` admite auditoria independente **integrada** ao fechamento; `SOVEREIGN` exige o rito integral.

---

## 3. Fronteiras que nunca relaxam

`[REQUIREMENT]` A parametrização por classe **não** pode ser usada como desculpa para reduzir rigor nas fronteiras de governança:

```text
NO HUMAN AUTHORITY TRANSFER TO AGENT
NO CLOSURE WITHOUT HUMAN AUTHORITY
NO RELEASE WITHOUT HUMAN AUTHORITY
NO AUDITABILITY REDUCTION
NO TRUST-BOUNDARY WEAKENING
NO SENSITIVE-DATA EXPOSURE
```

`[REQUIREMENT]` Fechamento e/ou publicação **sempre** executam a linha de base de atualização de evidência (`TESTED ≠ HOMOLOGATED`; `REPORT ≠ HOMOLOGATION`).

---

## 4. Não Autoridade

`[REQUIREMENT]` Auditoria proporcional é verificação, não autorização.

```text
AUDIT_PASSED ≠ HOMOLOGATED
VALIDATION RESULT ≠ AUTHORIZATION
```
