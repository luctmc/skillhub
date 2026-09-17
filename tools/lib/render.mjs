// Renderiza SKILLS-INDEX.md e registry.json a partir do registry normalizado.
const BANNER = `<!-- GENERATED FILE — não edite à mão. Rode "npm run build". -->\n`;

function statusEmoji(status) {
  return { recommended: "⭐", approved: "✅", trial: "🧪", deprecated: "🗑", rejected: "❌" }[status] ?? "";
}

function typeLabel(type) {
  return type === "skill" ? "própria" : "catálogo";
}

function row(item) {
  const tags = (item.tags ?? []).map((t) => `\`${t}\``).join(" ");
  const link = `[${item.name}](${item.path})`;
  return `| ${statusEmoji(item.status)} ${link} | ${item.category} | ${item.status} | ${typeLabel(item.type)} | ${item.description ?? ""} | ${tags} |`;
}

const TABLE_HEADER = `| Skill | Categoria | Status | Tipo | Descrição | Tags |\n|---|---|---|---|---|---|`;

function section(title, items) {
  if (items.length === 0) return `### ${title}\n\n_Nenhuma entrada ainda._\n`;
  return `### ${title}\n\n${TABLE_HEADER}\n${items.map(row).join("\n")}\n`;
}

function byCategory(registry, taxonomy) {
  const active = registry.filter((i) => !["deprecated", "rejected"].includes(i.status));
  return taxonomy.categories
    .map((cat) => {
      const items = active.filter((i) => i.category === cat.id).sort((a, b) => a.name.localeCompare(b.name));
      return `#### ${cat.label}\n\n_${cat.description}_\n\n${section("", items).replace(/^### \n\n/, "")}`;
    })
    .join("\n");
}

function byTagFacet(registry, taxonomy, facet) {
  const active = registry.filter((i) => !["deprecated", "rejected"].includes(i.status));
  const tags = taxonomy.tags[facet] ?? [];
  const parts = [];
  for (const tag of tags) {
    const items = active.filter((i) => (i.tags ?? []).includes(tag)).sort((a, b) => a.name.localeCompare(b.name));
    if (items.length === 0) continue;
    parts.push(`#### ${tag}\n\n${section("", items).replace(/^### \n\n/, "")}`);
  }
  return parts.length ? parts.join("\n") : "_Nenhuma entrada ainda._\n";
}

function presetsSection(presets, registry) {
  if (presets.length === 0) return "_Nenhum preset ainda. Veja `templates/preset.yml`._\n";
  const byName = new Map(registry.map((i) => [i.name, i]));
  return presets
    .map((p) => {
      const d = p.data;
      const core = (d.skills?.core ?? [])
        .map((n) => `\`${n}\`` + (byName.has(n) ? "" : " ⚠️ não encontrada"))
        .join(", ");
      const optional = (d.skills?.optional ?? [])
        .map((n) => `\`${n}\`` + (byName.has(n) ? "" : " ⚠️ não encontrada"))
        .join(", ");
      return `#### ${d.title ?? d.name}\n\n${d.description ?? ""}\n\n- **Core:** ${core || "—"}\n- **Optional:** ${optional || "—"}\n`;
    })
    .join("\n");
}

export function renderIndex({ registry, presets, taxonomy }) {
  const active = registry.filter((i) => !["deprecated", "rejected"].includes(i.status));
  const recommended = active.filter((i) => i.status === "recommended").sort((a, b) => a.name.localeCompare(b.name));
  const deprecated = registry.filter((i) => ["deprecated", "rejected"].includes(i.status)).sort((a, b) => a.name.localeCompare(b.name));
  const allSorted = [...active].sort((a, b) => a.name.localeCompare(b.name));

  return `${BANNER}
# SkillHub — Índice de Skills

Gerado automaticamente a partir de \`catalog/*.md\` e \`skills/*/SKILL.md\`.
Não edite este arquivo diretamente — rode \`npm run build\`.

${active.length} skill(s) ativa(s) · ${recommended.length} recomendada(s) · ${presets.length} preset(s).

---

## ⭐ Recommended

Comece por aqui.

${section("", recommended).replace(/^### \n\n/, "")}

---

## 🚀 Find by Project

Stacks recomendadas por tipo de projeto. Veja \`presets/\` para o arquivo fonte.

${presetsSection(presets, registry)}

---

## 🗂 Find by Category

${byCategory(registry, taxonomy)}

---

## 🎯 Find by Purpose

${byTagFacet(registry, taxonomy, "activity")}

---

## 🧰 Find by Technology

${byTagFacet(registry, taxonomy, "tech")}

---

## 🔤 All Skills (A–Z)

${section("", allSorted).replace(/^### \n\n/, "")}

---

## 🗑 Deprecated & Rejected

${section("", deprecated).replace(/^### \n\n/, "")}
`;
}

export function renderRegistryJson({ registry }) {
  const clean = registry.map(({ raw, ...rest }) => rest);
  return JSON.stringify(clean, null, 2) + "\n";
}
