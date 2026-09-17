# Catálogo de Breaking Changes

Mudanças que quebram clientes existentes de uma API, mesmo quando parecem pequenas:

- Remover ou renomear um campo de resposta.
- Alterar o tipo de um campo (ex: string → number).
- Tornar um parâmetro antes opcional em obrigatório.
- Mudar o código de status HTTP de sucesso ou erro de um endpoint.
- Alterar o formato de paginação (ex: offset/limit → cursor) sem período de transição.
- Mudar a ordem padrão de um recurso listado, se clientes dependem dela implicitamente.
- Apertar validação de um campo de entrada que antes aceitava valores hoje rejeitados.
- Remover um endpoint sem depreciação prévia.

Mudanças que normalmente **não** quebram clientes (safe by default):

- Adicionar um campo novo opcional na resposta.
- Adicionar um endpoint novo.
- Adicionar um parâmetro de entrada opcional.
- Relaxar uma validação (aceitar mais do que antes).
