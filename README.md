# SkillHub

Biblioteca e catálogo interno de **Agent Skills** — para Claude Code, Codex, Cursor, Gemini CLI e
outros agentes compatíveis. Um único lugar para responder "qual skill eu uso para isso?".

## Como achar uma skill

- **[SKILLS-INDEX.md](SKILLS-INDEX.md)** — o índice completo: recomendadas, por categoria, por
  finalidade, por tecnologia e por tipo de projeto.
- **Busca por linha de comando:**
  ```bash
  rg -l 'category: testing' catalog skills
  rg -l 'tags:.*\baccessibility\b' catalog skills
  ```
  (mais receitas em [docs/conventions.md](docs/conventions.md))
- **`registry.json`** — todas as skills, todos os campos, em um array plano, para scripts e futuras
  ferramentas.

## Skills recomendadas

Veja a seção "⭐ Recommended" em [SKILLS-INDEX.md](SKILLS-INDEX.md) — lista curta, sempre atualizada.

## Estrutura

```text
catalog/     # fichas de skills EXTERNAS (metadata + link, sem código copiado)
skills/      # Agent Skills escritas por NÓS (SKILL.md + scripts/ + references/)
presets/     # stacks recomendadas por tipo de projeto (web-application, backend-api, ...)
docs/        # regras do repositório: schema, taxonomia, convenções, governança
templates/   # ponto de partida para nova entrada de catálogo, skill própria ou preset
tools/       # scripts que validam e geram o índice (npm run validate / build)
```

A diferença entre `catalog/` e `skills/` é simples: se você não consegue editar o comportamento
da skill, é `catalog/`. Se é nosso código, é `skills/`.

## Instalação de uma skill

- **Externa (`catalog/`)**: siga o bloco `## Installation` da ficha da skill — normalmente aponta
  para o repositório oficial.
- **Própria (`skills/`)**: copie o diretório `skills/<nome>/` para onde seu agente espera skills
  (ex: `.claude/skills/` no Claude Code), ou use symlink.

## Como contribuir

Veja [CONTRIBUTING.md](CONTRIBUTING.md) — adicionar uma skill externa ao catálogo leva ~5 minutos;
criar uma skill própria tem um processo um pouco mais rigoroso.

## Documentação de referência

| Doc | Conteúdo |
|---|---|
| [docs/metadata-schema.md](docs/metadata-schema.md) | Schema completo de campos, obrigatórios/opcionais |
| [docs/taxonomy.md](docs/taxonomy.md) | As 12 categorias e o sistema de tags |
| [docs/conventions.md](docs/conventions.md) | Naming, branches, commits, busca |
| [docs/authoring-skills.md](docs/authoring-skills.md) | Como escrever uma boa skill própria |
| [docs/governance.md](docs/governance.md) | Ciclo de status, revisão, licenciamento |
