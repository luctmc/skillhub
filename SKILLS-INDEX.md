<!-- GENERATED FILE — não edite à mão. Rode "npm run build". -->

# SkillHub — Índice de Skills

Gerado automaticamente a partir de `catalog/*.md` e `skills/*/SKILL.md`.
Não edite este arquivo diretamente — rode `npm run build`.

18 skill(s) ativa(s) · 3 recomendada(s) · 5 preset(s).

---

## ⭐ Recommended

Comece por aqui.

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| ⭐ [browser-testing](catalog/browser-testing.md) | testing | recommended | catálogo | Browser automation and end-to-end testing via the official Playwright MCP server by Microsoft. | `e2e` `browser` `frontend` `web` |
| ⭐ [caveman](catalog/caveman.md) | documentation | recommended | catálogo | Explain a codebase in compressed, low-filler language to save tokens while agents build context. | `codebase` `onboarding` `writing` |
| ⭐ [commit-workflow](catalog/commit-workflow.md) | version-control | recommended | catálogo | Streamlined commands for git commit, push and pull request creation workflows. | `planning` |


---

## 🚀 Find by Project

Stacks recomendadas por tipo de projeto. Veja `presets/` para o arquivo fonte.

#### Projeto de IA / Agentes

Stack para construir agentes, skills ou integrações de IA.


- **Core:** `caveman`, `security-scan`, `commit-workflow`
- **Optional:** `sentry-monitoring`, `sonarqube-review`

#### API / Backend

Stack para desenvolvimento e manutenção de uma API HTTP.


- **Core:** `caveman`, `api-contract-review`, `postman-api`, `security-scan`
- **Optional:** `sonarqube-review`, `sentry-monitoring`, `terraform-iac`

#### Codebase Legado

Stack para entender, estabilizar e manter um projeto legado.


- **Core:** `caveman`, `security-scan`, `sonarqube-review`
- **Optional:** `accessibility-audit`, `sentry-monitoring`

#### App Mobile

Stack para um app mobile novo ou em manutenção.


- **Core:** `caveman`, `accessibility-audit`, `commit-workflow`
- **Optional:** `motion-design`, `sentry-monitoring`

#### Aplicação Web

Stack padrão para uma aplicação web nova com frontend e backend.


- **Core:** `caveman`, `browser-testing`, `accessibility-audit`, `commit-workflow`
- **Optional:** `motion-design`, `figma-integration`, `superdesign`, `sentry-monitoring`


---

## 🗂 Find by Category

#### AI Agents

_Construir e operar agentes — prompts, skills, MCP, sub-agentes, evals, orquestração._

_Nenhuma entrada ainda._

#### Automation

_Executar trabalho repetitivo — scripts, scaffolding, migrações em lote, workflows._

_Nenhuma entrada ainda._

#### Design

_UI/UX, design systems, visual, motion, branding, protótipos._

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| ✅ [figma-integration](catalog/figma-integration.md) | design | approved | catálogo | Access Figma design files, extract component information and sync design tokens with code. | `frontend` `ux` |
| 🧪 [motion-design](catalog/motion-design.md) | design | trial | catálogo | Apply universal motion design principles — timing, easing, choreography — adapted from animation fundamentals for UI. | `motion` `animation` `frontend` `accessibility` |
| 🧪 [superdesign](catalog/superdesign.md) | design | trial | catálogo | Design or redesign frontend UI and marketing graphics using an infinite canvas workflow. | `frontend` `prototype` |

#### Development

_Escrever e refatorar código de aplicação — frameworks, linguagens, camada de dados._

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| 🧪 [stripe-integration](catalog/stripe-integration.md) | development | trial | catálogo | Assist with Stripe payments integration — API usage, webhooks, testing and common implementation patterns. | `api` `backend` |

#### DevOps

_CI/CD, infraestrutura, containers, cloud, observabilidade, release._

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| ✅ [sentry-monitoring](catalog/sentry-monitoring.md) | devops | approved | catálogo | Access Sentry error reports, analyze stack traces and correlate incidents with recent code changes. | `monitoring` `debugging` |
| 🧪 [terraform-iac](catalog/terraform-iac.md) | devops | trial | catálogo | Integrate with the Terraform ecosystem for Infrastructure as Code automation and validation. | `terraform` `cloud` |
| ✅ [vercel-deploy](catalog/vercel-deploy.md) | devops | approved | catálogo | Manage Vercel deployments, check build status and inspect runtime logs from within the agent. | `deployment` `cloud` |

#### Documentation

_Produzir documentação — READMEs, ADRs, API docs, explicação de codebase._

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| ⭐ [caveman](catalog/caveman.md) | documentation | recommended | catálogo | Explain a codebase in compressed, low-filler language to save tokens while agents build context. | `codebase` `onboarding` `writing` |

#### Productivity

_Trabalho que não é código — planejamento, escrita, comunicação, gestão de tarefas._

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| ✅ [linear-issues](catalog/linear-issues.md) | productivity | approved | catálogo | Create and manage Linear issues, update status and link work items to code changes. | `planning` |
| ✅ [notion-workspace](catalog/notion-workspace.md) | productivity | approved | catálogo | Search Notion pages, create and update documents, and manage workspace content from the agent. | `writing` |
| 🧪 [slack-workspace](catalog/slack-workspace.md) | productivity | trial | catálogo | Search Slack messages, access channels and read threads to bring team context into the agent. | `planning` |

#### Quality

_Julgar trabalho existente — code review, acessibilidade, performance, dívida técnica._

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| ✅ [accessibility-audit](catalog/accessibility-audit.md) | quality | approved | catálogo | Run comprehensive accessibility audits combining axe-core and jsx-a11y against WCAG 2.1 AA. | `accessibility` `frontend` `testing` |
| ✅ [api-contract-review](skills/api-contract-review/SKILL.md) | quality | approved | própria | Review an HTTP API contract for breaking changes, inconsistent naming, missing error cases and pagination gaps. Use when reviewing an OpenAPI spec, a pull request that adds or changes endpoints, or before publishing a versioned API.
 | `api` `backend` `code-review` |
| ✅ [sonarqube-review](catalog/sonarqube-review.md) | quality | approved | catálogo | Automatically enforce SonarQube code quality and security rules in the agent coding loop. | `code-review` `linting` |

#### Research

_Investigar e sintetizar — exploração de codebase, spikes, comparação de alternativas._

_Nenhuma entrada ainda._

#### Security

_AppSec, secrets, dependências, threat modeling, compliance._

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| ✅ [security-scan](catalog/security-scan.md) | security | approved | catálogo | Deep vulnerability scanning of your own code with findings challenged before being reported, plus verified patch suggestions. | `code-review` |

#### Testing

_Produzir e rodar testes — unitário, e2e, browser testing, fixtures, cobertura._

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| ⭐ [browser-testing](catalog/browser-testing.md) | testing | recommended | catálogo | Browser automation and end-to-end testing via the official Playwright MCP server by Microsoft. | `e2e` `browser` `frontend` `web` |
| ✅ [postman-api](catalog/postman-api.md) | testing | approved | catálogo | Full API lifecycle management: sync collections, generate clients, run test suites against an API. | `api` `backend` |

#### Version Control

_Git e GitHub — commits, branches, PRs, changelogs, releases._

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| ⭐ [commit-workflow](catalog/commit-workflow.md) | version-control | recommended | catálogo | Streamlined commands for git commit, push and pull request creation workflows. | `planning` |


---

## 🎯 Find by Purpose

#### accessibility

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| ✅ [accessibility-audit](catalog/accessibility-audit.md) | quality | approved | catálogo | Run comprehensive accessibility audits combining axe-core and jsx-a11y against WCAG 2.1 AA. | `accessibility` `frontend` `testing` |
| 🧪 [motion-design](catalog/motion-design.md) | design | trial | catálogo | Apply universal motion design principles — timing, easing, choreography — adapted from animation fundamentals for UI. | `motion` `animation` `frontend` `accessibility` |

#### animation

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| 🧪 [motion-design](catalog/motion-design.md) | design | trial | catálogo | Apply universal motion design principles — timing, easing, choreography — adapted from animation fundamentals for UI. | `motion` `animation` `frontend` `accessibility` |

#### browser

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| ⭐ [browser-testing](catalog/browser-testing.md) | testing | recommended | catálogo | Browser automation and end-to-end testing via the official Playwright MCP server by Microsoft. | `e2e` `browser` `frontend` `web` |

#### codebase

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| ⭐ [caveman](catalog/caveman.md) | documentation | recommended | catálogo | Explain a codebase in compressed, low-filler language to save tokens while agents build context. | `codebase` `onboarding` `writing` |

#### code-review

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| ✅ [api-contract-review](skills/api-contract-review/SKILL.md) | quality | approved | própria | Review an HTTP API contract for breaking changes, inconsistent naming, missing error cases and pagination gaps. Use when reviewing an OpenAPI spec, a pull request that adds or changes endpoints, or before publishing a versioned API.
 | `api` `backend` `code-review` |
| ✅ [security-scan](catalog/security-scan.md) | security | approved | catálogo | Deep vulnerability scanning of your own code with findings challenged before being reported, plus verified patch suggestions. | `code-review` |
| ✅ [sonarqube-review](catalog/sonarqube-review.md) | quality | approved | catálogo | Automatically enforce SonarQube code quality and security rules in the agent coding loop. | `code-review` `linting` |

#### debugging

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| ✅ [sentry-monitoring](catalog/sentry-monitoring.md) | devops | approved | catálogo | Access Sentry error reports, analyze stack traces and correlate incidents with recent code changes. | `monitoring` `debugging` |

#### deployment

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| ✅ [vercel-deploy](catalog/vercel-deploy.md) | devops | approved | catálogo | Manage Vercel deployments, check build status and inspect runtime logs from within the agent. | `deployment` `cloud` |

#### e2e

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| ⭐ [browser-testing](catalog/browser-testing.md) | testing | recommended | catálogo | Browser automation and end-to-end testing via the official Playwright MCP server by Microsoft. | `e2e` `browser` `frontend` `web` |

#### linting

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| ✅ [sonarqube-review](catalog/sonarqube-review.md) | quality | approved | catálogo | Automatically enforce SonarQube code quality and security rules in the agent coding loop. | `code-review` `linting` |

#### monitoring

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| ✅ [sentry-monitoring](catalog/sentry-monitoring.md) | devops | approved | catálogo | Access Sentry error reports, analyze stack traces and correlate incidents with recent code changes. | `monitoring` `debugging` |

#### motion

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| 🧪 [motion-design](catalog/motion-design.md) | design | trial | catálogo | Apply universal motion design principles — timing, easing, choreography — adapted from animation fundamentals for UI. | `motion` `animation` `frontend` `accessibility` |

#### onboarding

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| ⭐ [caveman](catalog/caveman.md) | documentation | recommended | catálogo | Explain a codebase in compressed, low-filler language to save tokens while agents build context. | `codebase` `onboarding` `writing` |

#### planning

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| ⭐ [commit-workflow](catalog/commit-workflow.md) | version-control | recommended | catálogo | Streamlined commands for git commit, push and pull request creation workflows. | `planning` |
| ✅ [linear-issues](catalog/linear-issues.md) | productivity | approved | catálogo | Create and manage Linear issues, update status and link work items to code changes. | `planning` |
| 🧪 [slack-workspace](catalog/slack-workspace.md) | productivity | trial | catálogo | Search Slack messages, access channels and read threads to bring team context into the agent. | `planning` |

#### testing

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| ✅ [accessibility-audit](catalog/accessibility-audit.md) | quality | approved | catálogo | Run comprehensive accessibility audits combining axe-core and jsx-a11y against WCAG 2.1 AA. | `accessibility` `frontend` `testing` |

#### ux

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| ✅ [figma-integration](catalog/figma-integration.md) | design | approved | catálogo | Access Figma design files, extract component information and sync design tokens with code. | `frontend` `ux` |

#### writing

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| ⭐ [caveman](catalog/caveman.md) | documentation | recommended | catálogo | Explain a codebase in compressed, low-filler language to save tokens while agents build context. | `codebase` `onboarding` `writing` |
| ✅ [notion-workspace](catalog/notion-workspace.md) | productivity | approved | catálogo | Search Notion pages, create and update documents, and manage workspace content from the agent. | `writing` |


---

## 🧰 Find by Technology

#### terraform

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| 🧪 [terraform-iac](catalog/terraform-iac.md) | devops | trial | catálogo | Integrate with the Terraform ecosystem for Infrastructure as Code automation and validation. | `terraform` `cloud` |


---

## 🔤 All Skills (A–Z)

| Skill | Categoria | Status | Tipo | Descrição | Tags |
|---|---|---|---|---|---|
| ✅ [accessibility-audit](catalog/accessibility-audit.md) | quality | approved | catálogo | Run comprehensive accessibility audits combining axe-core and jsx-a11y against WCAG 2.1 AA. | `accessibility` `frontend` `testing` |
| ✅ [api-contract-review](skills/api-contract-review/SKILL.md) | quality | approved | própria | Review an HTTP API contract for breaking changes, inconsistent naming, missing error cases and pagination gaps. Use when reviewing an OpenAPI spec, a pull request that adds or changes endpoints, or before publishing a versioned API.
 | `api` `backend` `code-review` |
| ⭐ [browser-testing](catalog/browser-testing.md) | testing | recommended | catálogo | Browser automation and end-to-end testing via the official Playwright MCP server by Microsoft. | `e2e` `browser` `frontend` `web` |
| ⭐ [caveman](catalog/caveman.md) | documentation | recommended | catálogo | Explain a codebase in compressed, low-filler language to save tokens while agents build context. | `codebase` `onboarding` `writing` |
| ⭐ [commit-workflow](catalog/commit-workflow.md) | version-control | recommended | catálogo | Streamlined commands for git commit, push and pull request creation workflows. | `planning` |
| ✅ [figma-integration](catalog/figma-integration.md) | design | approved | catálogo | Access Figma design files, extract component information and sync design tokens with code. | `frontend` `ux` |
| ✅ [linear-issues](catalog/linear-issues.md) | productivity | approved | catálogo | Create and manage Linear issues, update status and link work items to code changes. | `planning` |
| 🧪 [motion-design](catalog/motion-design.md) | design | trial | catálogo | Apply universal motion design principles — timing, easing, choreography — adapted from animation fundamentals for UI. | `motion` `animation` `frontend` `accessibility` |
| ✅ [notion-workspace](catalog/notion-workspace.md) | productivity | approved | catálogo | Search Notion pages, create and update documents, and manage workspace content from the agent. | `writing` |
| ✅ [postman-api](catalog/postman-api.md) | testing | approved | catálogo | Full API lifecycle management: sync collections, generate clients, run test suites against an API. | `api` `backend` |
| ✅ [security-scan](catalog/security-scan.md) | security | approved | catálogo | Deep vulnerability scanning of your own code with findings challenged before being reported, plus verified patch suggestions. | `code-review` |
| ✅ [sentry-monitoring](catalog/sentry-monitoring.md) | devops | approved | catálogo | Access Sentry error reports, analyze stack traces and correlate incidents with recent code changes. | `monitoring` `debugging` |
| 🧪 [slack-workspace](catalog/slack-workspace.md) | productivity | trial | catálogo | Search Slack messages, access channels and read threads to bring team context into the agent. | `planning` |
| ✅ [sonarqube-review](catalog/sonarqube-review.md) | quality | approved | catálogo | Automatically enforce SonarQube code quality and security rules in the agent coding loop. | `code-review` `linting` |
| 🧪 [stripe-integration](catalog/stripe-integration.md) | development | trial | catálogo | Assist with Stripe payments integration — API usage, webhooks, testing and common implementation patterns. | `api` `backend` |
| 🧪 [superdesign](catalog/superdesign.md) | design | trial | catálogo | Design or redesign frontend UI and marketing graphics using an infinite canvas workflow. | `frontend` `prototype` |
| 🧪 [terraform-iac](catalog/terraform-iac.md) | devops | trial | catálogo | Integrate with the Terraform ecosystem for Infrastructure as Code automation and validation. | `terraform` `cloud` |
| ✅ [vercel-deploy](catalog/vercel-deploy.md) | devops | approved | catálogo | Manage Vercel deployments, check build status and inspect runtime logs from within the agent. | `deployment` `cloud` |


---

## 🗑 Deprecated & Rejected

_Nenhuma entrada ainda._

