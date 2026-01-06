
export default function robots() {
  const baseUrl = "https://vidyalok.org";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/", 
        "/admin", // Add any admin or private folders here
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}