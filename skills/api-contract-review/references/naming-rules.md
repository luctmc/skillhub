# Convenções de Nomenclatura de API

- Recursos no plural: `/users`, não `/user`.
- Casing consistente em todo o payload — normalmente `camelCase` para JSON.
- Ações que não são CRUD puro usam verbo explícito: `POST /orders/{id}/cancel`, não
  `PATCH /orders/{id}` com um campo mágico de status.
- IDs de recurso sempre como string ou número — nunca misture os dois tipos entre endpoints
  parecidos.
- Datas em ISO 8601 (`2026-09-17T12:00:00Z`), nunca formato livre.
- Campos booleanos com prefixo claro: `isActive`, `hasPermission` — evite nomes ambíguos como
  `status: true`.
