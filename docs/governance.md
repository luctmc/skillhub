# Governança

## Ciclo de vida do `status`

```text
        ┌──────────────┐
  novo →│    trial     │──── não serviu ───→ rejected (exige "reason")
        └──────┬───────┘
               │ usada em projeto real
        ┌──────▼───────┐
        │   approved   │──── ficou obsoleta ──→ deprecated (exige "superseded_by")
        └──────┬───────┘
               │ 2ª pessoa confirma + vira o padrão do time para este trabalho
        ┌──────▼───────┐
        │ recommended  │──── perdeu espaço ──→ approved | deprecated
        └──────────────┘
```

| Status | Significado | Regra para chegar lá |
|---|---|---|
| `trial` | Em avaliação, use por conta e risco | Padrão de toda entrada nova — ninguém abre PR com outro status |
| `approved` | Funciona, pode usar | Alguém já usou em um projeto real |
| `recommended` | Comece por aqui para este trabalho | Usada em ≥1 projeto real **e** revisada por uma 2ª pessoa |
| `deprecated` | Usávamos, não use mais | Exige `superseded_by` apontando para a substituta |
| `rejected` | Avaliada e descartada | Exige `reason`. Existe para não reabrir a mesma pergunta em 6 meses |

**Promover status é PR separada** da PR que adicionou a skill, com evidência de uso (link de PR
real, trecho de sessão, ou nome do projeto onde foi usada). Isso impede que toda skill nasça
"recommended" só porque parece boa no papel.

## `reviewed`: verificação, não confiança cega

Em vez de um campo booleano `tested`, usamos uma **data** (`reviewed: YYYY-MM-DD`). O validador
(`npm run validate`) emite warning para qualquer skill `approved`/`recommended` com mais de 180
dias sem revisão — porque `tested: true` de dois anos atrás normalmente já é mentira, mas uma data
o CI consegue interpretar objetivamente.

### Revisão trimestral

A cada trimestre, rode `npm run validate` e reúna os warnings de staleness em uma issue única.
Cada item da lista é: confirmar que a skill ainda funciona como descrito (atualiza `reviewed`),
rebaixar o status, ou marcar como `deprecated`/`rejected` se ninguém mais usa.

## Licenciamento (entradas de catálogo)

- `license` é obrigatório em `catalog/*.md`.
- `license: unknown` trava a skill em `trial` ou `approved` — nunca `recommended`.
- Não fazemos vendoring de código de terceiros. Se precisamos modificar uma skill externa, ela
  vira skill própria em `skills/`, com `derived_from:` e a licença original preservada.

## Ownership

- `owner` é opcional em `catalog/`, mas recomendado para skills `recommended`.
- `owner` é esperado em toda skill própria e em todo preset.
- `CODEOWNERS` exige revisão de um mantenedor para mudanças em `taxonomy.yml` e `/docs` — é onde
  fica o vocabulário compartilhado, então mudanças ali afetam todo mundo.
- `notes` (corpo do arquivo, seção `## Notes`) é obrigatório em skills `deprecated`/`rejected`:
  registre o motivo em texto livre, não só no campo `reason`/`superseded_by`.

## Link rot (entradas de catálogo)

O repositório de origem de uma skill externa pode sumir ou mudar de comportamento. Mitigações,
por ordem de prioridade:

1. `ref` opcional fixa a versão/sha avaliada, para o comportamento não mudar silenciosamente.
2. Um link-checker automatizado (fase 2 do roadmap, ainda não implementado) abre issue quando um
   `repository`/`documentation` para de responder.
3. Se uma skill crítica desaparecer de verdade, a exceção é documentada em `## Notes` e avaliamos
   caso a caso se vale a pena promovê-la a skill própria.
