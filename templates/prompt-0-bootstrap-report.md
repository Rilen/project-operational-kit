# [PROMPT-0] BOOTSTRAP REPORT: <PROJECT_OR_MISSION_NAME>

**Data / Timestamp:** <YYYY-MM-DDTHH:MM:SSZ>  
**Ambiente / Identificador:** <ID_DO_AMBIENTE_OU_WORKSPACE>  
**Baseline / Ponto de Partida:** <HASH_COMMIT_OU_ESTADO_INICIAL> `[FACT]`  
**Status Operacional:** `DISCOVERY_READY` | `BLOCKED`

---

## 1. Identidade e Contexto Operacional

* **Projeto / Subsistema:** <Nome do projeto ou subsistema observado> `[FACT]`
* **Repositório / Localização:** <Caminho ou URL do repositório/workspace> `[FACT]`
* **Estado Operacional Observado:** <Descrição sucinta do estado do workspace/árvore> `[FACT]`
* **Arquetipo Inicial Identificado:** <`greenfield` | `brownfield` | `legacy` | `docs-only` | `tooling` | `infrastructure`> `[HYPOTHESIS]`

---

## 2. Fontes Normativas e Mandatos Observados

| Fonte / Documento | Versão / Commit / Data | Cláusulas / Regras Relevantes | Status / Observação |
|---|---|---|---|
| `<ex: protocol/v1/principles.md>` | `<hash ou versão>` | `<ex: P1 a P6>` | `[FACT] Disponível para leitura` |
| `<ex: Mandato Humano / Issue>` | `<id ou link>` | `<ex: Escopo da missão inicial>` | `[EVIDENCE] Identificado` |

### Ambiguidades e Conflitos Identificados
* **Conflitos Normativos:** <Nenhum identificado | Descrição de conflito encontrado> `[FINDING]`
* **Lacunas de Mandato:** <Nenhum identificado | Requisitos ausentes> `[FINDING]`

---

## 3. Descoberta do Ambiente e Restrições Técnicas

* **Estrutura do Workspace:** <Resumo estrutural dos diretórios e arquivos observados> `[FACT]`
* **Toolchain / Dependências Identificadas:** <Ferramentas, gerenciadores de pacotes ou runtimes detectados> `[FACT]`
* **Restrições Operacionais Detectadas:** <ex: ausência de rede, ausência de testes automatizados, permissões restritas> `[FACT]`

---

## 4. Linha de Base Epistêmica e Evidências

* **Evidências Coletadas:** <Referências verificáveis: hashes, IDs de execução, URLs, logs ou observações diretas> `[EVIDENCE]`
* **Fatos Confirmados:** <Declarações verificadas sem margem a inferência subjetiva> `[FACT]`
* **Hipóteses Técnicas a Confirmar:** <Premissas que dependem de verificação futura> `[HYPOTHESIS]`

---

## 5. Proposta de Missão [quando aplicável]

> [!NOTE]
> Esta seção é estritamente uma proposta técnica e **NÃO** constitui autorização, mandato ou decisão.

* **Título da Proposta:** <Título da próxima missão sugerida> `[PROPOSAL]`
* **Escopo Sugerido:** <O que deve ser executado> `[PROPOSAL]`
* **Limites de Escopo (Não-fazer):** <O que não deve ser tocado> `[PROPOSAL]`
* **Pré-condições Sugeridas:** <O que precisa ser atendido antes> `[PROPOSAL]`

---

## 6. Advertência de Governança

> [!IMPORTANT]
> **O relatório de Bootstrap não autoriza trabalho, não cria mandato, não homologa entregas e não encerra missões.**
> O avanço para a execução depende de decisão e autorização humana (`[HUMAN DECISION]` / `[AUTHORIZATION]`).

---

## 7. Estado Final do Bootstrap

* **Resultado da Sondagem:** <`DISCOVERY_READY` | `BLOCKED`>
* **Justificativa / Motivo de Bloqueio [quando BLOCKED]:** <Razão do bloqueio, evidência correspondente e pré-condição faltante> `[BLOCK]`
