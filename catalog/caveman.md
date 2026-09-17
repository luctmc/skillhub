---
name: caveman
description: "Explain a codebase in compressed, low-filler language to save tokens while agents build context."
category: documentation
tags: [codebase, onboarding, writing]
status: recommended
source: community
repository: https://github.com/JuliusBrussee/caveman
documentation: https://docs.caveman.so/docs/quickstart
license: MIT
agents: [claude-code, codex, gemini-cli]
reviewed: 2026-09-17
use_when:
  - entender uma codebase desconhecida rapidamente
  - reduzir tokens gastos em respostas verbosas
  - preparar contexto antes de refatorar
---

# Caveman

## Use When

- Entender uma codebase desconhecida rapidamente
- Reduzir tokens gastos em respostas verbosas
- Preparar contexto antes de refatorar

## Installation

```bash
npx skills add JuliusBrussee/caveman
```

## Notes

Boa para onboarding e sessões longas. Reduz verbosidade do agente, não é uma skill de análise profunda de arquitetura.
