import type { APIRoute } from "astro";
import projectsData from "../../data/projects.json";

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const projects = projectsData.flatMap((group) => [
    ...(group.personal ?? []),
    ...(group.contribution ?? []),
    ...(group.professional ?? []),
  ]);
  const paths = new Set(["/", ...projects.map((project) => `/projects/${encodeURIComponent(project.slug)}`)]);
  const urls = [...paths].map((path) => `<url><loc>${new URL(path, site).href}</loc></url>`).join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
