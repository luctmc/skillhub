---
name: api-contract-review
description: >
  Review an HTTP API contract for breaking changes, inconsistent naming, missing error cases
  and pagination gaps. Use when reviewing an OpenAPI spec, a pull request that adds or changes
  endpoints, or before publishing a versioned API.
metadata:
  category: quality
  tags: [api, backend, code-review]
  status: approved
  source: internal
  reviewed: 2026-09-17
  owner: "@lucas"
  agents: [claude-code, universal]
  use_when:
    - revisar um PR que adiciona ou altera endpoints
    - validar uma spec OpenAPI antes de publicar
    - detectar breaking change antes de um release
---

# API Contract Review

Revisa um contrato de API HTTP (spec OpenAPI ou diff de endpoints) em busca de problemas que
normalmente só aparecem em produção: breaking changes silenciosos, nomenclatura inconsistente
entre endpoints, casos de erro não documentados e paginação incompleta.

## Checklist

1. **Breaking changes** — campo removido/renomeado, tipo alterado, código de status mudado,
   parâmetro obrigatório novo sem default. Ver `references/breaking-changes.md`.
2. **Naming** — consistência de casing, plural/singular em recursos, verbos em ações não-CRUD.
   Ver `references/naming-rules.md`.
3. **Erros** — todo endpoint tem os códigos de erro plausíveis documentados (400/401/403/404/409/422/500)?
4. **Paginação** — endpoints de listagem têm parâmetros de paginação consistentes com o resto da API?
5. **Versionamento** — a mudança exige bump de versão da API? Está compatível com clientes atuais?

## Como usar

Se houver uma spec OpenAPI disponível, rode o script de diff antes da checklist manual:

```bash
node skills/api-contract-review/scripts/diff-openapi.mjs old.yaml new.yaml
```

Caso contrário, aplique a checklist diretamente sobre o diff do PR.

## References

- `references/breaking-changes.md` — catálogo de mudanças que quebram clientes existentes
- `references/naming-rules.md` — convenções de nomenclatura de endpoints e campos

## Scripts

- `scripts/diff-openapi.mjs` — compara duas specs OpenAPI e lista mudanças estruturais
