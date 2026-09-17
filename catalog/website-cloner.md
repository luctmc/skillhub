---
name: website-cloner
description: "Reverse-engineer any website into a clean Next.js codebase by extracting design tokens, component specs and assets, then rebuilding sections with parallel builder agents."
category: automation
tags: [nextjs, frontend, web, browser]
status: trial
source: internal
repository: https://github.com/luctmc/skill-website-cloner
documentation: https://github.com/luctmc/skill-website-cloner#readme
license: MIT
reviewed: 2026-09-17
use_when:
  - clonar visualmente um site existente para um projeto Next.js
  - prototipar rápido a partir de um site de referência
  - extrair design tokens, assets e specs de componentes de um site
---

# Website Cloner

## Use When

- Clonar visualmente um site existente para um projeto Next.js
- Prototipar rápido a partir de um site de referência
- Extrair design tokens, assets e specs de componentes de um site

## Installation

```bash
git clone https://github.com/luctmc/skill-website-cloner.git my-clone
cd my-clone && npm install
claude --chrome
# dentro do agente:
/clone-website <url-do-site>
```

## Notes

Template de projeto completo (Next.js 16 + shadcn/ui + Tailwind v4), não uma skill solta via npx — o comando /clone-website vive dentro do repo clonado. Conteúdo do README é próximo ao template público ai-website-cloner-template; ainda não testamos internamente, avaliar em um projeto real antes de promover status.
