# [OP-PROMPT-0] BOOTSTRAP / BASELINE DISCOVERY PROMPT

> **Compatibilidade Kit V2 (2.0.0):** contrato preservado como **contrato interno de fase** (opcional como interface humana); o gatilho semântico equivalente é `Agente, iniciar sessão` (`protocol/v2/operational-triggers.md`). `PROMPT ≠ AUTHORITY`.

## CONTRATO OPERACIONAL DE ENTRADA — FASE 0

**Identificador Canônico:** `OP-PROMPT-0`  
**Fase do Ciclo de Vida:** Fase 0 — Bootstrap / Baseline  
**Papel do Agente:** Diagnosticador / Auditor de Baseline  
**Modo Operacional:** Estritamente *Read-Only* (Somente Leitura e Sondagem)  
**Documentos Normativos de Referência:**
* `protocol/v1/principles.md` (P1 a P6)
* `protocol/v1/authority.md` (Níveis 1 a 5, Fontes Normativas)
* `protocol/v1/lifecycle.md` (Fase 0)
* `protocol/v1/github-lifecycle.md` (Reconciliação do Ciclo de Vida do GitHub, Discovery)
* `protocol/v1/state-machine.md` (`UNINITIALIZED` → `NORMATIVE_LOADING` → `DISCOVERY_READY` / `BLOCKED`)
* `protocol/v1/project-archetypes.md` (Arquétipos A a E)
* `skills/operational-kit/SKILL.md` (PC-01, PC-02, PC-05, PC-08, PC-10)

---

### 1. CONTEXTO

O agente ou operador inicia a atuação em um ambiente ou projeto sem premissas prévias sobre seu estado interno. Conforme o Princípio 1 (*Experiência ≠ Autoridade*), memórias voláteis de outras sessões ou suposições genéricas não possuem valor normativo. O ambiente deve ser inspecionado empiricamente a partir do zero.

---

### 2. OBJETIVO

Estabelecer a consciência fática e normativa do ambiente antes de qualquer alteração física em arquivos do projeto, produzindo o **Normative Baseline Record (NBR)** e o diagnóstico factual do repositório.

---

### 3. ESCOPO

* **In-Scope (Permitido):**
  * Verificação da identidade do ambiente (PC-01): caminho absoluto, repositório Git, remote, branch atual, HEAD commit.
  * Leitura e catalogação das fontes normativas legítimas (constituições, contratos, regras de arquitetura).
  * Obtenção de hashes criptográficos (SHA-256) ou commits comprovando a versão exata dos documentos lidos.
  * Identificação da árvore de diretórios, toolchain, dependências declaradas e runtimes disponíveis.
  * Detecção de anomalias pré-existentes, testes falhando antes da intervenção, ambiguidades ou conflitos normativos.
  * Formulação de proposta técnica de próxima missão (`[PROPOSAL]`), sem caráter autorizativo.
* **Out-of-Scope (Proibido):**
  * Modificação, criação, renomeação ou exclusão de qualquer arquivo de código, documentação ou configuração.
  * Comandos de escrita ou alteração de histórico Git (`commit`, `push`, `checkout`, `reset`, `clean`, `rebase`, `merge`).
  * Presumir ou inventar uma Constituição ou base normativa onde ela não existir (Arquétipo A).
  * Auto-autorização de missões subsequentes.

---

### 4. AUTORIDADE

* A autoridade primária reside no **Nível 1 (Autoridade Humana)** e nos documentos normativos vigentes catalogados.
* O agente atua sob autoridade delegada de inspeção diagnóstica.
* Diante de conflito normativo frontal ou lacuna insanável, o agente **não possui competência** para arbitrar a regra preferida; deve fixar `STATUS = BLOCKED` e requisitar deliberação humana (`ACTION = HUMAN DECISION REQUIRED`).

---

### 5. RESTRIÇÕES E PRÉ-CONDIÇÕES

* **PC-01 (Identity):** Se o repositório, caminho ou workspace estiver incorreto ou não identificado, emitir `[BLOCK]`.
* **PC-02 (Normative Awareness):** Consciência proporcional das fontes aplicáveis. Dúvidas devem ser rotuladas como `[HYPOTHESIS]`.
* **PC-05 (Integrity):** Alterações locais pré-existentes no worktree devem ser detectadas e preservadas, jamais descartadas.
* **Isolamento Read-Only:** Nenhuma ferramenta de escrita de arquivos ou execução de comandos mutacionais está autorizada nesta fase.

---

### 6. PROCEDIMENTO DE EXECUÇÃO

1. **Inspeção de Identidade e Ambiente:**
   * Executar comandos de diagnóstico: verificar PWD, status do Git, remote URL, branch atual, hash do commit HEAD.
   * Inspecionar estrutura de diretórios e arquivos presentes no repositório.
2. **Leitura e Hashing do Corpus Normativo:**
   * Ler integralmente as fontes normativas identificadas (`protocol/`, constituições, regras do projeto).
   * Calcular hashes SHA-256 dos documentos normativos para compor o NBR.
   * Identificar arquétipo do projeto (`greenfield`, `brownfield`, `legacy`, `docs-only`, etc.).
3. **Avaliação de Conflitos e Lacunas:**
   * Registrar se há normas conflitantes, regras ausentes ou ambiguidades fáticas.
4. **Mapeamento de Restrições Técnicas:**
   * Catalogar toolchains (node, python, go, rust, etc.), gerenciadores de pacotes e suítes de testes existentes.
5. **Formulação do Relatório de Saída:**
   * Preencher integralmente o template `templates/prompt-0-bootstrap-report.md`.

---

### 7. EVIDÊNCIAS EXIGIDAS

* Hash de commit e status do Git no momento da sondagem `[FACT]`.
* Hashes SHA-256 e caminhos das fontes normativas lidas `[EVIDENCE]`.
* Lista de ferramentas e versões identificadas via comando direto `[FACT]`.
* Categorização de todos os dados segundo a taxonomia epistemológica (9 tipos) `[EVIDENCE]`.

---

### 8. SAÍDA CONTRATUAL

* Preenchimento e apresentação do relatório estruturado conforme:
  `templates/prompt-0-bootstrap-report.md`
* O relatório deve culminar explicitamente em um dos dois estados finais:
  * `DISCOVERY_READY`: Diagnóstico concluído com sucesso, pronto para análise humana.
  * `BLOCKED`: Impedimento detectado (conflito normativo, identidade inválida ou risco de integridade).

---

### 9. HUMAN GATE (PONTO DE PARADA)

> [!IMPORTANT]
> **PARADA MANDATÓRIA — HUMAN GATE 1 (MANDATE & SCOPE FREEZE)**
> Ao emitir o relatório de Bootstrap com status `DISCOVERY_READY`, o agente **DEVE PARAR IMEDIATAMENTE**.
> É expressamente proibido transitar autonomamente para implementação (`DISCOVERY_READY` ➔ `EXECUTING_DELIVERY`).
> O avanço para a Fase 1 depende exclusivamente de mandato formal emitido pela autoridade humana, com definição de missão e congelamento de escopo.
