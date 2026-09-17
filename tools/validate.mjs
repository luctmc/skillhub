#!/usr/bin/env node
// Valida todas as entradas do catálogo e skills contra taxonomy.yml.
// Uso: npm run validate
import { loadAll } from "./lib/parse.mjs";
import {
  validateEntry,
  findDuplicateNames,
  findNearDuplicates,
  validatePresets,
} from "./lib/schema.mjs";

function main() {
  let registry, presets, taxonomy;
  try {
    ({ registry, presets, taxonomy } = loadAll());
  } catch (err) {
    console.error(`✖ Erro ao carregar entradas: ${err.message}`);
    process.exit(1);
  }

  const allErrors = [];
  const allWarnings = [];

  for (const item of registry) {
    const { errors, warnings } = validateEntry(item, taxonomy);
    allErrors.push(...errors);
    allWarnings.push(...warnings);
  }

  allErrors.push(...findDuplicateNames(registry));
  allWarnings.push(...findNearDuplicates(registry));
  allErrors.push(...validatePresets(presets, registry));

  console.log(`Verificando ${registry.length} skill(s) e ${presets.length} preset(s)...\n`);

  if (allWarnings.length) {
    console.log(`⚠ ${allWarnings.length} warning(s):`);
    for (const w of allWarnings) console.log(`  - ${w}`);
    console.log();
  }

  if (allErrors.length) {
    console.log(`✖ ${allErrors.length} erro(s):`);
    for (const e of allErrors) console.log(`  - ${e}`);
    console.log();
    process.exit(1);
  }

  console.log(`✔ Tudo válido.`);
}

main();
