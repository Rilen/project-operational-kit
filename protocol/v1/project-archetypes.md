# Diretrizes por Arquétipo de Projeto

**Versão da Especificação:** 1.0.0  
**Status:** Normativo  
**Documento Vinculado:** `principles.md`, `lifecycle.md`, `authority.md`

---

## 1. Visão Geral

Este documento orienta a aplicação do `project-operational-kit` diante dos diferentes estados de maturidade e integridade em que um repositório de software pode ser encontrado.

O protocolo é concebido como uma bagagem portátil capaz de operar tanto em bases de código vazias quanto em sistemas legados altamente degradados, sem relaxar seus princípios canônicos.

---

## 2. Regime de Operação por Arquétipo

### 2.1. Arquétipo A: Projeto Vazio (Greenfield)
* **Diagnóstico fático:** Diretório recém-inicializado, sem arquivos de código, sem testes e sem documentação prévia.
* **Comportamento do Bootstrap:** O agente constata a ausência de base normativa. Em vez de bloquear paralisantemente, o Bootstrap identifica a necessidade de **instituição fundadora**.
* **Procedimento:** O agente submete ao Human Gate 1 uma proposta de Constituição inicial mínima. A aprovação humana institui a base normativa inaugural antes da criação do primeiro arquivo de código de aplicação.

---

### 2.2. Arquétipo B: Projeto Existente Saudável
* **Diagnóstico fático:** Repositório ativo, código funcional, suíte de testes verde, convenções estabelecidas pela equipe anterior.
* **Comportamento do Bootstrap:** Mapeamento integral das normas vigentes na documentação existente (ex.: `README.md`, `CONTRIBUTING.md`, guias de arquitetura) e catálogo dos contratos.
* **Procedimento:** A governança integra-se de forma não invasiva, preservando rigorosamente as convenções de estilo, linters e padrões técnicos adotados pelos autores originais.

---

### 2.3. Arquétipo C: Projeto Legado ou Defeituoso
* **Diagnóstico fático:** Repositório antigo, documentação desatualizada, suíte de testes pré-existente falhando ou ausente, débitos técnicos acumulados.
* **Comportamento do Bootstrap:** O NBR registra formalmente o estado degradado prévio (*baseline de falhas herdadas*), identificando quais testes já falhavam antes da intervenção.
* **Procedimento:** O princípio da não-contaminação de escopo é acionado:
  1. A missão atual **não é responsabilizada** por sanar débitos técnicos fora de seu escopo autorizado.
  2. O código novo deve incluir testes específicos para o seu escopo.
  3. A entrega não pode introduzir novas regressões nos módulos legados.

---

### 2.4. Arquétipo D: Projeto com Documentação Conflitante ou Ausente
* **Diagnóstico fático:** Existência de instruções contraditórias entre documentos ou colisão entre documentação escrita e comportamento real do código.
* **Comportamento do Bootstrap:** O agente detecta a ambiguidade fática. É terminantemente proibido tentar "adivinhar" a regra correta.
* **Procedimento:** O estado transita imediatamente para `STATUS = BLOCKED` com requisição formal `ACTION = HUMAN DECISION REQUIRED`. O operador humano atua no Human Gate 1 para arbitrar a verdade oficial do projeto.

---

### 2.5. Arquétipo E: Missões Exclusivamente Não-Funcionais (Documentação / Auditoria / Especificação)
* **Diagnóstico fático:** A missão não envolve criação ou alteração de código executável de aplicação (ex.: redação de manual, auditoria de segurança read-only, elaboração de RFC).
* **Procedimento:** O ciclo de 4 fases opera sob o Princípio da Proporcionalidade:
  * O *Delivery* consiste na entrega do documento ou especificação estruturada.
  * O *Audit* consiste na revisão formal de clareza, ausência de contradições internas, aderência a normas e verificação de links e dados citados.
  * A separação entre quem escreve a especificação e quem valida sua consistência permanece integralmente preservada.
