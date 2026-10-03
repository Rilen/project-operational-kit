# Especificação de Reconciliação do Ciclo de Vida do GitHub

**Versão da Especificação:** 1.0.0  
**Status:** Normativo  
**Documento Vinculado:** `principles.md`, `authority.md`, `lifecycle.md`, `state-machine.md`, `evidence-taxonomy.md`

---

## 1. Visão Geral e Princípio Arquitetural

Esta norma estabelece o modelo canônico de **Reconciliação do Ciclo de Vida do GitHub** (*GitHub Lifecycle Reconciliation*) para o `project-operational-kit`.

### O Princípio Fundamental:
```text
"Git clean"  ≠  "Project governance reconciled"
```

O Master Kit reconhece que o **estado técnico** de um projeto (árvore Git limpa, código compilando, suíte de testes passando localmente, branch sincronizada) e o seu **estado gerencial** no GitHub (Issues, Pull Requests, Milestones, Projects, Releases, Labels) constituem **duas dimensões distintas e desacopladas de governança**.

Uma sessão de engenharia pode estar tecnicamente impecável e, simultaneamente, manter pendências gerenciais críticas no GitHub (ex.: issue ainda aberta sem evidências, milestone sem atualização, card em coluna defasada no Project, risco de contaminação de branch entre issues).

O protocolo proíbe expressamente afirmar encerramento total ou que "tudo está finalizado" com base exclusivamente na limpeza do Git ou aprovação de testes.

---

## 2. Regra Fundamental: Discovery Before Mutation

O Master Kit é portável e agnóstico: **não presume** que todo projeto adota todas as funcionalidades ou superfícies do GitHub.

### 2.1. Princípio Capability-Driven
Antes de qualquer diagnóstico de reconciliação, o agente deve executar **Discovery** para determinar quais superfícies estão efetivamente ativas no repositório.

Cada superfície do ecossistema GitHub deve ser classificada objetivamente em um dos seguintes estados de disponibilidade:

| Estado da Superfície | Definição Epistemológica |
| :--- | :--- |
| `PRESENT` | Superfície ativamente configurada, utilizada e observada no projeto com itens vinculados. |
| `ABSENT` | Superfície suportada pela plataforma, porém vazia ou sem instâncias para o contexto da missão. |
| `NOT USED` | Superfície explicitamente não adotada pelo projeto ou desabilitada em sua governança. |
| `UNKNOWN` | Superfície cujo status não pôde ser verificado devido a ausência de conectividade, credencial ou permissão. |
| `NOT APPLICABLE` | Superfície que não se aplica ao tipo de intervenção ou arquétipo de repositório. |

> [!NOTE]
> A ausência (`ABSENT` ou `NOT USED`) de uma superfície **NÃO constitui erro ou defeito**. O Master Kit opera com portabilidade plena seja em um repositório mínimo com apenas Git, seja em um repositório com governança completa de Issues, PRs, Milestones e Projects.

### 2.2. Superfícies de Governança Auditáveis
1. **Repository & Remotes:** Identidade canônica, remote upstream, default branch.
2. **Issues:** Rastreamento formal de demandas, bugs, requisitos e critérios de aceitação.
3. **Pull Requests (PR):** Propostas de integração física de código, base branch, head branch, status de CI.
4. **Milestones:** Agrupamentos lógicos de entregas com datas-alvo e agregação de issues.
5. **Projects (GitHub Projects v2 / Classic):** Quadros e visualizações kanban/tabela de acompanhamento de status gerencial.
6. **Labels:** Categorização taxonômica de tipo, prioridade, risco e governança.
7. **Releases & Tags:** Marcos de entrega empacotada ou distribuição em produção.

---

## 3. Separação Categórica entre Observação e Mutação (Human Gate)

A descoberta (*discovery*) e a análise de reconciliação são **estritamente somente-leitura (Read-Only)** por padrão.

### 3.1. Operações de Observação Permitidas (Autônomas):
* Consultar estado de issues, PRs, milestones e projects;
* Confrontar evidências técnicas locais (commits, diff, testes) com o estado gerencial remoto;
* Identificar divergências fáticas e classificar desvios (*governance drift*);
* Elaborar plano de reconciliação e sugerir ações de saneamento (`[PROPOSAL]`).

### 3.2. Proibição de Mutação Autônoma:
Sem autorização humana prévia, explícita e inequívoca (`[AUTHORIZATION]`), o agente **NÃO PODE**:
* Fechar ou reabrir Issues;
* Alterar Milestone de qualquer Issue;
* Mover itens ou alterar campos em GitHub Projects;
* Alterar, adicionar ou remover labels;
* Criar Pull Requests ou submeter commits para branches remotas;
* Realizar merge de Pull Requests;
* Publicar Releases ou criar Tags remotas.

> [!IMPORTANT]
> A conclusão de uma implementação técnica satisfazendo critérios de aceitação **NÃO autoriza automaticamente** o fechamento da Issue nem a movimentação do Project. A governança permanece subordinada à soberania do Human Gate.

---

## 4. O Modelo de Ciclo de Vida Reconciliado

O fluxo causal de engenharia governada articula a dimensão técnica e a dimensão gerencial:

```text
       Mandato Humano [Nível 1]
                 │
                 ▼
          GitHub Issue [se em uso]
                 │
                 ├─── Branch isolada
                 ├─── Commits atômicos
                 ├─── Testes / Evidências locais [Red → Green]
                 └─── Pull Request [se em uso]
                 │
                 ▼
    LIFECYCLE RECONCILIATION
                 │
                 ├─── Issue State & Acceptance Criteria
                 ├─── Milestone Progress Alignment
                 ├─── GitHub Project Status & Fields
                 ├─── PR Scope & Merge State
                 ├─── Cross-Issue Branch Contamination Check
                 └─── Documentation & Receipt Generation
                 │
                 ▼
          Governed Closeout
                 │
                 ▼
       HUMAN GATE 2 (Decisão Soberana de Merge & Homologação)
```

---

## 5. Dimensões de Reconciliação Específicas

### 5.1. Reconciliação de Issues
O agente deve verificar:
1. **Identidade:** A Issue existe no repositório remoto e corresponde à missão autorizada?
2. **Estado:** A Issue está `OPEN` ou `CLOSED`?
3. **Critérios de Aceitação:** Cada critério registrado na descrição possui evidência técnica correspondente?
4. **Distinção Crítica:**
   $$\text{IMPLEMENTATION COMPLETE} \quad \neq \quad \text{ISSUE GOVERNANCE COMPLETE}$$
   Uma implementação completa atesta conformidade do código; a governança da issue só se completa após auditoria aprovada e reconciliação documental autorizada.

### 5.2. Reconciliação de Milestones
1. **Derivação de Progresso:** O progresso do Milestone é decorrência agregada do estado de suas Issues componentes. É vedado tentar atribuir ou simular artificialmente percentuais de progresso descolados do estado real das issues.
2. **Coerência de Associação:** A issue em tratamento está vinculada ao milestone correto conforme o roadmap do projeto? Há issues concluídas que continuam retendo o milestone aberto?

### 5.3. Reconciliação de GitHub Projects
1. **Agnosticismo de Nomenclatura:** É vedado presumir nomes universais de status como "Todo", "In Progress" ou "Done". Os campos, opções e iterações devem ser inspecionados a partir do schema real do projeto.
2. **Divergência de Status:** Identificar e reportar quando o status no Project divergir da realidade do código (ex.: Código com testes aprovados, mas card ainda listado em coluna inicial de backlog).

### 5.4. Reconciliação de Pull Requests e Detecção de Contaminação
Quando PRs forem utilizados no fluxo:
1. **Base e Head:** O PR aponta para a base branch correta e provém da branch da issue?
2. **Vínculo Formal:** O PR referencia formalmente a Issue (ex.: `Fixes #NN`, `Closes #NN`)?
3. **CI / Checks:** Os checks automatizados remotos estão configurados e executando?
4. **Detecção de Contaminação Cruzada de Branches (*Cross-Issue Branch Contamination*):**
   * **Risco Grave:** Trabalho de uma Issue B executado na branch ativa de uma Issue A antes de seu merge ou isolamento.
   * **Regra de Ouro:** O agente deve inspecionar o histórico de commits da branch contra o histórico da default branch (`main`) e verificar se existem commits alheios à demanda atual.
   * **Ação Obrigatória:** Havendo contaminação, emitir alerta preventivo e suspender `commit/push/PR` até que a autoridade humana delibere sobre o isolamento do branch. Não executar rebase destrutivo sem autorização expressa.

---

## 6. GitHub Governance Drift

O conceito de **GitHub Governance Drift** ocorre sempre que a evidência técnica observável e a representação gerencial no GitHub divergirem.

### Taxonomia de Drift:
* **`DRIFT_ISSUE_UNRESOLVED`:** Implementação técnica concluída e testada, mas a Issue permanece sem evidências registradas ou sem parecer de fechamento.
* **`DRIFT_PREMATURE_CLOSURE`:** Issue fechada no GitHub sem que as evidências técnicas e critérios de aceitação tenham sido auditados ou comprovados.
* **`DRIFT_PROJECT_STATUS_MISMATCH`:** O card no GitHub Projects reflete um estágio desatualizado em relação à entrega técnica real.
* **`DRIFT_MILESTONE_MISALIGNMENT`:** Demanda implementada sem vínculo com o Milestone cabível, ou Milestone desatualizado em relação ao ciclo.
* **`DRIFT_CROSS_ISSUE_CONTAMINATION`:** A branch de trabalho contém commits de múltiplas issues concorrentes misturando escopos.
* **`DRIFT_PR_ORPHANED`:** PR aberto sem vínculo com Issue ou associado a branch com escopo divergente.

> [!NOTE]
> O agente não assume que o GitHub está "certo" ou que o código local está "certo". A reconciliação confronta fatos e evidências e submete o diagnóstico ao Human Gate.

---

## 7. Semântica de Fechamento de Sessão (*Closeout Semantics*)

Para impedir declarações prematuras de encerramento, o Master Kit adota vocabulário expressivo que combina a dimensão técnica e a dimensão de governança gerencial:

| Estado de Fechamento (*Closeout State*) | Significado Operacional |
| :--- | :--- |
| `TECHNICALLY_CLEAN_GOVERNANCE_RECONCILED` | Código implementado, testes verdes, worktree limpo e estado do GitHub perfeitamente alinhado com a realidade técnica. |
| `TECHNICALLY_CLEAN_GOVERNANCE_PENDING` | Código implementado, testes verdes e worktree limpo, mas existem ações de governança pendentes no GitHub (issues a comentar/fechar, cards a mover, etc.). |
| `TECHNICALLY_DIRTY_GOVERNANCE_PENDING` | Código em desenvolvimento ou testes pendentes, e pendências gerenciais em aberto no GitHub. |
| `BLOCKED_GOVERNANCE_CONTAMINATION` | Intervenção paralisada por risco de contaminação cruzada de branch ou conflito normativo no GitHub. |

---

## 8. Ferramental e Agnosticismo de Integração

O Master Kit separa o **conceito/capacidade** do **adaptador técnico de execução**:
* **Capacidade:** Descobrir issue vinculada, verificar status de milestone, auditar branches de PR.
* **Adaptadores Suportados:**
  * GitHub CLI (`gh` autenticado);
  * GitHub REST/GraphQL API via token (`GITHUB_TOKEN` / `GH_TOKEN`);
  * Conectores MCP (Model Context Protocol) de GitHub, quando disponíveis;
  * Inspeção direta via Git (`git remote`, `git log`, `git branch -r`).
* **Resiliência:** Se nenhuma ferramenta de API do GitHub estiver acessível no ambiente, o agente classifica a capacidade como `UNKNOWN`, reporta a limitação como fato no recibo e prossegue com as verificações técnicas que independem de rede.
