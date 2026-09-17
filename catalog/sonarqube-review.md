---
name: sonarqube-review
description: "Automatically enforce SonarQube code quality and security rules in the agent coding loop."
category: quality
tags: [code-review, linting]
status: approved
source: vendor
repository: https://github.com/SonarSource/sonarqube-agent-plugins
license: LGPL-3.0
agents: [claude-code]
reviewed: 2026-09-17
use_when:
  - revisar qualidade de código antes de abrir PR
  - aplicar padrões de segurança e code smells do time
  - integrar o agente ao SonarQube já usado no CI
---

# Sonarqube Review

## Use When

- Revisar qualidade de código antes de abrir pr
- Aplicar padrões de segurança e code smells do time
- Integrar o agente ao sonarqube já usado no ci

## Installation

```bash
/plugin install sonarqube@claude-plugins-official
```

## Notes

Requer instância SonarQube configurada. Útil quando o projeto já usa Sonar no pipeline.
