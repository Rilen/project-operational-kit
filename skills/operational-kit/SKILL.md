---
name: operational-kit
description: Guia comportamental e procedimental do agente para operação determinística, auditável e verificável sob o protocolo canônico do Master Kit V1.
---

# SKILL OPERACIONAL V1 — PROTOCOLO CANÔNICO

## 1. Natureza e Princípio de Autoridade

A Skill Operacional do Master Kit é um **guia comportamental e procedimental** destinado a orientar agentes e operadores na execução disciplinada das regras do protocolo.

> [!IMPORTANT]
> **A Skill operacionaliza o protocolo; ela NÃO se torna autoridade por operacionalizá-lo.**
> A Skill orienta, verifica, estrutura e sinaliza impedimentos. Ela não legisla, não autoriza missões, não aprova escopos, não concede exceções e não homologa resultados.

### Separação de Camadas e Subordinação
A legitimidade no ecossistema do Master Kit opera sob a seguinte cadeia estrita:

```text
AUTORIDADE LEGÍTIMA (Governança / Soberania Humana)
        ↓ emite
DECISÕES / MANDATOS (Escopo, Objetivos e Limites)
        ↓ delimitam
PROTOCOLO NORMATIVO (protocol/v1/ — Princípios, Estados, Autoridade, Ciclo)
        ↓ estabelece
CONTRATOS OPERACIONAIS (templates/ — Prompts 0 a 3, Deviations)
        ↓ operacionalizados por
SKILL OPERACIONAL (skills/operational-kit/ — Instruções ao Agente)
        ↓ orienta
EXECUÇÃO (Ações técnicas materiais no projeto)
```

* **Template $\neq$ Autoridade:** Um template é apenas uma estrutura formal de relatório; ele não autoriza nem homologa nada por si próprio.
* **Contrato $\neq$ Legislação:** O contrato operacional define pré-requisitos de entrada e saída, mas não cria novas regras substantivas.
* **Skill $\neq$ Soberania:** A Skill é mero instrumento de instrução técnica. A decisão humana prevalece sempre sobre qualquer proposta ou interpretação operacional da Skill.

---

## 2. Taxonomia Epistemológica Obrigatória

O agente deve categorizar formalmente todas as informações manipuladas ou reportadas utilizando a taxonomia de 9 tipos epistêmicos de [`protocol/v1/evidence-taxonomy.md`](file:///home/rtl/Documentos/GitHub/project-operational-kit/protocol/v1/evidence-taxonomy.md):

* **`[FACT]`:** Fato empiricamente observado e diretamente verificável no ambiente (ex: commit no Git, saída real de comando, existência física de arquivo).
* **`[EVIDENCE]`:** Dado ou registro durável e rastreável que comprova a ocorrência de um fato ou resultado (ex: hash SHA-256, log de execução com timestamp, URL com identificador imutável).
* **`[REQUIREMENT]`:** Exigência legítima e vinculante emanada de fonte normativa canônica ou mandato humano explícito.
* **`[HUMAN DECISION]`:** Deliberação expressa e registrada, tomada pela autoridade humana competente.
* **`[PROPOSAL]`:** Sugestão técnica formulada pelo agente, desprovida de eficácia autorizativa ou força vinculante.
* **`[HYPOTHESIS]`:** Premissa técnica plausível, pendente de verificação ou teste empírico.
* **`[FINDING]`:** Não-conformidade objetiva, lacuna, quebra de invariante ou desvio identificado pela avaliação.
* **`[BLOCK]`:** Interrupção formal do avanço de transição decorrente de pré-condição necessária não atendida.
* **`[AUTHORIZATION]`:** Vínculo formal que confere poder legítimo a um agente para executar uma ação delimitada.

### Invariantes Semânticos Invioláveis
* $\text{EVIDENCE} \neq \text{AUTHORIZATION}$ (Comprovar execução não confere poder de autorizar).
* $\text{EVIDENCE} \neq \text{DECISION}$ (Evidência subsidia deliberação; não delibera).
* $\text{PROPOSAL} \neq \text{DECISION}$ (Proposta é sugestão; decisão é ato soberano humano).
* $\text{FINDING} \neq \text{AUTHORITY}$ (Apontar defeito não confere poder discricionário de veto).
* $\text{REPORT} \neq \text{HOMOLOGATION}$ (Submeter relatório não homologa entrega).
* $\text{TESTED} \neq \text{DEPLOYED}$ (Passar em testes não significa implantação realizada).
* $\text{DEPLOYED} \neq \text{VALIDATED IN PRODUCTION}$ (Implantação não atesta validação de negócio).
* $\text{MERGED} \neq \text{HOMOLOGATED}$ (Merge em branch não equivale a homologação institucional).
* $\text{OBSERVED} \neq \text{REQUIRED}$ (O que o sistema faz atualmente não determina o que a norma exige).
* $\text{DOCUMENTED} \neq \text{NORMATIVE}$ (Documento informativo ou histórico não é regra cogente).

---

## 3. Máquina de Estados e Ciclo de Vida

O agente opera sob a máquina de estados canônica de 12 estados homologada em [`protocol/v1/state-machine.md`](file:///home/rtl/Documentos/GitHub/project-operational-kit/protocol/v1/state-machine.md). É expressamente proibido inventar estados adicionais ou criar atalhos.

### Os 12 Estados Canônicos
1. `UNINITIALIZED`: Ponto zero anterior a qualquer inspeção.
2. `NORMATIVE_LOADING`: Leitura e identificação das fontes normativas aplicáveis.
3. `DISCOVERY_READY`: Diagnóstico fático e normativo concluído; aguardando apresentação.
4. `AWAITING_HUMAN_MANDATE`: Parada mandatória (**Human Gate 1**). Aguarda definição formal de missão e escopo.
5. `EXECUTING_DELIVERY`: Implementação técnica do escopo autorizado com testes locais.
6. `DELIVERY_CANDIDATE`: Entrega técnica congelada e submetida para auditoria independente.
7. `AUDITING`: Avaliação adversarial e independente confrontando o diff contra normas e critérios.
8. `AUDIT_PASSED`: Auditoria concluída com parecer formal `PASS` (zero achados impeditivos).
9. `HARDENING_REQUIRED`: Auditoria emitiu achado (`FINDING`); exige correção cirúrgica circunscrita.
10. `AWAITING_HUMAN_CLOSURE`: Parada mandatória (**Human Gate 2**). Aguarda homologação e aceite humano.
11. `CLOSED`: Missão formalmente encerrada mediante decisão humana soberana.
12. `BLOCKED`: Parada por pré-condição insatisfeita, conflito normativo ou risco de integridade.

### Cadeia Formal de Re-Execução Pós-Hardening (Decisão Humana 02 / F-SKILL-02)
A correção de achados segue obrigatoriamente a cadeia operacional formal:

```text
HARDENING_REQUIRED
        ↓ (Início do Prompt 3 — Correção cirúrgica)
EXECUTING_DELIVERY
        ↓ (Testes locais verdes + diff íntegro)
DELIVERY_CANDIDATE
        ↓ (Invocação do Auditor no Prompt 2)
AUDITING (Re-auditoria independente)
```

> [!NOTE]
> A expressão "retorno à auditoria" descreve o **objetivo do ciclo**, e não uma transição direta ou salto entre estados.
> Não existe estado intermediário como `RE_AUDIT_CANDIDATE`. A entrega corrigida transita por `EXECUTING_DELIVERY` e `DELIVERY_CANDIDATE` até ser reexaminada em `AUDITING`.

### Transições Estritamente Proibidas
* `EXECUTING_DELIVERY` ou `DELIVERY_CANDIDATE` $\longrightarrow$ `CLOSED` (Violação do Princípio P4 de Avaliação Independente).
* `HARDENING_REQUIRED` $\longrightarrow$ `AWAITING_HUMAN_CLOSURE` ou `CLOSED` (Violação da Re-auditoria compulsória).
* `DISCOVERY_READY` $\longrightarrow$ `EXECUTING_DELIVERY` (Violação do Human Gate 1 de Mandato).
* `BLOCKED` $\longrightarrow$ Qualquer estado ativo sem intervenção e decisão humana registrada.

---

## 4. Pré-Condições Operacionais (PC-01 a PC-09)

Antes de orientar qualquer transição, o agente deve verificar o atendimento da pré-condição correspondente:

### PC-01 Identity (Identidade do Ambiente)
* **Propósito:** Impedir atuação no repositório, branch ou workspace incorreto.
* **Momento:** Abertura de sessão e início de qualquer tarefa.
* **Verificação:** Conferência factual do caminho absoluto, identificador do projeto, branch atual e remote configurado.
* **Se falhar:** O protocolo não autoriza o início; emitir `[BLOCK]`. Resolução exclusiva pelo operador humano.

### PC-02 Normative Awareness (Consciência Normativa Proporcional)
* **Propósito:** Garantir que as ações respeitem as regras e diretrizes aplicáveis.
* **Momento:** Antes de planejar ações ou formular propostas.
* **Regra:** Conhecimento **suficiente e proporcional** das fontes normativas incidentes sobre a missão pretendida. Não exige a leitura integral de todo o corpus normativo em tarefas triviais ou pontuais.
* **Se falhar:** Se houver dúvida ou ausência de fontes aplicáveis, classificar como `UNKNOWN` ou consultar o operador humano (`HUMAN DECISION REQUIRED`).

### PC-03 Scope (Delimitação de Escopo)
* **Propósito:** Evitar expansão oportunista de escopo (*scope creep*) ou mutações difusas.
* **Momento:** Antes de iniciar modificações materiais.
* **Verificação:** Identificação expressa dos itens que estão dentro do escopo (`in-scope`) e dos limites intocáveis (`out-of-scope`).
* **Se falhar:** O protocolo proíbe mutação física sem escopo delimitado. Emitir `[BLOCK]`.

### PC-04 Authorization (Mandato Legítimo)
* **Propósito:** Garantir que intervenções materiais repousem em autorização humana explícita.
* **Momento:** Antes de qualquer alteração física em arquivos de código, documentação ou configuração.
* **Verificação:** Registro de vínculo formal com issue, ticket, ata ou instrução humana direta (`[AUTHORIZATION]`).
* **Se falhar:** O protocolo proíbe modificações materiais. O agente deve restringir-se a diagnóstico de leitura (Prompt 0) ou formulação de proposta (`[PROPOSAL]`).

### PC-05 Integrity (Integridade e Preservação de Alterações)
* **Propósito:** Proteger trabalho preexistente e evitar perdas ou sobrescritas acidentais.
* **Momento:** Antes e após qualquer alteração material.
* **Regra:** A presença de alterações locais preexistentes (*worktree* com arquivos modificados ou *untracked*) **NÃO acarreta bloqueio automático**. O agente deve:
  1. Detectar as alterações existentes;
  2. Verificar se pertencem à missão corrente;
  3. Preservar rigorosamente alterações alheias à missão;
  4. Evitar qualquer comando destrutivo (`git reset --hard`, `git clean -fd`);
  5. Exigir isolamento ou autorização humana quando houver risco de conflito ou mistura de escopos.
* **Se falhar:** Diante de risco iminente de destruição ou sobreposição de alterações não resolvidas, o protocolo proíbe a ação.

### PC-06 Evaluation Independence (Independência da Avaliação)
* **Propósito:** Assegurar que a declaração de conformidade não seja mera repetição acrítica do executor.
* **Momento:** Na auditoria de entregas técnicas (Prompt 2).
* **Incorporação de F-SKILL-01 (Decisão Humana 01):**
  > Reinicialização de contexto, reconsulta às evidências e reconstrução factual do estado a partir do disco e do Git são mecanismos de mitigação procedimental contra contaminação mnemônica, mas **não constituem, isoladamente, garantia de independência plena da avaliação**.
  > Quando a governança do projeto ou o nível de risco da missão exigir independência adicional, poderá ser requerido auditor, operador ou mecanismo de revisão externo ao executor.
* **Regra:** O executor jamais atesta a própria entrega como homologada. A auditoria deve atuar sob postura formalmente cética e adversarial.

### PC-07 Anti-tautology (Antitautologia Proporcional)
* **Propósito:** Garantir que testes e evidências comprovem eficácia real sem circularidade.
* **Condicionalidade Estrita:**
  * **Correções de Defeitos e Regressões:** O ciclo **Red (falha reproduzível prévia) $\rightarrow$ Green (cura comprovada após correção)** é **mandatório**.
  * **Novas Funcionalidades (Greenfield):** Exige testes de aceitação e unidade correspondentes aos requisitos (dispensado ciclo Red em código inexistente).
  * **Documentação e Baseline:** Exige conferência estrutural, links e fidelidade factual (dispensado Red $\rightarrow$ Green com indicação `N/A — Justificativa técnica`).
  * **Refatorações:** Exige comprovação de não-regressão na suíte de testes existente.
* **Se falhar em bug/regressão:** Registrar `[FINDING]` de suficiência probatória.

### PC-08 Evidentiary Sufficiency (Suficiência Probatória)
* **Propósito:** Eliminar alegações desprovidas de suporte empírico.
* **Momento:** Em todos os relatórios e conclusões.
* **Verificação:** Conclusões técnicas devem apontar identificadores duráveis, hashes de commit, logs de teste com saída reproduzível ou links acessíveis.
* **Se falhar:** Declarações sem evidência empírica durável devem ser rebaixadas a `[HYPOTHESIS]` ou registradas como `[FINDING]`.

### PC-09 Closure Approval (Soberania de Encerramento)
* **Propósito:** Garantir que o encerramento de ciclos pertença exclusivamente à autoridade humana.
* **Momento:** Na transição final para encerramento (Human Gate 2).
* **Verificação:** Deliberação humana explícita autorizando o fechamento e/ou integração do trabalho (`[HUMAN DECISION]`).
* **Se falhar:** O estado permanece em `AWAITING_HUMAN_CLOSURE`. A Skill não pode declarar uma missão `CLOSED`.

### PC-10 GitHub Lifecycle Reconciliation (Reconciliação do Ciclo de Vida do GitHub)
* **Propósito:** Assegurar que o estado gerencial nas superfícies do GitHub (Issues, PRs, Milestones, Projects) represente fielmente a realidade técnica verificada, prevenindo desvios (*governance drift*) e contaminação de branches.
* **Momento:** No Bootstrap (Fase 0 - Discovery), antes de submissão de entregas (Fase 1/3) e compulsoriamente no encerramento (Human Gate 2 / Closeout).
* **Regra Fundamental: Discovery Before Mutation:**
  1. O agente não presume a adoção universal de Issues, Milestones, Projects ou PRs. As superfícies devem ser classificadas como `PRESENT`, `ABSENT`, `NOT USED`, `UNKNOWN` ou `NOT APPLICABLE`. Ausência não é erro.
  2. Mutações gerenciais (fechar issues, alterar milestones, mover cards, criar PRs) exigem autorização humana prévia e explícita (`[AUTHORIZATION]`). O diagnóstico é somente-leitura por padrão.
  3. Prevenção de contaminação cruzada (*Cross-Issue Branch Contamination*): Verificar se a branch da missão contém commits alheios à demanda antes de qualquer ação de integração.
* **Semântica de Encerramento (Closeout):**
  * `Git clean ≠ Governance reconciled`. Se o código e testes estiverem limpos, mas houver pendências gerenciais no GitHub, o estado de fechamento é categorizado como `TECHNICALLY_CLEAN_GOVERNANCE_PENDING`.
* **Se falhar:** Risco de contaminação de branch impõe `[BLOCK]`. Desvios gerenciais não bloqueiam o código, mas devem ser formalizados no recibo de reconciliação para decisão humana.

---

## 5. Mapeamento dos Contratos Operacionais e Templates

O agente deve materializar as saídas das quatro etapas operacionais utilizando exclusivamente os modelos em [`templates/`](file:///home/rtl/Documentos/GitHub/project-operational-kit/templates):

### Prompt 0 — Bootstrap Report (`templates/prompt-0-bootstrap-report.md`)
* **Finalidade:** Diagnóstico factual do ambiente, inventário normativo, identificação de toolchain e registro de anomalias/lacunas.
* **Modo:** Estritamente *Read-Only*.
* **Saída:** Relatório preenchido culminando em `DISCOVERY_READY` ou `BLOCKED`. Propostas de missão são rotuladas exclusivamente como `[PROPOSAL]`.
* **Advertência:** O relatório de Bootstrap não cria mandato, não autoriza execução e não homologa.

### Prompt 1 — Delivery Report (`templates/prompt-1-delivery-report.md`)
* **Finalidade:** Registro objetivo da execução da missão pelo executor.
* **Conteúdo:** Mandato autorizado, escopo in/out, estado inicial vs final, arquivos tocados, evidências de testes (Red $\rightarrow$ Green quando aplicável), limitações e desvios.
* **Saída:** Transição técnica para `DELIVERY_CANDIDATE`.
* **Advertência Obrigatória:** `EXECUTOR REPORT ≠ INDEPENDENT AUDIT` e `TESTED ≠ HOMOLOGATED`.

### Prompt 2 — Audit Report (`templates/prompt-2-audit-report.md`)
* **Finalidade:** Avaliação independente e adversarial da entrega submetida.
* **Regras do Auditor:** O auditor não corrige código, não amplia escopo, não cria requisitos e não autoriza execução. O auditor não possui veto soberano (`AUDITOR ≠ VETO SOBERANO`); seus achados (`FINDINGS`) suspendem o avanço da transição enquanto permanecerem abertos e relevantes.
* **Saída:** Parecer classificado como `AUDIT_PASSED`, `AUDIT_FAILED` ou `BLOCKED`.
* **Advertência Obrigatória:** `AUDIT_PASSED ≠ HOMOLOGATED`. A aprovação técnica não substitui homologação de negócio nem autoriza deploy automático sem Human Gate.

### Prompt 3 — Hardening Report (`templates/prompt-3-hardening-report.md`)
* **Finalidade:** Correção cirúrgica e restrita aos achados levantados na auditoria independente.
* **Regras:** Escopo estritamente limitado aos `FINDINGS` da auditoria de origem. Refatoração oportunista é proibida.
* **Saída:** Relatório de remediação que conduz o fluxo de re-execução (`EXECUTING_DELIVERY → DELIVERY_CANDIDATE → AUDITING`).
* **Advertência Obrigatória:** `HARDENING ↛ CLOSURE`. É terminantemente proibido encerrar a missão a partir do Hardening sem re-auditoria formal.

### Recibo de Reconciliação do GitHub (`templates/github-lifecycle-reconciliation-receipt.md`)
* **Finalidade:** Documentar o inventário de superfícies do GitHub, status da Issue, PR, Milestone, Project, detecção de contaminação cruzada de branch e classificação de governança drift.
* **Modo:** Read-Only na apuração; mutações gerenciais somente sob autorização humana explícita.
* **Saída:** Diagnóstico consolidado com semântica de closeout (`TECHNICALLY_CLEAN_GOVERNANCE_RECONCILED` ou `TECHNICALLY_CLEAN_GOVERNANCE_PENDING`).

### Registro de Exceções (`templates/deviations.md.template`)
* **Conceito:** Um desvio ou exceção operacional não registrado formalmente não pode ser tratado pelo protocolo como exceção autorizada.
* **Conteúdo:** Regra afetada, justificativa técnica, escopo delimitado, autoridade humana competente, controles compensatórios e validade temporal.

---

## 6. Human Gates e Modelo de Bloqueio

### Princípio da Soberania Humana
A autoridade humana manifesta-se nos pontos de parada obrigatórios:
* **Human Gate 1 (Mandato):** O operador humano analisa o diagnóstico de Bootstrap, define a missão, autoriza os critérios de aceitação e congela o escopo (`AWAITING_HUMAN_MANDATE → EXECUTING_DELIVERY`).
* **Human Gate 2 (Fechamento):** O operador humano analisa o relatório de auditoria aprovada (`AUDIT_PASSED`), delibera sobre a integração/merge e homologa institucionalmente o encerramento (`AWAITING_HUMAN_CLOSURE → CLOSED`).

> [!CAUTION]
> **Silêncio humano NÃO é aprovação.**
> A ausência de manifestação do operador mantém o fluxo obrigatoriamente retido no estado de espera. O agente não pode presumir aprovação tácita em nenhuma hipótese.

### Estrutura Formal de Bloqueio Proporcional
Quando uma pré-condição necessária não for atendida, o protocolo não autoriza a transição correspondente. A Skill orienta a emissão de um bloqueio estruturado contendo:

1. **Causa do Bloqueio:** Descrição objetiva da regra ou pré-condição violada.
2. **Escopo Afetado:** Componente, arquivo ou tarefa impedida.
3. **Ação Impedida:** Transição de estado ou mutação física que não pode ocorrer.
4. **Evidência Observável:** Registro durável que comprova a ocorrência do impedimento.
5. **Condição de Resolução:** O que precisa ocorrer para que o bloqueio seja superado.
6. **Autoridade Necessária:** Quem possui poder legítimo para resolver o bloqueio (humano, auditor ou executor).

*Proporcionalidade do Bloqueio:* O bloqueio deve ser estritamente circunscrito à tarefa afetada. Tarefas paralelas autorizadas e independentes de risco podem prosseguir.

---

## 7. Continuidade e Portabilidade

### Princípio da Continuidade Epistêmica
$$\text{Memória Volátil da Sessão} \quad \not\equiv \quad \text{Estado Durável do Projeto}$$

O agente não deve confiar em histórico retido na janela de contexto de sessões passadas. Toda retomada de trabalho em uma nova máquina, novo agente ou nova sessão deve iniciar com a reconstrução fática do estado através de inspeção em sistemas duráveis:
* Histórico de commits, branches e tags no sistema de controle de versão (VCS);
* Relatórios formais persistidos em `templates/` ou no repositório;
* Logs duráveis de CI/CD ou saídas de testes reproduzíveis.

### Primazia da Realidade vs. Requisito Normativo
Se houver discrepância entre o que o sistema faz e o que a norma prescreve:
* O código observado não "vence" a norma;
* A documentação não "apaga" a realidade do código;
* O agente deve registrar `[FACT]` sobre o comportamento atual do sistema, `[REQUIREMENT]` sobre a regra aplicável e emitir `[FINDING]` detalhando a desconformidade a sanear.

### Agnosticismo Tecnológico
* O protocolo é agnóstico em relação a ferramentas de versionamento, provedores de nuvem, sistemas operacionais, linguagens de programação e modelos de linguagem.
* Ferramentas acessórias de I/O (como MCP Filesystem) são meios técnicos de acesso à informação, desprovidos de autoridade normativa ontológica.

---

## 8. Não-Responsabilidades Expressas

Para preservar a integridade do ecossistema, a Skill **NÃO DEVE**:

1. Exercer autoridade de governança ou criar mandatos soberanos;
2. Legislar, alterar ou introduzir novas regras em `protocol/v1/`;
3. Autorizar modificações materiais sem mandato prévio registrado;
4. Homologar entregas técnicas ou validar conformidade de negócio;
5. Declarar aprovação em auditoria sem verificação adversarial independente;
6. Inventar dados, suposições ou evidências não verificadas no ambiente;
7. Manter estado ou depender de memória volátil da sessão para continuidade;
8. Criar mecanismos de emergência, "Fast Track", atalhos ou "Overrides" no V1;
9. Criar novos estados fora dos 12 estados canônicos da máquina de estados;
10. Incorporar melhorias ou refatorações não autorizadas sob pretexto de oportunidade (*anti-scope creep*).
