import assert from "node:assert/strict";
import { cp, mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

// A successful Astro build alone misses function startup failures such as:
// https://github.com/withastro/astro/issues/18328 (@astrojs/vercel 11.0.13).
// Copy the packaged function outside the project so missing dependencies cannot
// silently resolve from the development installation's node_modules.
const root = fileURLToPath(new URL("../", import.meta.url));
const functionDir = join(root, ".vercel/output/functions/_render.func");
const config = JSON.parse(await readFile(join(functionDir, ".vc-config.json"), "utf8"));
const projects = JSON.parse(await readFile(join(root, "data/projects.json"), "utf8"));
const project = projects.flatMap((group) => group.personal ?? []).find((item) => item.slug);
assert.ok(project, "Runtime check requires a recorded personal project route");

const routes = [["/", 200], [`/projects/${project.slug}`, 200], ["/__runtime-check-missing-page__", 404]];
const temporaryRoot = resolve(tmpdir());
const prefix = "portfolio-cv-vercel-runtime-";
const isolatedDir = await mkdtemp(join(temporaryRoot, prefix));

try {
  await cp(functionDir, isolatedDir, { recursive: true, dereference: true });
  const handler = pathToFileURL(join(isolatedDir, config.handler)).href;
  const probe = String.raw`
    import assert from 'node:assert/strict';
    const app = (await import(${JSON.stringify(handler)})).default;
    for (const [path, status] of ${JSON.stringify(routes)}) {
      const response = await app.fetch(new Request('https://camilooviedo.com' + path));
      assert.equal(response.status, status, path + ' returned an unexpected status');
      assert.match(await response.text(), /<main\b/, path + ' did not render page content');
      console.log('Packaged function: ' + status + ' ' + path);
    }
  `;
  const result = spawnSync(process.execPath, ["--input-type=module", "--eval", probe], {
    cwd: isolatedDir,
    encoding: "utf8",
    timeout: 30_000,
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.error) throw result.error;
  assert.equal(result.status, 0, "Packaged Vercel function failed its isolated runtime check");

  for (const route of ["career-ops", "career-ops/privacy", "career-ops/terms-of-service"]) {
    const html = await readFile(join(root, ".vercel/output/static", route, "index.html"), "utf8");
    assert.match(html, /id="main-content"/, `Missing static page content for /${route}`);
    console.log(`Static page: /${route}`);
  }
} finally {
  // Delete only the temporary directory created by this invocation.
  assert.equal(dirname(resolve(isolatedDir)), temporaryRoot);
  assert.ok(basename(isolatedDir).startsWith(prefix));
  await rm(isolatedDir, { recursive: true, force: true });
}
