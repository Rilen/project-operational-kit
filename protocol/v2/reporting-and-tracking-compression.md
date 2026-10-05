# Reporting & Tracking Compression (Kit V2)

**Versão da Especificação:** 2.0.0
**Status:** Normativo — camada aditiva sobre `protocol/v1/`
**Documento Vinculado:** `risk-governance.md`, `continuous-loop.md`, `proportional-validation-audit.md`

---

## 1. Compressão de Tracking

`[REQUIREMENT]` O tracking deve refletir capacidade e decisão, não cada micro-alteração:

```text
PRODUCT CAPABILITY        → ISSUE
SMALL AUTHORIZED STEP     → CHECKPOINT / MICRO EVIDENCE (not a new gate)
MATERIAL FINDING          → ISSUE WHEN ACTIONABLE
CONTROLLED DEBT           → ISSUE WHEN INDEPENDENTLY ACTIONABLE
```

`[REQUIREMENT]` Evitar: uma issue por micro-alteração; um PR por micro-alteração; um gate por micro-passo; expansão de status por artefato. `TRACKING ≠ AUTHORITY`.

---

## 2. Micro Evidence

`[REQUIREMENT]` Cada incremento do loop registra **Micro Evidence** suficiente e durável (`templates/micro-evidence-record.md`): incremento, arquivos, comando/evidência, resultado, contrato preservado, status.

`[REQUIREMENT]` Micro Evidence é evidência, não homologação.

```text
MICRO EVIDENCE ≠ HOMOLOGATION
```

---

## 3. Reporting por Classe

`[REQUIREMENT]`

```text
FAST        → MICRO EVIDENCE RECORD
CONTROLLED  → WINDOW DELIVERY REPORT + INTEGRATED AUDIT REPORT + AGGREGATED CLOSEOUT
SOVEREIGN   → templates completos de protocol/v1 (Prompt 0..3)
```

`[REQUIREMENT]` Nenhum artefato normativo é removido por conveniência; a compressão reduz **frequência de artefatos mecânicos**, não **exigência de prova**.

---

## 4. Reconciliação

`[REQUIREMENT]` A compressão de tracking **não** contradiz `protocol/v1/github-lifecycle.md`: reconciliação de governança continua obrigatória no closeout; apenas deixa de exigir mutação por passo.

```text
TRACKING COMPRESSION ≠ GOVERNANCE REMOVAL
```
