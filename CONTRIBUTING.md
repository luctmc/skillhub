# Como Contribuir

Existem dois caminhos, com barras de entrada bem diferentes. Veja em qual você está antes de
começar.

## A. Adicionar uma skill externa ao catálogo (~5 min)

Uma entrada de `catalog/` é só uma ficha de referência — metadata + link para o repositório
oficial. Sem código copiado.

1. **Verifique se já existe** algo parecido:
   ```bash
   rg -i "<termo>" catalog/ skills/
   ```
   Se achar algo próximo, decida: atualizar a entrada existente, ou registrar como alternativa
   (anote no campo `## Notes`).
2. Copie o template:
   ```bash
   cp templates/catalog-entry.md catalog/<nome-da-skill>.md
   ```
3. Preencha o front matter (veja [docs/metadata-schema.md](docs/metadata-schema.md) para o schema
   completo). Comece sempre com `status: trial` — promoção de status é um passo separado (veja
   [docs/governance.md](docs/governance.md)).
4. Escolha `category` (1 valor) e `tags` (1–6 valores) de `taxonomy.yml`. Precisa de tag ou
   categoria nova? Edite `taxonomy.yml` no mesmo PR (veja
   [docs/taxonomy.md](docs/taxonomy.md)).
5. Escreva `use_when` com 2–5 itens concretos. Se não consegue escrever, você provavelmente ainda
   não entendeu bem a skill.
6. Preencha `## Installation` com o comando real, testado.
7. Rode `npm run check` localmente.
8. Abra PR com **uma única skill** por PR. Branch: `add/<nome-da-skill>`.

## B. Criar uma skill própria (barra mais alta)

Uma skill em `skills/` é código executável que um agente carrega e roda — a barra de qualidade é
maior.

1. Confirme que não existe uma skill externa que já resolve o problema.
2. Copie o esqueleto:
   ```bash
   cp -r templates/skill skills/<nome-da-skill>
   ```
3. Escreva `SKILL.md` — a `description` é o campo mais importante, é o que faz o agente acionar a
   skill na hora certa. Regras completas em
   [docs/authoring-skills.md](docs/authoring-skills.md).
4. **Teste com um agente real** e cole evidência (trecho da sessão ou resumo do resultado) na
   descrição da PR.
5. `metadata.status: trial`; preencha `agents:` só com o que você de fato testou.
6. Rode `npm run check` localmente.
7. Abra PR. Branch: `add/<nome-da-skill>`. Requer revisão de 2 pessoas (skills próprias têm mais
   superfície de risco que uma ficha de catálogo).

## Antes de abrir qualquer PR

```bash
npm run check   # build + validate + confirma que o índice está em dia
```

Se `SKILLS-INDEX.md` ou `registry.json` mudarem, inclua a mudança no commit — **nunca edite esses
dois arquivos à mão**, eles são gerados.

## Promovendo o status de uma skill existente

Promoção (`trial` → `approved` → `recommended`) é uma **PR separada** da que adicionou a skill,
com evidência de uso real. Veja o fluxo completo em
[docs/governance.md](docs/governance.md).

## Convenções

Naming, branches, commits e receitas de busca: [docs/conventions.md](docs/conventions.md).

## Não sabe onde encaixar sua skill?

Abra uma issue usando o template "Propose a skill" — não precisa já ter o PR pronto.
