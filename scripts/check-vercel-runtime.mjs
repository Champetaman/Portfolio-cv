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
const allProjects = projects.flatMap((group) => [
  ...(group.personal ?? []),
  ...(group.contribution ?? []),
  ...(group.professional ?? []),
]);
assert.ok(allProjects.length, "Runtime check requires recorded project routes");

const indexablePaths = ["/", ...allProjects.map((project) => `/projects/${encodeURIComponent(project.slug)}`)];
const site = "https://www.camilooviedo.com";
const staticDir = join(root, ".vercel/output/static");
const robots = await readFile(join(staticDir, "robots.txt"), "utf8");
const sitemapURL = robots.match(/^Sitemap:\s*(\S+)/m)?.[1];
assert.equal(sitemapURL, `${site}/sitemap.xml`, "robots.txt must advertise the built sitemap");
const sitemap = await readFile(join(staticDir, new URL(sitemapURL).pathname.slice(1)), "utf8");
const sitemapURLs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.match(sitemap, /<urlset\b[^>]*xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9"/);
assert.deepEqual(sitemapURLs.sort(), indexablePaths.map((path) => site + path).sort(), "Sitemap must cover only public portfolio pages");
console.log(`Static SEO: robots.txt and sitemap cover ${indexablePaths.length} pages`);

const routes = [
  ...indexablePaths.map((path) => [path, 200]),
  [`${indexablePaths[1]}/?utm_source=seo-check`, 200],
  ["/__runtime-check-missing-page__", 404],
  ["/projects/__runtime-check-missing-project__", 404],
];
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
      const response = await app.fetch(new Request('https://www.camilooviedo.com' + path));
      assert.equal(response.status, status, path + ' returned an unexpected status');
      const html = await response.text();
      assert.match(html, /<main\b/, path + ' did not render page content');
      const robots = html.match(/<meta name="robots" content="([^"]+)"/i)?.[1];
      if (status === 200) {
        assert.ok(robots && !robots.includes('noindex'), path + ' must be indexable');
        const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
        const canonicalPath = new URL('https://www.camilooviedo.com' + path).pathname.replace(/\/+$/, '') || '/';
        assert.equal(canonical, 'https://www.camilooviedo.com' + canonicalPath, path + ' has an incorrect canonical URL');
        assert.ok(html.match(/<title>([^<]+)<\/title>/)?.[1], path + ' needs a title');
        assert.ok(html.match(/<meta name="description" content="([^"]+)"/)?.[1], path + ' needs a description');
        const json = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
        assert.ok(json, path + ' needs structured data');
        const schema = JSON.parse(json);
        const page = schema['@graph'].find((node) => node['@id'] === canonical + '#webpage');
        assert.ok(page, path + ' needs a matching page entity');
        assert.ok(schema['@graph'].some((node) => node['@id'] === page.mainEntity['@id']), path + ' has a dangling main entity');
        if (canonicalPath !== '/') {
          assert.ok(schema['@graph'].some((node) => node['@type'] === 'BreadcrumbList'), path + ' needs project breadcrumbs');
        }
      } else {
        assert.ok(robots?.includes('noindex'), path + ' error page must not be indexed');
      }
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

} finally {
  // Delete only the temporary directory created by this invocation.
  assert.equal(dirname(resolve(isolatedDir)), temporaryRoot);
  assert.ok(basename(isolatedDir).startsWith(prefix));
  await rm(isolatedDir, { recursive: true, force: true });
}
