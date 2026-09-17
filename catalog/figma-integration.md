---
name: figma-integration
description: "Access Figma design files, extract component information and sync design tokens with code."
category: design
tags: [frontend, ux]
status: approved
source: vendor
repository: https://github.com/figma/mcp-server-guide
documentation: https://github.com/figma/mcp-server-guide#readme
license: MIT
agents: [claude-code]
reviewed: 2026-09-17
use_when:
  - implementar um componente a partir de um design no Figma
  - extrair tokens de design (cores, spacing, tipografia)
  - manter design e código sincronizados
---

# Figma Integration

## Use When

- Implementar um componente a partir de um design no figma
- Extrair tokens de design (cores, spacing, tipografia)
- Manter design e código sincronizados

## Installation

```bash
/plugin install figma-integration@claude-plugins-official
```

## Notes

Oficial da Figma. Requer acesso ao arquivo Figma do projeto.
