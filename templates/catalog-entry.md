---
name: nome-da-skill                 # kebab-case, deve ser igual ao nome do arquivo
description: >                      # 1 frase, inglês, verbo no início, até 200 chars
  Short imperative description of what this skill does.
category: development               # 1 valor de taxonomy.yml → categories
tags: [tag-um, tag-dois]             # 1–6 valores de taxonomy.yml → tags (nunca repete a categoria)
status: trial                       # trial | approved | recommended | deprecated | rejected
source: community                   # anthropic | vendor | community | internal
repository: https://github.com/exemplo/skill-exemplo   # obrigatório
license: MIT                        # SPDX ou "unknown" (unknown trava status em trial/approved)
reviewed: 2026-09-17                # data ISO da última verificação humana
# --- opcionais ---
# documentation: https://...
# author: Nome ou organização
# agents: [claude-code, codex]      # compatibilidade VERIFICADA por nós, não a promessa do autor
# ref: v1.0.0                       # tag/sha avaliado
# owner: "@seu-usuario"
use_when:                           # 2–5 itens, curtos, em português
  - situação concreta em que usar esta skill
  - outra situação concreta
---

# Nome da Skill

## Use When

Descreva em prosa quando usar (e quando NÃO usar) esta skill.

## Installation

```bash
comando-de-instalacao-real
```

## Notes

Observações internas: pontos fracos observados, em que projeto foi usada, comparação com
alternativas. Este repositório é privado — seja franco aqui.
