---
name: browser-testing
description: "Browser automation and end-to-end testing via the official Playwright MCP server by Microsoft."
category: testing
tags: [e2e, browser, frontend, web]
status: recommended
source: vendor
repository: https://github.com/anthropics/claude-plugins-public/tree/main/external_plugins/playwright
license: Apache-2.0
agents: [claude-code]
reviewed: 2026-09-17
use_when:
  - cobrir fluxos críticos de uma aplicação web
  - investigar um teste e2e instável (flaky)
  - tirar screenshots automatizados de páginas
---

# Browser Testing

## Use When

- Cobrir fluxos críticos de uma aplicação web
- Investigar um teste e2e instável (flaky)
- Tirar screenshots automatizados de páginas

## Installation

```bash
/plugin install playwright@claude-plugins-official
```

## Notes

Padrão do time para e2e. Estável, mantido pela Microsoft.
