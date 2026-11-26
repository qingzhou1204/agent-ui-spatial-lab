#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf-8");
const scripts = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)];
if (!scripts.length) {
  console.error("FAIL: No <script> found in index.html");
  process.exit(1);
}
for (let i = 0; i < scripts.length; i++) {
  new vm.Script(scripts[i][1], { filename: `index_${i}.js` });
}

const checks = [
  /contract\s*:/,
  /data_ops\s*:/,
  /launch\s*:/,
  /setMode\(['"]spatial['"]\)/,
  /AudioContext|webkitAudioContext/,
  /togglePause/,
  /applyDynamicReplan/,
  /openTakeover[\s\S]*commitTakeover/,
  /chooseBranch/
];
const failed = checks.filter(re => !re.test(html));
if (failed.length) {
  console.error("FAIL: missing prototype features:", failed.length);
  process.exit(1);
}
console.log(`[Agent UI Spatial Lab OK] bytes=${Buffer.byteLength(html, "utf-8")}, checks=${checks.length}/${checks.length}`);
