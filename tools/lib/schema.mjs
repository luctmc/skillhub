// Regras de validação do schema de metadata. Cada função retorna uma lista
// de strings de erro/warning; lista vazia = passou.
const NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const STALE_DAYS = 180;

function isUrl(value) {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Valida um único item do registry contra o taxonomy.
 * @returns {{errors: string[], warnings: string[]}}
 */
export function validateEntry(item, taxonomy) {
  const errors = [];
  const warnings = [];
  const where = item.path;
  const categoryIds = taxonomy.categories.map((c) => c.id);
  const allTags = Object.values(taxonomy.tags).flat();
  const statusIds = taxonomy.status.map((s) => s.id);
  const sourceIds = taxonomy.source;
  const agentIds = taxonomy.agents;
  const synonyms = taxonomy.tag_synonyms ?? {};

  // --- campos obrigatórios em todo tipo ---
  if (!item.name) errors.push(`${where}: campo "name" obrigatório ausente`);
  else if (!NAME_RE.test(item.name))
    errors.push(`${where}: "name" deve ser kebab-case (ex: browser-testing), recebeu "${item.name}"`);

  if (item.type === "catalog") {
    const expectedName = item.raw.file.replace(/\.md$/, "");
    if (item.name && item.name !== expectedName) {
      errors.push(
        `${where}: "name: ${item.name}" não bate com o nome do arquivo "${item.raw.file}" (esperado "${expectedName}")`
      );
    }
  } else {
    if (item.name && item.name !== item.raw.file) {
      errors.push(
        `${where}: "name: ${item.name}" não bate com o diretório "${item.raw.file}"`
      );
    }
  }

  // Skills próprias escrevem a description para o AGENTE decidir quando acionar (inclui
  // "use when" embutido, como a spec de Agent Skills recomenda), então o limite é maior do
  // que o de uma entrada de catálogo, que é lida por um humano varrendo o índice.
  const descLimit = item.type === "skill" ? 500 : 200;
  if (!item.description) errors.push(`${where}: campo "description" obrigatório ausente`);
  else if (item.description.length > descLimit)
    errors.push(`${where}: "description" tem ${item.description.length} chars, máximo ${descLimit}`);

  if (!item.category) errors.push(`${where}: campo "category" obrigatório ausente`);
  else if (!categoryIds.includes(item.category))
    errors.push(`${where}: category "${item.category}" não existe em taxonomy.yml (válidas: ${categoryIds.join(", ")})`);

  if (!item.tags || item.tags.length === 0) errors.push(`${where}: campo "tags" obrigatório ausente ou vazio`);
  else {
    if (item.tags.length > 6) errors.push(`${where}: ${item.tags.length} tags, máximo é 6`);
    for (const tag of item.tags) {
      if (synonyms[tag]) {
        errors.push(`${where}: tag "${tag}" é sinônimo proibido — use "${synonyms[tag]}"`);
      } else if (!allTags.includes(tag)) {
        errors.push(`${where}: tag "${tag}" não existe em taxonomy.yml`);
      }
      if (tag === item.category) {
        errors.push(`${where}: tag "${tag}" repete a categoria — remova`);
      }
    }
  }

  if (!item.status) errors.push(`${where}: campo "status" obrigatório ausente`);
  else if (!statusIds.includes(item.status))
    errors.push(`${where}: status "${item.status}" inválido (válidos: ${statusIds.join(", ")})`);

  if (!item.source) errors.push(`${where}: campo "source" obrigatório ausente`);
  else if (!sourceIds.includes(item.source))
    errors.push(`${where}: source "${item.source}" inválido (válidos: ${sourceIds.join(", ")})`);

  if (!item.reviewed) errors.push(`${where}: campo "reviewed" obrigatório ausente`);
  else if (!ISO_DATE_RE.test(item.reviewed))
    errors.push(`${where}: "reviewed" deve ser data ISO (YYYY-MM-DD), recebeu "${item.reviewed}"`);
  else {
    const days = (Date.now() - new Date(item.reviewed).getTime()) / 86400000;
    if (days > STALE_DAYS && ["approved", "recommended"].includes(item.status)) {
      warnings.push(`${where}: "reviewed" tem ${Math.floor(days)} dias (>${STALE_DAYS}), considere revisar`);
    }
  }

  if (!item.use_when || item.use_when.length === 0)
    errors.push(`${where}: campo "use_when" obrigatório ausente ou vazio`);
  else if (item.use_when.length > 5)
    errors.push(`${where}: "use_when" tem ${item.use_when.length} itens, máximo 5`);

  // --- condicionais de status ---
  if (item.status === "deprecated" && !item.superseded_by)
    errors.push(`${where}: status "deprecated" exige campo "superseded_by"`);
  if (item.status === "rejected" && !item.reason)
    errors.push(`${where}: status "rejected" exige campo "reason"`);

  // --- obrigatórios só em catalog ---
  if (item.type === "catalog") {
    if (!item.repository) errors.push(`${where}: campo "repository" obrigatório em entradas de catálogo`);
    else if (!isUrl(item.repository)) errors.push(`${where}: "repository" não é uma URL válida`);

    if (!item.license) errors.push(`${where}: campo "license" obrigatório em entradas de catálogo`);
    else if (item.license === "unknown" && item.status === "recommended")
      errors.push(`${where}: license "unknown" não pode ter status "recommended"`);
  }

  if (item.documentation && !isUrl(item.documentation))
    errors.push(`${where}: "documentation" não é uma URL válida`);

  // --- agents ---
  for (const agent of item.agents ?? []) {
    if (!agentIds.includes(agent)) errors.push(`${where}: agent "${agent}" não existe em taxonomy.yml`);
  }

  return { errors, warnings };
}

/** Detecta duplicatas exatas de "name" entre todas as entradas do registry. */
export function findDuplicateNames(registry) {
  const seen = new Map();
  const errors = [];
  for (const item of registry) {
    if (!item.name) continue;
    if (seen.has(item.name)) {
      errors.push(
        `Nome duplicado "${item.name}": ${seen.get(item.name)} e ${item.path}`
      );
    } else {
      seen.set(item.name, item.path);
    }
  }
  return errors;
}

/** Levenshtein simples para detectar near-duplicates de nome. */
function levenshtein(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

/** Sinaliza pares de nomes muito parecidos (possível duplicata semântica). */
export function findNearDuplicates(registry) {
  const warnings = [];
  const names = registry.filter((i) => i.name).map((i) => ({ name: i.name, path: i.path }));
  for (let i = 0; i < names.length; i++) {
    for (let j = i + 1; j < names.length; j++) {
      const a = names[i];
      const b = names[j];
      if (a.name === b.name) continue; // já é erro de duplicata exata
      const dist = levenshtein(a.name, b.name);
      const threshold = Math.max(2, Math.floor(Math.min(a.name.length, b.name.length) * 0.25));
      if (dist <= threshold) {
        warnings.push(`Nomes parecidos: "${a.name}" (${a.path}) vs "${b.name}" (${b.path}) — confira se não é duplicata`);
      }
    }
  }
  return warnings;
}

/** Valida presets: skills referenciadas existem e não estão deprecated/rejected. */
export function validatePresets(presets, registry) {
  const errors = [];
  const byName = new Map(registry.map((i) => [i.name, i]));
  for (const preset of presets) {
    const { data, relPath } = preset;
    if (!data.name) errors.push(`${relPath}: campo "name" obrigatório ausente`);
    if (!data.owner) errors.push(`${relPath}: campo "owner" obrigatório ausente`);
    const skills = data.skills ?? {};
    const allRefs = [...(skills.core ?? []), ...(skills.optional ?? [])];
    if (allRefs.length < 3)
      errors.push(`${relPath}: preset precisa referenciar ao menos 3 skills, tem ${allRefs.length}`);
    for (const ref of allRefs) {
      const found = byName.get(ref);
      if (!found) {
        errors.push(`${relPath}: skill "${ref}" referenciada não existe no registry`);
      } else if (["deprecated", "rejected"].includes(found.status)) {
        errors.push(`${relPath}: skill "${ref}" está "${found.status}", não pode estar em um preset`);
      }
    }
  }
  return errors;
}
