# Taxonomia: Categorias e Tags

Vocabulário controlado. A fonte da verdade é sempre [`taxonomy.yml`](../taxonomy.yml) na raiz —
este documento explica as regras de uso; o arquivo YAML é o que o `npm run validate` lê de fato.

## Regra central

**Categoria responde "que trabalho o agente está fazendo?"** — nunca "que tecnologia" (isso é tag
da faceta `tech`) nem "que tipo de projeto" (isso é tag da faceta `domain`/`workflow`). Uma
categoria por skill, sempre.

## As 12 categorias

| Categoria | Escopo |
|---|---|
| `ai-agents` | Construir e operar agentes — prompts, skills, MCP, sub-agentes, evals, orquestração |
| `automation` | Executar trabalho repetitivo — scripts, scaffolding, migrações em lote, workflows |
| `design` | UI/UX, design systems, visual, motion, branding, protótipos |
| `development` | Escrever e refatorar código de aplicação — frameworks, linguagens, camada de dados |
| `devops` | CI/CD, infraestrutura, containers, cloud, observabilidade, release |
| `documentation` | Produzir documentação — READMEs, ADRs, API docs, explicação de codebase |
| `productivity` | Trabalho que não é código — planejamento, escrita, comunicação, gestão de tarefas |
| `quality` | Julgar trabalho existente — code review, acessibilidade, performance, dívida técnica |
| `research` | Investigar e sintetizar — exploração de codebase, spikes, comparação de alternativas |
| `security` | AppSec, secrets, dependências, threat modeling, compliance |
| `testing` | Produzir e rodar testes — unitário, e2e, browser testing, fixtures, cobertura |
| `version-control` | Git e GitHub — commits, branches, PRs, changelogs, releases |

## Regras de desempate

Quando uma skill parece caber em mais de uma categoria:

1. **Classifique pelo output, não pelo input.** Uma skill que lê a codebase e *gera documentação*
   é `documentation`. Uma que lê a codebase e *produz entendimento para você decidir algo* é
   `research`.
2. **`testing` vs `quality`:** produz ou executa testes → `testing`. Inspeciona código/produto
   existente e emite um julgamento → `quality`.
3. **`automation` vs `development`:** o agente *executa a tarefa sozinho* → `automation`. O agente
   *ajuda você a escrever código* → `development`.
4. **Nunca crie `misc`.** Se nada parece encaixar bem, escolha a categoria mais próxima e abra uma
   issue explicando o caso. Uma categoria nova só é aceita com PR que demonstre ao menos 3 skills
   existentes que migrariam para ela — isso evita crescimento descontrolado da lista.

O critério de "para que uma skill serve várias finalidades" é resolvido com **1 categoria +
várias tags**, nunca com a skill em duas pastas ou dois arquivos. Exemplo: uma skill de motion
design é `category: design` + `tags: [motion, animation, accessibility]` — aparece nas buscas por
design, por motion e por acessibilidade sem nenhuma duplicação.

## Tags

Tags são **planas** no front matter (`tags: [a, b, c]`), mas agrupadas em 4 facetas dentro de
`taxonomy.yml` só para organizar o índice gerado:

- **`tech`** — tecnologia específica: `angular`, `react`, `dotnet`, `python`, `docker`...
- **`domain`** — tipo de projeto/área: `frontend`, `backend`, `web`, `mobile`, `api`, `database`...
- **`activity`** — atividade concreta: `accessibility`, `code-review`, `migration`, `motion`...
- **`workflow`** — momento do projeto: `greenfield`, `legacy`, `maintenance`, `prototype`.

Regras:

- **1 a 6 tags por skill.** Mais que isso normalmente significa que a skill não tem foco definido.
- **Tag nunca repete a categoria.** `category: testing` + tag `testing` é rejeitado pelo validador.
- **Vocabulário fechado.** Toda tag usada precisa existir em `taxonomy.yml`. Tag nova entra no
  mesmo PR da skill que a introduz — é uma linha de diff, não um processo separado.
- **Sinônimos são proibidos e mapeados.** `taxonomy.yml → tag_synonyms` lista formas erradas e a
  tag correta (ex: `front-end` → `frontend`). O validador rejeita a forma errada e diz qual usar.
- **Sem faceta de agente e sem faceta de status em tags.** Compatibilidade de agente e status de
  endosso já são campos próprios (`agents:`, `status:`) — duplicar em tag só cria divergência.

## Adicionando categoria ou tag nova

1. Edite `taxonomy.yml` no mesmo PR da skill que precisa do valor novo.
2. Para categoria nova, a descrição do PR deve listar ≥3 skills existentes que migrariam para ela
   — senão a categoria provavelmente deveria ser uma tag.
3. `npm run validate` confirma que o novo valor está sendo usado corretamente.
