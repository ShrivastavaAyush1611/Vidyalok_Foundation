// app/sitemap.js
export default async function sitemap() {
  const baseUrl = "https://vidyalok.org";

  // Define static routes with specific configurations
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly", // Home page updates more frequently
      priority: 1.0,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Add other pages as you build them, e.g., /donate or /about
  ];

  return staticRoutes;
}