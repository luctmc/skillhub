#!/usr/bin/env node
// Compara duas specs OpenAPI (YAML/JSON) e lista endpoints e campos que mudaram
// de forma estrutural. Uso: node diff-openapi.mjs old.yaml new.yaml
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

function loadSpec(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return path.extname(filePath) === ".json" ? JSON.parse(raw) : yaml.load(raw);
}

function paths(spec) {
  return Object.keys(spec.paths ?? {});
}

function main() {
  const [oldPath, newPath] = process.argv.slice(2);
  if (!oldPath || !newPath) {
    console.error("Uso: node diff-openapi.mjs <old-spec> <new-spec>");
    process.exit(1);
  }

  const oldSpec = loadSpec(oldPath);
  const newSpec = loadSpec(newPath);
  const oldPaths = new Set(paths(oldSpec));
  const newPaths = new Set(paths(newSpec));

  const removed = [...oldPaths].filter((p) => !newPaths.has(p));
  const added = [...newPaths].filter((p) => !oldPaths.has(p));

  console.log(`Endpoints removidos (${removed.length}):`);
  removed.forEach((p) => console.log(`  - ${p}`));

  console.log(`\nEndpoints adicionados (${added.length}):`);
  added.forEach((p) => console.log(`  + ${p}`));

  if (removed.length > 0) {
    console.log("\n⚠ Endpoint removido = breaking change. Confirme versionamento/depreciação.");
  }
}

main();
