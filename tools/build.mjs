#!/usr/bin/env node
// Gera SKILLS-INDEX.md e registry.json a partir de catalog/ e skills/.
// Uso: npm run build
import fs from "node:fs";
import path from "node:path";
import { loadAll, ROOT } from "./lib/parse.mjs";
import { renderIndex, renderRegistryJson } from "./lib/render.mjs";

function main() {
  let data;
  try {
    data = loadAll();
  } catch (err) {
    console.error(`✖ Erro ao carregar entradas: ${err.message}`);
    process.exit(1);
  }

  const indexPath = path.join(ROOT, "SKILLS-INDEX.md");
  const registryPath = path.join(ROOT, "registry.json");

  fs.writeFileSync(indexPath, renderIndex(data));
  fs.writeFileSync(registryPath, renderRegistryJson(data));

  console.log(`✔ SKILLS-INDEX.md e registry.json gerados (${data.registry.length} skill(s), ${data.presets.length} preset(s)).`);
}

main();
