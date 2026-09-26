// ============================================================
// BLOG POSTS — add a post = add an object. Sections render as
// H2 + paragraphs. Keep "updated" current for freshness signals.
// ============================================================

export const posts = [
  {
    slug: "what-is-geo-generative-engine-optimization",
    title: "What Is GEO (Generative Engine Optimisation)? A Simple Guide for 2026",
    description:
      "GEO helps your brand get cited by ChatGPT, Gemini, Perplexity and Google AI Overviews. Learn what it is, how it differs from SEO and how to start.",
    published: "2026-09-20",
    updated: "2026-09-26",
    author: "BrandForge Team",
    category: "digital-marketing",
    relatedService: "geo-generative-engine-optimization",
    summary:
      "GEO (Generative Engine Optimisation) is optimising your content and brand so AI assistants mention and cite you in their answers. It builds on SEO by adding entity clarity, citation-worthy facts and structured data.",
    sections: [
      {
        h: "What is GEO?",
        p: [
          "Generative Engine Optimisation (GEO) is the practice of making your brand and content easy for AI assistants — ChatGPT, Google Gemini, Perplexity, Microsoft Copilot and Google AI Overviews — to understand, trust and cite.",
          "When someone asks an AI 'best branding agency in Kerala', GEO is what decides whether your name appears in the answer.",
        ],
      },
      {
        h: "How is GEO different from SEO?",
        p: [
          "SEO aims for ranking positions on a results page. GEO aims for being quoted inside an AI-generated answer. AI systems still rely on search indexes, so strong SEO remains the foundation.",
          "GEO adds three things: a clear entity (who you are, consistently described everywhere), citation-worthy content (original data, clear definitions, sources) and structured data that machines can parse.",
        ],
      },
      {
        h: "How to start with GEO",
        p: [
          "1. Make sure your brand name, address and description are identical across your website, Google Business Profile, LinkedIn and directories.",
          "2. Add Organization, Service and FAQ schema to your website.",
          "3. Answer real customer questions in short, direct paragraphs at the top of each page.",
          "4. Publish original statistics, case studies and expert quotes that others will reference.",
          "5. Track how often AI assistants mention your brand for your key topics.",
        ],
      },
    ],
    faqs: [
      { q: "Is GEO replacing SEO?", a: "No. GEO builds on SEO. AI assistants pull from search indexes, so pages that rank well are more likely to be cited." },
      { q: "How do I check if ChatGPT mentions my brand?", a: "Ask AI assistants the questions your customers ask and record whether and how your brand appears. Repeat monthly to track share of voice." },
    ],
  },
  {
    slug: "seo-vs-aeo-vs-geo",
    title: "SEO vs AEO vs GEO: What's the Difference and Which Do You Need?",
    description:
      "SEO, AEO and GEO explained in plain language — what each one targets, how they overlap and how to combine them for maximum visibility.",
    published: "2026-09-12",
    updated: "2026-09-26",
    author: "BrandForge Team",
    category: "digital-marketing",
    relatedService: "aeo-answer-engine-optimization",
    summary:
      "SEO gets you ranked in search results, AEO gets you picked as the direct answer in snippets and voice search, and GEO gets you cited by AI assistants. Most businesses need all three working together.",
    sections: [
      {
        h: "SEO — Search Engine Optimisation",
        p: ["SEO improves where your pages rank on Google and Bing through technical health, relevant content and authority from links."],
      },
      {
        h: "AEO — Answer Engine Optimisation",
        p: ["AEO structures content as direct answers so you win featured snippets, People Also Ask boxes and voice assistant responses. FAQ schema and question-led headings are key."],
      },
      {
        h: "GEO — Generative Engine Optimisation",
        p: ["GEO focuses on AI chat assistants. It relies on a clear brand entity, trustworthy sources and content that AI can easily quote."],
      },
      {
        h: "Which one do you need?",
        p: ["Start with SEO as the foundation, layer AEO into every page with clear Q&A sections, and invest in GEO as AI search grows. One well-structured page can serve all three."],
      },
    ],
    faqs: [
      { q: "Can one page be optimised for SEO, AEO and GEO?", a: "Yes. A page with a clear answer at the top, question-based headings, FAQ schema and credible sources serves all three." },
    ],
  },
];

// Older article with its own custom page (kept at its original URL).
posts.push({
  slug: "cybersecurity-career-roadmap",
  href: "/blogs/blog",
  title: "How to Start a Career in Cybersecurity in 2026: Complete Beginner's Roadmap",
  description: "A complete beginner's roadmap to a cybersecurity career — skills, roles, certifications and how NoaSec training helps you get job-ready.",
  published: "2026-01-15",
  updated: "2026-09-26",
  author: "NoaSec Team",
  category: "cybersecurity",
  summary: "Start with networking, Linux and security fundamentals, get hands-on with labs, earn an entry-level certification and target SOC analyst or junior pentester roles.",
});

export const postHref = (p) => p.href || `/blog/${p.slug}`;
export const articles = posts.filter((p) => !p.href); // rendered by /blog/[slug]
export const getPost = (slug) => articles.find((p) => p.slug === slug);
