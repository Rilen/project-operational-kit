# Núcleo Canônico dos Princípios Universais

**Versão da Especificação:** 1.0.0  
**Status:** Normativo / Imutável no Master Kit  
**Escopo:** Fundamento epistemológico e operacional do `project-operational-kit`

---

## 1. Visão Geral

Este documento define os seis princípios canônicos universais que regem toda e qualquer intervenção técnica, metodológica ou operacional governada pelo `project-operational-kit`.

Estes princípios são neutros em relação a linguagens de programação, arquiteturas de software, plataformas de hospedagem de código (GitHub, GitLab, Bitbucket ou bare Git), ferramentas de teste ou modelos de inteligência artificial.

Nenhuma regra prática, checklist, automação ou interpretação posterior pode violar ou subverter os seis princípios aqui estabelecidos.

---

## 2. Os Seis Princípios Canônicos

### Princípio 1: Experiência ≠ Autoridade (Axioma Epistemológico)
* **Definição:** O conhecimento prévio, a memória de contexto, o histórico de sessões anteriores ou o treinamento genérico de um operador ou agente gera exclusivamente **hipóteses de trabalho**, jamais autoridade normativa ou requisitos sobre o projeto atual.
* **Corolário Operacional:** A autoridade sobre as regras, restrições e comportamentos esperados de um sistema decorre exclusivamente da documentação normativa do projeto e das determinações de sua autoridade humana soberana. Nenhum comportamento pode ser inferido ou assumido como lei com base em "experiência em outros projetos".
* **Desacoplamento Categórico:** Estados de construção física nunca implicam estados de qualidade ou homologação. Construído ≠ Testado ≠ Homologado.

---

### Princípio 2: Autoridade e Autorização (Soberania do Mandato)
* **Definição:** A autoridade de decisão pertence originariamente ao ser humano responsável pelo projeto e, por delegação formal explícita, aos documentos normativos canônicos que ele institui.
* **Corolário Operacional:** O agente executor opera sob mandado específico e limitado. O agente não possui competência para criar escopo, inventar requisitos, alterar unilateralmente a base normativa do projeto ou conceder aprovação definitiva a si mesmo.
* **Inviolabilidade dos Portões:** Pontos de controle decisório (Human Gates) exigem chancela humana expressa, identificável e rastreável. A ausência de resposta ou timeout jamais configura aprovação tácita.

---

### Princípio 3: Conformidade de Ação (Pré-condição Normativa)
* **Definição:** Nenhuma ação operacional relevante pode ser iniciada sem que suas pré-condições normativas, os limites estritos de escopo e a respectiva autorização formal estejam plenamente estabelecidos e verificados.
* **Corolário Operacional:** A ação técnica é subordinada à regra. Na presença de lacuna normativa insanável, ambiguidade fática relevante ou contradição frontal entre fontes de autoridade, a ação deve ser imediatamente suspensa, fixando o estado como bloqueado (`STATUS = BLOCKED`) com requisição formal de decisão humana (`ACTION = HUMAN DECISION REQUIRED`).
* **Interdição de Arbitragem Autônoma:** O agente é proibido de escolher discricionariamente qual regra seguir quando duas normas legítimas colidem.

---

### Princípio 4: Avaliação Independente (Separação de Funções)
* **Definição:** A avaliação da conformidade de uma entrega técnica deve ser estruturalmente independente de sua execução física. Quem constrói não homologa em definitivo.
* **Corolário Operacional:** A fase de entrega (`Delivery`) foca na execução funcional objetiva do escopo autorizado; a fase de avaliação (`Audit`) atua sob postura formalmente adversarial, cética e autônoma, confrontando a entrega contra os critérios de aceitação e as restrições normativas.
* **Nulidade da Auto-Declaração:** A declaração de conformidade emitida pelo próprio papel executor possui valor probatório nulo para fins de encerramento de missão. O parecer do auditor independente possui poder de veto vinculante diante de inconformidades constatadas.

---

### Princípio 5: Integridade e Reversibilidade (Proteção de Estado)
* **Definição:** Toda operação técnica deve preservar a integridade do ambiente do projeto, minimizar riscos de perda irreversível de dados ou artefatos e priorizar mecanismos que permitam rastreabilidade e reversibilidade.
* **Corolário Operacional:** É vedada a execução de comandos ou procedimentos potencialmente destrutivos em dados, históricos ou arquivos locais sem autorização prévia, expressa e compatível com o risco. O trabalho não rastreado existente no ambiente do desenvolvedor deve ser ativamente protegido contra destruição por operações de sincronização.
* **Prevalência da Segurança:** Diante do risco iminente de perda de dados ou estado não reproduzível, o agente deve paralisar a ação e acionar intervenção humana, sobrepondo a segurança do repositório a qualquer objetivo de velocidade de entrega.

---

### Princípio 6: Verificabilidade e Proporcionalidade (Continuidade por Evidência)
* **Definição:** Nenhuma alegação técnica ou transição de estado possui validade decisória sem a presença de evidência empírica verificável, devendo o rigor probatório e o rito de governança ser proporcionais ao risco, à irreversibilidade e ao impacto da intervenção.
* **Corolário Operacional:** A continuidade operacional entre turnos de trabalho, diferentes máquinas ou agentes distintos depende exclusivamente de evidências e artefatos duráveis persistidos no meio compartilhado do projeto. Memória volátil de terminal ou sessões locais não transferem autoridade nem comprovam estados anteriores.
* **Rigor sem Burocracia:** A governança deve ser rigorosa sem gerar atrito paralisante. Tarefas de baixíssimo impacto admitem ritos enxutos de validação; intervenções de alto risco exigem máxima densidade de prova, testes de estresse e escrutínio exaustivo.

---

## 3. Cláusula de Imutabilidade Metodológica

Os seis princípios canônicos constituem o núcleo irredutível do `project-operational-kit`.

Projetos que adotarem esta metodologia podem regulamentar localmente como os princípios são aplicados, quais ferramentas serão utilizadas e quais políticas de branch serão seguidas, mas **não possuem competência para revogar ou desconsiderar nenhum dos seis princípios**.
