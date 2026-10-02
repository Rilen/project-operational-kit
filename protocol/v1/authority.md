# Estrutura Normativa de Autoridade e Governança

**Versão da Especificação:** 1.0.0  
**Status:** Normativo  
**Documento Vinculado:** `principles.md`

---

## 1. Visão Geral

Este documento especifica a hierarquia de autoridade, os critérios para reconhecimento de fontes normativas, o regime de tratamento de conflitos e o funcionamento dos Human Gates no ecossistema do `project-operational-kit`.

A governança do protocolo baseia-se na separação rigorosa entre autoridade soberana, autoridade normativa delegada e capacidade executiva operacional.

---

## 2. Hierarquia Estratificada de Autoridade

A autoridade dentro de qualquer projeto governado pelo protocolo é distribuída em cinco níveis estritos de subordinação:

```
┌────────────────────────────────────────────────────────┐
│ Nível 1: AUTORIDADE HUMANA (Soberana)                  │
│   - Propriedade do projeto e responsabilidade final.   │
│   - Define e altera escopo de missões.                 │
│   - Concede mandatos e assina Human Gates.             │
│   - Arbitra conflitos normativos e autoriza desvios.   │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│ Nível 2: BASE NORMATIVA DO PROJETO (Lei Delegada)      │
│   - Constituição, regras de arquitetura e contratos.   │
│   - Vigência plena estabelecida por delegação humana.  │
│   - Vincula todas as ações técnicas dentro do projeto. │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│ Nível 3: PROTOCOLO OPERACIONAL (Regras de Processo)    │
│   - Ciclo de vida, taxonomia de dados e portões.       │
│   - Governa o método de trabalho dos agentes.          │
└───────────────────────────┬────────────────────────────┘
                            │
              ┌─────────────┴─────────────┐
              ▼                           ▼
┌───────────────────────────┐ ┌───────────────────────────┐
│ Nível 4: AGENTE AUDITOR   │ │ Nível 5: AGENTE EXECUTOR  │
│   - Independência técnica │ │   - Foco na entrega       │
│     de avaliação.         │ │     funcional do escopo.  │
│   - Emite pareceres:      │ │   - Opera sob mandato     │
│     PASS/WARNING/FINDING/ │ │     restrito e estrito.   │
│     BLOCK.                │ │   - Não auto-aprova       │
│   - NÃO cria requisitos e │ │     sua própria entrega.  │
│     NÃO altera normas.    │ │   - Não relaxa normas.    │
└───────────────────────────┘ └───────────────────────────┘
```

---

## 3. Reconhecimento de Fontes Normativas

Nem todo texto presente em um repositório constitui norma. O protocolo impõe uma distinção estrita entre documentos normativos e documentos descritivos:

### 3.1. Fontes Normativas Legítimas
Um documento só possui força prescritiva se atender a pelo menos um dos critérios:
1. **Delegação Explícita de Autoridade:** Declarado formalmente pelo operador humano como norma regente do repositório ou de um subsistema específico.
2. **Consolidação em Bootstrap:** Documento formalmente catalogado e validado no baseline normativo fundador do projeto (ex.: `CONSTITUTION.md` ou documentação de arquitetura ratificada).

### 3.2. Documentos Descritivos e Informativos
Guias introdutórios (`README.md` genérico), tutoriais, anotações de rascunho, históricos de conversas ou anotações em issues constituem **material informativo**, servindo para contextualização e geração de hipóteses técnicas, mas **não possuem força de lei** para vetar ou autorizar decisões contra normas explícitas.

### 3.3. Regra de Resguardo Interpretativo
Na dúvida fundamentada sobre se uma diretriz é prescritiva ou apenas sugestão técnica, o agente deve classificá-la como `HIPÓTESE` e demandar esclarecimento no Human Gate antes de assumi-la como restrição de escopo.

---

## 4. Regime de Lacunas e Conflitos Normativos

### 4.1. Ausência de Base Normativa (Projetos Greenfield ou Sem Regras)
Quando um projeto recém-iniciado ou legado não dispuser de documentação normativa formal:
* O agente é terminantemente proibido de presumir ou inventar uma Constituição.
* A autoridade primária retorna integralmente ao **Nível 1 (Autoridade Humana)**.
* O agente realiza a descoberta fática, formula uma proposta de premissas mínimas e submete ao operador humano. A validação humana institui a base normativa inaugural.

### 4.2. Conflito Normativo Frontal
Quando dois documentos de mesmo nível hierárquico apresentarem prescrições contraditórias e irreconciliáveis:
1. O agente está **terminantemente proibido de escolher discricionariamente** a norma que considera "mais adequada", "mais moderna" ou "mais conveniente".
2. O agente deve suspender imediatamente qualquer escrita de código.
3. Fixa-se o estado operacional em `STATUS = BLOCKED`.
4. Emite-se requisição formal: `ACTION = HUMAN DECISION REQUIRED`.
5. Somente o operador humano possui legitimidade para arbitrar qual regra prevalece ou revogar a norma conflitante.

---

## 5. Arquitetura dos Human Gates

Os Human Gates são barreiras síncronas de controle e governança obrigatórias, nas quais a progressão autônoma cessa obrigatoriamente.

### 5.1. Portões Canônicos
* **Human Gate 1 (Mandate & Scope):** Ocorre após a descoberta e carregamento do baseline normativo. O operador humano analisa o diagnóstico, define a missão, autoriza os limites do escopo e emite a ordem de início da entrega.
* **Human Gate 2 (Closure & Governance):** Ocorre após a auditoria independente registrar parecer favorável (`PASS`). O operador humano revisa as evidências e delibera sobre a integração final (merge, deploy, homologação institucional).

### 5.2. Regras Anti-Bypass
* **Vedação Absoluta de Auto-Aprovação:** Nenhum agente ou rotina automatizada possui legitimidade para assinar, simular ou dispensar um Human Gate.
* **Impossibilidade de Aprovação Tácita:** Silêncio, ausência de resposta ou encerramento temporário de sessão jamais constituem aprovação tácita. O portão permanece fechado até manifestação inequívoca da autoridade competente.

---

## 6. Regime de Desvios Locais (Exceções Normativas)

Circunstâncias de engenharia real podem exigir a suspensão temporária ou adaptação de uma regra de processo ou de arquitetura.

### 6.1. Requisitos para Validade do Desvio
Para que um desvio normativo seja juridicamente e operacionalmente válido no projeto, ele deve estar formalmente registrado em registro auditável local (`DEVIATIONS.md`) contendo obrigatoriamente:
1. **Regra Afetada:** Identificação precisa da norma ou restrição mitigada.
2. **Justificativa Técnica:** Demonstração da inviabilidade ou prejuízo de seguir a regra no contexto específico.
3. **Escopo Circunscrito:** Módulos, branches, arquivos ou missões exatas cobertas pelo desvio.
4. **Autoridade Aprovadora:** Identificação formal do operador humano que autorizou a exceção.
5. **Validade Temporal:** Prazo de expiração ou marco de reavaliação.

### 6.2. Nulidade de Desvios Informais
Qualquer desvio prático ou relaxamento de regra que não esteja devidamente registrado com assinatura da Autoridade Humana é sumariamente considerado **ato nulo e não-autorizado**, devendo ser apontado pelo auditor como `FINDING` ou `BLOCK`.
