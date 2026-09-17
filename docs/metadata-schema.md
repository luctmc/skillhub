# Schema de Metadata

Todo `name`, `description`, `tags` etc. vive no **front matter YAML** do arquivo da skill —
nunca em arquivo separado. É a única fonte da verdade; `SKILLS-INDEX.md` e `registry.json` são
gerados a partir dele (`npm run build`).

Há duas variantes do schema: **entrada de catálogo** (`catalog/<nome>.md`, skill de terceiros) e
**skill própria** (`skills/<nome>/SKILL.md`, skill que escrevemos). Veja
[conventions.md](conventions.md) e a raiz do repositório para a diferença entre as duas.

## Campos obrigatórios (ambos os tipos)

| Campo | Formato | Regra |
|---|---|---|
| `name` | kebab-case | Deve ser igual ao nome do arquivo (catálogo) ou do diretório (skill própria). Único no repositório. |
| `description` | string, inglês | Começa com verbo. Até 200 caracteres em `catalog/` (lida por humano). Até 500 em `skills/` (é também o texto que o **agente** lê para decidir acionar a skill, por isso o limite maior — inclua o "use when" nela mesma; veja [authoring-skills.md](authoring-skills.md)). |
| `category` | string | Exatamente 1 valor de `taxonomy.yml → categories`. Ver [taxonomy.md](taxonomy.md). |
| `tags` | lista de strings | 1 a 6 valores de `taxonomy.yml → tags`. Nunca repete o valor de `category`. |
| `status` | enum | `trial \| approved \| recommended \| deprecated \| rejected`. Ver "Status Lifecycle" abaixo. |
| `source` | enum | `anthropic \| vendor \| community \| internal` |
| `reviewed` | data ISO `YYYY-MM-DD` | Última verificação humana. Skills `approved`/`recommended` com mais de 180 dias geram warning no `validate`. |
| `use_when` | lista de strings | 2 a 5 itens curtos, em português, para alimentar a busca no índice. |

## Obrigatórios só em `catalog/`

| Campo | Formato | Regra |
|---|---|---|
| `repository` | URL | Repositório oficial da skill. |
| `license` | SPDX ou `"unknown"` | `unknown` impede `status: recommended`. |

Skills próprias não usam `repository`/`license` — o repositório e a licença são os deste repo.

## Condicionais

| Campo | Quando é obrigatório |
|---|---|
| `superseded_by` | `status: deprecated` |
| `reason` | `status: rejected` |

## Opcionais

`agents`, `documentation`, `author`, `ref`, `owner`, `derived_from` (skill própria derivada de uma
entrada de catálogo que passou a ser mantida por nós).

### Sobre `agents`

Lista de agentes com que a skill foi **verificada de fato**: `claude-code`, `codex`, `cursor`,
`gemini-cli`, `copilot`, `universal`. `universal` significa instruções em markdown puro, sem
recurso específico de um agente. Lista vazia não significa incompatível — significa "ninguém
testou ainda"; isso também é informação útil.

## Campos automáticos (nunca escritos à mão)

`SKILLS-INDEX.md`, `registry.json` e o `marketplace.json` futuro (fase 3) são sempre gerados por
`npm run build`. Editar esses arquivos diretamente é revertido no próximo build.

## Skill própria: o bloco `metadata`

`name` e `description` no topo do front matter seguem a spec de Agent Skills (é o que o carregador
do agente lê). Todo o resto do nosso schema fica aninhado em `metadata:`:

```yaml
---
name: api-contract-review
description: Review an HTTP API contract for breaking changes... Use when reviewing a PR.
metadata:
  category: quality
  tags: [api, backend, code-review]
  status: approved
  source: internal
  reviewed: 2026-09-17
  owner: "@lucas"
  use_when:
    - revisar um PR que adiciona ou altera endpoints
---
```

Se uma versão futura do carregador de skills rejeitar chaves desconhecidas no front matter, o
plano B é mover o bloco `metadata` para um arquivo irmão `skill.meta.yml` — `tools/lib/parse.mjs`
já está preparado para aceitar essa forma sem quebrar nada existente.

## Exemplos válidos e inválidos

✅ Válido:
```yaml
tags: [testing, browser, frontend]
category: testing
status: trial
```

❌ Inválido — tag repete categoria:
```yaml
tags: [testing, browser]
category: testing   # "testing" não pode estar em tags
```

❌ Inválido — sinônimo proibido:
```yaml
tags: [front-end]   # use "frontend" (veja taxonomy.yml → tag_synonyms)
```

❌ Inválido — license unknown com status recommended:
```yaml
license: unknown
status: recommended   # trave em trial/approved até resolver a licença
```

Todas essas regras são checadas por `npm run validate` — não confie apenas na revisão visual.
