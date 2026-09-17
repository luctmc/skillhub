---
name: sentry-monitoring
description: "Access Sentry error reports, analyze stack traces and correlate incidents with recent code changes."
category: devops
tags: [monitoring, debugging]
status: approved
source: vendor
repository: https://github.com/getsentry/plugin-claude
license: MIT
agents: [claude-code]
reviewed: 2026-09-17
use_when:
  - investigar um erro reportado em produção
  - correlacionar um incidente com um deploy recente
  - triagem de stack traces recorrentes
---

# Sentry Monitoring

## Use When

- Investigar um erro reportado em produção
- Correlacionar um incidente com um deploy recente
- Triagem de stack traces recorrentes

## Installation

```bash
/plugin install sentry@claude-plugins-official
```

## Notes

Complementa bem com sentry-cli para operações via linha de comando.
