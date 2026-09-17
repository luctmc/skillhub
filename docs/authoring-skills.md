# Escrevendo uma Skill Própria

Este documento é sobre `skills/<nome>/SKILL.md` — skills que **nós** escrevemos, executadas por
um agente. Para registrar uma skill de terceiros, veja [conventions.md](conventions.md) e o
template `templates/catalog-entry.md`.

## Antes de começar

Confirme que não existe uma skill externa que já resolve o problema — não escrevemos o que já
existe. Procure em `catalog/` e no `SKILLS-INDEX.md` primeiro.

## O campo mais importante: `description`

Em `catalog/*.md`, a `description` é lida por um **humano** varrendo o índice. Em
`skills/*/SKILL.md`, ela é lida pelo **agente**, no momento de decidir se aciona a skill ou não.
São públicos diferentes — escreva para o público certo.

Uma boa `description` de skill própria:

- Começa com o que a skill faz (verbo no imperativo, em inglês, como o resto do padrão de Agent
  Skills).
- Inclui explicitamente quando usar — "Use when X, when the user asks for Y, or before Z."
- Evita jargão interno que só faz sentido para quem já conhece a skill.
- Cabe em poucas frases. Detalhe fica no corpo do arquivo e em `references/`.

```yaml
description: >
  Review an HTTP API contract for breaking changes, inconsistent naming, missing error cases
  and pagination gaps. Use when reviewing an OpenAPI spec, a new endpoint PR, or before
  publishing a versioned API.
```

## Escopo e progressive disclosure

- `SKILL.md` deve ser enxuto: o essencial para o agente decidir usar a skill e começar a executá-la.
- Detalhe extenso (checklists longos, exemplos, tabelas de referência) vai em `references/*.md` e é
  citado a partir do `SKILL.md` — não jogue tudo no arquivo principal.
- Lógica que precisa rodar (não só ser lida) vai em `scripts/`. Prefira scripts idempotentes e sem
  efeitos colaterais surpresa.
- Arquivos estáticos (templates, imagens, exemplos de config) vão em `assets/`.

Estrutura de referência:

```text
skills/<nome>/
├── SKILL.md
├── references/
│   └── algum-detalhe.md
├── scripts/
│   └── algum-script.mjs
└── assets/
```

## O bloco `metadata`

Todo o schema do catálogo (categoria, tags, status etc.) vive aninhado em `metadata:` dentro do
front matter — nunca solto no nível raiz, para não colidir com os campos que a spec de Agent
Skills espera (`name`, `description`). Veja o schema completo em
[metadata-schema.md](metadata-schema.md).

## Testando antes de abrir PR

1. Rode a skill de verdade com um agente (Claude Code, Codex, etc.) em um cenário real.
2. Cole um trecho da sessão (ou um resumo do resultado) na descrição da PR como evidência.
3. Preencha `agents:` **só** com o que você de fato testou — não com o que você acha que deveria
   funcionar.
4. `status: trial` para toda skill nova. Promoção para `approved`/`recommended` é PR separada,
   depois de uso real (veja [governance.md](governance.md)).

## Quando uma skill de catálogo vira skill própria

Se precisamos modificar o comportamento de uma skill de terceiros, ela sai de `catalog/` e vira
uma skill em `skills/`, com `derived_from: <nome-original>` no metadata e a licença original
preservada junto ao código copiado. Isso mantém `catalog/` livre de código de terceiros — veja a
seção "Catalog vs Skills" no README.
