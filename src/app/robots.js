import { SITE } from "@/data/site";

// AI crawlers are explicitly allowed so the brand can be cited in
// ChatGPT, Gemini, Perplexity, Claude and Copilot answers (GEO).
export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "Google-Extended", "PerplexityBot", "ClaudeBot", "Claude-SearchBot", "Bingbot", "Applebot-Extended"], allow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
