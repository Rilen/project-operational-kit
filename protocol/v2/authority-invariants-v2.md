# Invariantes de Autoridade V2 & Reconciliações (Kit V2)

**Versão da Especificação:** 2.0.0
**Status:** Normativo — camada aditiva sobre `protocol/v1/`
**Documento Vinculado:** `principles.md`, `authority.md`, `risk-governance.md`, `continuous-loop.md`

---

## 1. Invariantes (imutáveis sob V2)

`[REQUIREMENT]`

```text
HUMAN AUTHORITY IS FINAL (ENVELOPE · EXCEPTION · PUBLICATION · CLOSURE)
AGENT ≠ AUTHORITY
CONTINUOUS LOOP ≠ CONTINUOUS AUTHORITY
PROPORTIONAL GOVERNANCE ≠ FAST TRACK
AGGREGATED GATES ≠ REMOVED AUTHORITY
MECHANICAL INTERVENTION ≠ AUTHORITY ACT
NO WRITE WITHOUT MANDATE/ENVELOPE
NO SELF-APPROVAL
SILENCE/TIMEOUT ≠ APPROVAL
NOTIFICATION ≠ APPROVAL
AUDIT_PASSED ≠ HOMOLOGATED
EXCEPTION DETECTION ≠ EXCEPTION RESOLUTION
LOOP_CLOSED ≠ CLOSED
```

`[REQUIREMENT]` Os **seis princípios canônicos** de `principles.md` permanecem **inalterados**. A Constituição/base normativa do projeto consumidor não é tocada por esta camada.

---

## 2. Reconciliação do Auditor

O texto de `principles.md` (Princípio 4 — Avaliação Independente) menciona, para o auditor, "poder de veto vinculante"; a `SKILL.md` afirma `AUDITOR ≠ VETO SOBERANO`. `[REQUIREMENT]` Resolve-se assim:

```text
AUDITOR TECHNICAL VETO IS BINDING ON TECHNICAL TRANSITION (FINDING → HARDENING_REQUIRED),
NOT ON HUMAN AUTHORITY.
AUDITOR ≠ VETO SOBERANO
AUDITOR CANNOT GRANT, DENY OR SUBSTITUTE HUMAN AUTHORITY
AUDITOR CANNOT OVERRIDE NÍVEL 1/2
```

`[REQUIREMENT]` O achado do auditor **suspende a transição técnica** enquanto aberto e relevante; a decisão final sobre aceite, exceção, merge ou encerramento pertence à autoridade humana. A autoridade humana **pode** deliberar em sentido diverso, de forma explícita e registrada (`[HUMAN DECISION]`), **sem** transformar o auditor em soberano.

---

## 3. Reconciliação: PROPORTIONAL GOVERNANCE ≠ FAST TRACK

`[REQUIREMENT]` "Fast Track" (proibido) é qualquer rito que **remova, simule ou dispense** autoridade, evidência, fail-closed ou auditoria exigível. A parametrização por classe **preserva todos** os invariantes e apenas **agrega** gates e **modula** densidade probatória (Princípio 6).

```text
PROPORTIONAL GOVERNANCE ≠ FAST TRACK
AGGREGATED GATES ≠ REMOVED AUTHORITY
CONTINUOUS LOOP ≠ CONTINUOUS AUTHORITY
```

---

## 4. Precedência e não-revogação

`[REQUIREMENT]`

```text
PART I (protocol/v1) = BASELINE SOVEREIGN (preserved)
PART II (protocol/v2) QUALIFIES PART I BY RISK CLASS (additive)
CONFLICT ON SAME CLASS → MORE RESTRICTIVE WINS
CONFLICT ON INVARIANTS → INVARIANT WINS
```

`[REQUIREMENT]` Esta camada não cria autoridade, não altera os 12 estados canônicos e não modifica os seis princípios.
