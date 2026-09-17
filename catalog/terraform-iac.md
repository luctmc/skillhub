---
name: terraform-iac
description: "Integrate with the Terraform ecosystem for Infrastructure as Code automation and validation."
category: devops
tags: [terraform, cloud]
status: trial
source: vendor
repository: https://github.com/anthropics/claude-plugins-public/tree/main/external_plugins/terraform
license: MPL-2.0
agents: [claude-code]
reviewed: 2026-09-17
use_when:
  - escrever ou revisar módulos Terraform
  - validar plano antes de aplicar infraestrutura
  - gerar documentação de um módulo existente
---

# Terraform Iac

## Use When

- Escrever ou revisar módulos terraform
- Validar plano antes de aplicar infraestrutura
- Gerar documentação de um módulo existente

## Installation

```bash
/plugin install terraform@claude-plugins-official
```

## Notes

Mantido pela HashiCorp. Ainda pouco usado internamente — avaliar em projeto de infra.
