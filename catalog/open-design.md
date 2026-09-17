---
name: open-design
description: "Local-first desktop app that turns your coding agent into a design engine \u2014 prototypes, decks, dashboards, images and video, driven by a shared DESIGN.md design system."
category: design
tags: [frontend, ux, prototype]
status: trial
source: vendor
repository: https://github.com/nexu-io/open-design
documentation: https://open-design.ai/
license: Apache-2.0
reviewed: 2026-09-17
use_when:
  - gerar protótipos web, mobile ou dashboard a partir de um brief
  - criar decks/apresentações usando um design system compartilhado (DESIGN.md)
  - exportar um artefato de design direto para HTML, PDF, PPTX ou MP4
---

# Open Design

## Use When

- Gerar protótipos web, mobile ou dashboard a partir de um brief
- Criar decks/apresentações usando um design system compartilhado (DESIGN.md)
- Exportar um artefato de design direto para HTML, PDF, PPTX ou MP4

## Installation

```bash
# baixar o app desktop em https://open-design.ai/, depois conectar ao agente:
od mcp install claude   # Claude Code
od mcp install codex    # Codex CLI
od mcp install cursor   # Cursor
```

## Notes

É um app desktop local (macOS/Windows), não uma skill portátil instalada via npx — conecta ao agente via MCP depois de instalado. Alternativa open-source ao "Claude Design". Suporta 20+ agentes/CLIs via BYOK. Ainda não avaliado internamente.
