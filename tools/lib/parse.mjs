// Lê e parseia todas as entradas de skill do repositório: catalog/*.md e
// skills/*/SKILL.md. Retorna uma lista plana de objetos normalizados, cada
// um com { type, path, frontmatter, body }.
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

const ROOT = path.resolve(import.meta.dirname, "..", "..");

function splitFrontMatter(raw, filePath) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    throw new Error(`Sem front matter YAML válido: ${filePath}`);
  }
  const [, fmRaw, body] = match;
  let frontmatter;
  try {
    frontmatter = yaml.load(fmRaw) ?? {};
  } catch (err) {
    throw new Error(`YAML inválido em ${filePath}: ${err.message}`);
  }
  return { frontmatter, body: body.trim() };
}

function readCatalogEntries() {
  const dir = path.join(ROOT, "catalog");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const filePath = path.join(dir, f);
      const raw = fs.readFileSync(filePath, "utf8");
      const { frontmatter, body } = splitFrontMatter(raw, filePath);
      return {
        type: "catalog",
        file: f,
        relPath: path.relative(ROOT, filePath),
        frontmatter,
        body,
      };
    });
}

function readOwnSkills() {
  const dir = path.join(ROOT, "skills");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => {
      const skillFile = path.join(dir, d.name, "SKILL.md");
      if (!fs.existsSync(skillFile)) {
        throw new Error(`skills/${d.name}/ não tem SKILL.md`);
      }
      const raw = fs.readFileSync(skillFile, "utf8");
      const { frontmatter, body } = splitFrontMatter(raw, skillFile);
      return {
        type: "skill",
        file: d.name,
        relPath: path.relative(ROOT, skillFile),
        frontmatter,
        body,
      };
    });
}

function readPresets() {
  const dir = path.join(ROOT, "presets");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".yml") || f.endsWith(".yaml"))
    .map((f) => {
      const filePath = path.join(dir, f);
      const raw = fs.readFileSync(filePath, "utf8");
      let data;
      try {
        data = yaml.load(raw) ?? {};
      } catch (err) {
        throw new Error(`YAML inválido em ${filePath}: ${err.message}`);
      }
      return { file: f, relPath: path.relative(ROOT, filePath), data };
    });
}

function readTaxonomy() {
  const filePath = path.join(ROOT, "taxonomy.yml");
  const raw = fs.readFileSync(filePath, "utf8");
  return yaml.load(raw);
}

/** Normaliza uma entrada (catalog ou skill) para um "registry item" plano. */
// js-yaml auto-parses an unquoted "YYYY-MM-DD" scalar into a JS Date. We want
// the plain ISO string back regardless of whether the author quoted it or not.
function toIsoDateString(value) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return value;
}

function normalizeEntry(entry) {
  const fm = entry.frontmatter;
  const isSkill = entry.type === "skill";
  const meta = isSkill ? fm.metadata ?? {} : fm;

  return {
    id: fm.name,
    type: entry.type,
    path: entry.relPath,
    name: fm.name,
    description: fm.description,
    category: meta.category,
    tags: meta.tags ?? [],
    status: meta.status,
    source: meta.source,
    repository: meta.repository ?? fm.repository,
    documentation: meta.documentation ?? fm.documentation,
    license: meta.license ?? fm.license,
    agents: meta.agents ?? [],
    author: meta.author ?? fm.author,
    ref: meta.ref ?? fm.ref,
    owner: meta.owner,
    reviewed: toIsoDateString(meta.reviewed),
    superseded_by: meta.superseded_by,
    reason: meta.reason,
    use_when: meta.use_when ?? [],
    derived_from: meta.derived_from,
    raw: entry,
  };
}

export function loadAll() {
  const catalogEntries = readCatalogEntries();
  const skillEntries = readOwnSkills();
  const presets = readPresets();
  const taxonomy = readTaxonomy();
  const registry = [...catalogEntries, ...skillEntries].map(normalizeEntry);
  return { registry, presets, taxonomy, ROOT };
}

export { ROOT };
