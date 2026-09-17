export default function sitemap() {
  const baseUrl = "https://www.sksyntax.com";

  const routes = [
   "",

    // Main Pages
    "/services",
    "/projects",
    "/about",
    "/contact",

    // Services
    "/services/web-development",
    "/services/seo",
    "/services/paid-advertising",
    "/services/meta-ads",
    "/services/google-ads",

    // Blog
    "/blog",
    "/blog/how-to-build-a-professional-business-website",
    "/blog/how-seo-helps-businesses-get-found-on-google",
    "/blog/how-meta-ads-help-businesses-generate-leads",
    "/blog/how-google-ads-help-businesses-reach-high-intent-customers",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}