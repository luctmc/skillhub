---
name: security-scan
description: "Deep vulnerability scanning of your own code with findings challenged before being reported, plus verified patch suggestions."
category: security
tags: [code-review]
status: approved
source: anthropic
repository: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-security
license: MIT
agents: [claude-code]
reviewed: 2026-09-17
use_when:
  - escanear o repositório inteiro em busca de vulnerabilidades
  - revisar o diff de uma branch antes do merge
  - gerar patches sugeridos para findings de segurança
---

# Security Scan

## Use When

- Escanear o repositório inteiro em busca de vulnerabilidades
- Revisar o diff de uma branch antes do merge
- Gerar patches sugeridos para findings de segurança

## Installation

```bash
/plugin install claude-security@claude-plugins-official
```

## Notes

Oficial da Anthropic. Boa primeira linha de defesa antes de uma revisão manual de segurança.
