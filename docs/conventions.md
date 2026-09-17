# Convenções

## Nomenclatura

| Item | Regra | Exemplo |
|---|---|---|
| Arquivo de catálogo | `kebab-case.md`, igual ao `name` | `browser-testing.md` |
| Diretório de skill própria | `kebab-case/`, igual ao `name` | `skills/api-contract-review/` |
| Nome de skill | kebab-case, 2–4 palavras, sem sufixo `-skill`/`-skills` | `motion-design` (não `motion-design-skill`) |
| Categoria | kebab-case, de `taxonomy.yml` | `version-control` |
| Tag | kebab-case, singular, sem acento | `accessibility` (não `a11y-tests`) |
| Preset | `kebab-case.yml`, nome do tipo de projeto | `presets/backend-api.yml` |
| Documento em `/docs` | `kebab-case.md` | `docs/metadata-schema.md` |
| Branch | `<tipo>/<slug>` | `add/playwright-testing`, `fix/broken-link-caveman` |
| Commit | [Conventional Commits](https://www.conventionalcommits.org/), escopo = nome da skill | `feat(catalog): add playwright-testing` |
| Pull Request | mesmo texto do commit principal | |

Tipos de branch/commit aceitos: `add`, `update`, `fix`, `docs`, `chore`.

### Regras adicionais

- Nome de skill descreve **o trabalho que ela faz**, não o produto por trás:
  `browser-testing` é melhor que `playwright-skill`.
- Nome próprio de projeto é aceitável quando **é** a identidade da skill (ex: `caveman`).
- Sem sufixo redundante — tudo neste repositório é skill, não repita "skill" no nome.
- Renomear uma skill é breaking change: registre o mapeamento em `taxonomy.yml → renames` para
  não quebrar presets e links externos que apontem para o nome antigo.

## Buscando skills por linha de comando

O front matter consistente torna a busca por `ripgrep` confiável:

```bash
# Por categoria
rg -l 'category: testing' catalog skills

# Por tag
rg -l 'tags:.*\baccessibility\b' catalog skills

# Por status
rg -l 'status: recommended' catalog skills

# Por texto livre na descrição ou no use_when
rg -i 'codebase' catalog skills
```

Para uma busca mais estruturada (todos os campos, filtros combinados), use `registry.json` gerado
por `npm run build` — é um array plano com todos os campos já resolvidos.

## Scripts do repositório

```bash
npm run validate   # valida schema, vocabulário, duplicatas, presets, staleness
npm run build      # gera SKILLS-INDEX.md e registry.json
npm run check       # build + validate + confirma que o índice está em dia (o que o CI roda)
```

Rode `npm run check` antes de todo PR. Se o índice mudar, o commit precisa incluir essa mudança —
nunca edite `SKILLS-INDEX.md` ou `registry.json` manualmente.
