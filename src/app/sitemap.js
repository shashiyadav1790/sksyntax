export default function sitemap() {
  const baseUrl = "https://www.sksyntax.com";

  const routes = [
    "",
    "/services",
    "/services/web-development",
    "/services/seo",
    "/services/paid-advertising",
    "/services/meta-ads",
    "/services/google-ads",
    "/projects",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}