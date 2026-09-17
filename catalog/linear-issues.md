---
name: linear-issues
description: "Create and manage Linear issues, update status and link work items to code changes."
category: productivity
tags: [planning]
status: approved
source: vendor
repository: https://github.com/linear/linear
documentation: https://linear.app/docs
license: unknown
agents: [claude-code]
reviewed: 2026-09-17
use_when:
  - criar uma issue a partir de um bug encontrado durante o desenvolvimento
  - atualizar o status de uma tarefa ao concluir um PR
  - linkar um commit a um item do board
---

# Linear Issues

## Use When

- Criar uma issue a partir de um bug encontrado durante o desenvolvimento
- Atualizar o status de uma tarefa ao concluir um pr
- Linkar um commit a um item do board

## Installation

```bash
/plugin install linear@claude-plugins-official
```

## Notes

Licença do SDK não confirmada — não promover para recommended até verificar.
