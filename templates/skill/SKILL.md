---
name: nome-da-skill                 # kebab-case, deve ser igual ao nome do diretório
description: >                      # obrigatório pela spec de Agent Skills — é isto que o
  Imperative description written for the AGENT to decide when to trigger this skill.   # agente lê para decidir acionar a skill. Inclua "use when" nela mesma.
  Use when X happens, when the user asks for Y, or before Z.
metadata:
  category: development             # 1 valor de taxonomy.yml → categories
  tags: [tag-um, tag-dois]           # 1–6 valores de taxonomy.yml → tags
  status: trial                     # trial | approved | recommended | deprecated | rejected
  source: internal                  # quase sempre "internal" para skills próprias
  reviewed: 2026-09-17               # data ISO da última verificação humana
  owner: "@seu-usuario"
  # agents: [claude-code, universal] # preencha só com o que foi testado de fato
  use_when:                         # 2–5 itens, curtos, em português — para o ÍNDICE (humano)
    - situação concreta em que usar esta skill
    - outra situação concreta
---

# Nome da Skill

Descreva o objetivo em 1–2 frases.

## Checklist / Passos

1. ...
2. ...

## References

- `references/algum-arquivo.md`

## Scripts

- `scripts/algum-script.mjs` — o que ele faz
