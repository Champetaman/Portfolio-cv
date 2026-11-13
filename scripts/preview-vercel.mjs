import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";

// Serve the built CDN files and packaged error handler, without the dev server.
const root = fileURLToPath(new URL("../.vercel/output/static/", import.meta.url));
const { default: app } = await import("../.vercel/output/functions/_render.func/dist/server/entry.mjs");
const types = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8", ".json": "application/json",
  ".xml": "application/xml", ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2", ".webp": "image/webp", ".png": "image/png",
  ".ico": "image/x-icon", ".svg": "image/svg+xml",
};

createServer(async (request, response) => {
  try {
    const url = new URL(request.url, "http://127.0.0.1:4321");
    let path = resolve(root, `.${decodeURIComponent(url.pathname)}`);
    if (!path.startsWith(resolve(root) + sep) && path !== resolve(root)) {
      response.writeHead(403).end();
      return;
    }
    let body;
    try {
      if ((await stat(path)).isDirectory()) path = resolve(path, "index.html");
      body = await readFile(path);
    } catch (error) {
      if (!["ENOENT", "ENOTDIR"].includes(error.code)) throw error;
      const result = await app.fetch(new Request(url));
      response.writeHead(result.status, Object.fromEntries(result.headers));
      response.end(request.method === "HEAD" ? undefined : Buffer.from(await result.arrayBuffer()));
      return;
    }
    const headers = {
      "Content-Type": types[extname(path)] ?? "application/octet-stream",
      "Cache-Control": url.pathname.startsWith("/_astro/") ? "public, max-age=31536000, immutable" : "public, max-age=0, must-revalidate",
      "Vary": "Accept-Encoding",
    };
    if (/\bgzip\b/.test(request.headers["accept-encoding"] ?? "")) {
      body = gzipSync(body);
      headers["Content-Encoding"] = "gzip";
    }
    response.writeHead(200, { ...headers, "Content-Length": body.length });
    response.end(request.method === "HEAD" ? undefined : body);
  } catch (error) {
    console.error(error);
    response.writeHead(500).end("Preview failed");
  }
}).listen(4321, "127.0.0.1", () => console.log("Built Vercel preview: http://127.0.0.1:4321"));
