---
name: accessibility-audit
description: "Run comprehensive accessibility audits combining axe-core and jsx-a11y against WCAG 2.1 AA."
category: quality
tags: [accessibility, frontend, testing]
status: approved
source: community
repository: https://github.com/airowe/claude-a11y-skill
documentation: https://github.com/airowe/claude-a11y-skill/blob/main/README.md
license: MIT
agents: [claude-code]
reviewed: 2026-09-17
use_when:
  - auditar acessibilidade antes de um release
  - revisar um componente novo quanto a WCAG
  - investigar reclamação de usuário sobre leitor de tela
---

# Accessibility Audit

## Use When

- Auditar acessibilidade antes de um release
- Revisar um componente novo quanto a wcag
- Investigar reclamação de usuário sobre leitor de tela

## Installation

```bash
npx skills add claude-a11y-skill
```

## Notes

Cobre HTML, JSX/TSX, Vue, Svelte. Boa cobertura de regras automáticas; não substitui teste manual com leitor de tela.
