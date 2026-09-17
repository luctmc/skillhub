---
name: postman-api
description: "Full API lifecycle management: sync collections, generate clients, run test suites against an API."
category: testing
tags: [api, backend]
status: approved
source: vendor
repository: https://github.com/Postman-Devrel/postman-claude-code-plugin
license: MIT
agents: [claude-code]
reviewed: 2026-09-17
use_when:
  - testar uma API a partir de uma collection existente
  - gerar cliente HTTP a partir de uma spec
  - validar contrato de API antes do deploy
---

# Postman Api

## Use When

- Testar uma api a partir de uma collection existente
- Gerar cliente http a partir de uma spec
- Validar contrato de api antes do deploy

## Installation

```bash
/plugin install postman@claude-plugins-official
```

## Notes

Requer conta Postman configurada no projeto.
