// ============================================================
// SERVICES — single source of truth.
// URL structure (topic silos, good for SEO):
//   /services                         -> all categories
//   /services/{category}              -> category hub
//   /services/{category}/{service}    -> service page
// Add a service = add an object here. Nav, footer, sitemap,
// schema, breadcrumbs and related links update automatically.
// ============================================================

export const categories = [
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    title: "Cybersecurity Services",
    short: "Pen testing, managed SOC, incident response, forensics and cloud security.",
    intro:
      "NoaSec's security services are delivered by practitioners with real-world offensive and defensive experience — from one-time penetration tests to 24/7 SOC monitoring, forensic investigation and cloud hardening.",
    keywords: ["cybersecurity services Kerala", "penetration testing company", "managed SOC services", "incident response", "digital forensics company"],
  },
  {
    slug: "branding",
    name: "Branding",
    title: "Branding & Brand Identity Services",
    short: "Strategy, identity and voice that make your brand unforgettable.",
    intro:
      "A brand is more than a logo. We define who you are, how you look and how you speak — then give you a system your whole team can use consistently across every touchpoint.",
    keywords: ["branding agency", "brand identity design", "logo design company", "brand strategy agency Kerala"],
  },
  {
    slug: "web-development",
    name: "Web Development",
    title: "Website & App Development Services",
    short: "Fast, secure, SEO-ready websites, e-commerce stores and web apps.",
    intro:
      "We build websites and web applications that load fast, rank well and convert visitors into customers — using modern stacks like Next.js, React, WordPress and Shopify.",
    keywords: ["web development company", "website development Kerala", "ecommerce website development", "Next.js development agency"],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    title: "UI/UX Design Services",
    short: "Research-driven interfaces that are easy to use and beautiful.",
    intro:
      "Good design reduces friction and grows revenue. We research your users, map their journeys and design interfaces for websites, mobile apps and SaaS products that people enjoy using.",
    keywords: ["UI UX design agency", "website design company", "mobile app UI design", "product design services"],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    title: "Digital Marketing Services",
    short: "SEO, GEO, AEO, social, ads and performance marketing that drives revenue.",
    intro:
      "Get found on Google, cited by AI assistants like ChatGPT and Gemini, and chosen over competitors. Our marketing is measured by leads and revenue, not vanity metrics.",
    keywords: ["digital marketing agency", "digital marketing company Kerala", "online marketing services", "growth marketing agency"],
  },
];

const s = (o) => o; // tiny helper to keep objects readable

// Cybersecurity services keep their original custom pages (`href`).
// `draft: true` = page still "under development": shown on hub, hidden from nav/sitemap.
const cyber = (slug, name, short, extra = {}) => ({ slug, category: "cybersecurity", name, short, href: `/services/${slug}`, ...extra });

export const services = [
  // ---------------- CYBERSECURITY ----------------
  cyber("web-application-penetration-testing", "Web Application Penetration Testing", "Deep testing of web apps targeting OWASP Top 10 vulnerabilities.", { shortName: "Web App Pen Testing" }),
  cyber("network-penetration-testing", "Network Penetration Testing", "Rigorous offensive assessments targeting your core infrastructure.", { shortName: "Network Pen Testing" }),
  cyber("vulnerability-assessment-services", "Vulnerability Assessment Services", "Identify, prioritise and fix weaknesses before attackers do.", { shortName: "Vulnerability Assessment" }),
  cyber("mobile-application-pen-testing", "Mobile Application Pen Testing", "Security testing for Android and iOS apps.", { draft: true }),
  cyber("api-pen-testing", "API Pen Testing", "Testing APIs for authentication flaws and data leaks.", { draft: true }),
  cyber("cloud-pen-testing", "Cloud Pen Testing", "Security assessments for AWS, Azure and cloud-native environments.", { draft: true }),
  cyber("managed-soc", "Managed SOC Operations", "24/7 monitoring, detection and response.", { shortName: "Managed SOC" }),
  cyber("incident-response-services", "Incident Response Services", "Rapid containment and recovery from attacks.", { shortName: "Incident Response" }),
  cyber("threat-intelligence", "Threat Intelligence & Hunting", "Proactive threat hunting using intelligence feeds.", { shortName: "Threat Intelligence" }),
  cyber("malware-analysis", "Malware Analysis", "Static and dynamic malware analysis."),
  cyber("disk-memory-forensics", "Disk & Memory Forensics", "Forensic analysis of storage and memory."),
  cyber("digital-evidence-collection", "Digital Evidence Collection", "Secure evidence handling and investigation.", { shortName: "Digital Evidence" }),
  cyber("server-hardening", "Server & Firewall Hardening", "CIS benchmark-based hardening of systems.", { shortName: "Server Hardening" }),
  cyber("linux-windows-administration", "Linux & Windows Administration", "OS-level hardening and secure configurations.", { shortName: "Linux & Windows Admin" }),
  cyber("endpoint-security", "Endpoint Security", "Secure every device. Stop every threat.", { draft: true }),
  cyber("cloud-security-solutions", "Cloud Security Solutions", "Zero-trust architecture and cloud protection.", { shortName: "Cloud Security" }),

  // ---------------- BRANDING ----------------
  s({
    slug: "brand-strategy",
    category: "branding",
    name: "Brand Strategy",
    short: "Positioning, audience and messaging that set you apart.",
    description:
      "We uncover what makes your business different and turn it into a clear positioning, brand story and messaging framework that guides every marketing decision.",
    features: ["Market & competitor research", "Brand positioning statement", "Target audience personas", "Brand story & messaging pillars", "Tone of voice guide", "Naming & tagline"],
    faqs: [
      { q: "What is brand strategy?", a: "Brand strategy is the long-term plan that defines who your brand serves, what it stands for and how it is different from competitors. It guides your visuals, messaging and marketing." },
      { q: "How long does a brand strategy project take?", a: "Most brand strategy projects take 2 to 4 weeks depending on research depth and the number of stakeholders involved." },
    ],
  }),
  s({
    slug: "logo-brand-identity",
    category: "branding",
    name: "Logo & Brand Identity",
    short: "Logos, colours, typography and a complete visual system.",
    description:
      "A distinctive logo and visual identity system — colours, typography, iconography and imagery style — delivered with a brand guidelines book so everything stays consistent.",
    features: ["Logo design (primary, secondary, icon)", "Colour palette & typography", "Brand guidelines PDF", "Business cards & stationery", "Social media kit", "All source files (AI, SVG, PNG)"],
    faqs: [
      { q: "How many logo concepts do I get?", a: "You receive 3 unique logo concepts, followed by revision rounds on the direction you choose." },
      { q: "Do I own the logo files?", a: "Yes. After final payment you receive full ownership and all source files." },
    ],
  }),
  s({
    slug: "rebranding",
    category: "branding",
    name: "Rebranding",
    short: "Refresh an outdated brand without losing what customers love.",
    description:
      "When your business has outgrown its brand, we modernise your identity, messaging and assets while protecting the recognition and SEO value you have already earned.",
    features: ["Brand audit", "Identity refresh or full redesign", "Messaging update", "Rollout plan across channels", "Website & social migration", "SEO-safe domain/URL migration"],
    faqs: [
      { q: "Will rebranding hurt my Google rankings?", a: "Not if handled correctly. We plan redirects, update schema and profiles, and keep existing URLs wherever possible to protect rankings." },
    ],
  }),
  s({
    slug: "packaging-print-design",
    category: "branding",
    name: "Packaging & Print Design",
    short: "Packaging, brochures and print that sell on the shelf.",
    description:
      "Product packaging, labels, brochures, catalogues and signage designed to stand out on the shelf and stay on-brand.",
    features: ["Product packaging & labels", "Brochures & catalogues", "Flyers & posters", "Signage & banners", "Print-ready files", "Printer coordination"],
    faqs: [
      { q: "Do you handle printing?", a: "We deliver print-ready files and can coordinate with trusted printing partners on your behalf." },
    ],
  }),

  // ---------------- WEB DEVELOPMENT ----------------
  s({
    slug: "website-development",
    category: "web-development",
    name: "Website Development",
    short: "Business websites built fast, secure and SEO-ready.",
    description:
      "Custom business websites built on Next.js, React or WordPress — mobile-first, Core Web Vitals optimised, and structured for search engines and AI assistants from day one.",
    features: ["Custom design & development", "Mobile-first responsive build", "Core Web Vitals optimised", "Technical SEO & schema markup", "CMS for easy editing", "Analytics & conversion tracking"],
    faqs: [
      { q: "How much does a website cost?", a: "Pricing depends on pages, features and integrations. Share your requirements and we will send a fixed quote within 1 business day." },
      { q: "How long does it take to build a website?", a: "A standard business website takes 3 to 6 weeks from kickoff to launch." },
      { q: "Will my website be SEO friendly?", a: "Yes. Every site ships with clean URLs, meta tags, schema markup, XML sitemap, fast loading and mobile optimisation." },
    ],
  }),
  s({
    slug: "ecommerce-development",
    category: "web-development",
    name: "E-commerce Development",
    short: "Shopify, WooCommerce and custom online stores that convert.",
    description:
      "Online stores on Shopify, WooCommerce or a custom headless stack — with payment gateways, inventory, shipping and conversion-optimised checkout.",
    features: ["Shopify / WooCommerce / headless", "Payment gateway integration (Razorpay, Stripe)", "Product & inventory setup", "Shipping & GST configuration", "Product schema for Google Shopping", "Abandoned cart recovery"],
    faqs: [
      { q: "Shopify or WooCommerce — which is better?", a: "Shopify is best for fast launch and low maintenance. WooCommerce suits businesses already on WordPress or needing deep customisation. We recommend based on your catalogue and budget." },
    ],
  }),
  s({
    slug: "web-application-development",
    category: "web-development",
    name: "Web Application Development",
    short: "Custom SaaS, portals and dashboards built to scale.",
    description:
      "Custom web applications, SaaS platforms, customer portals and internal dashboards built with React, Next.js and Node.js — secure, scalable and maintainable.",
    features: ["Requirement analysis & architecture", "React / Next.js / Node.js", "APIs & third-party integrations", "Authentication & role-based access", "Cloud deployment (AWS, Vercel)", "Ongoing support & maintenance"],
    faqs: [
      { q: "Do you build MVPs for startups?", a: "Yes. We build lean MVPs in 6 to 10 weeks so you can validate your idea with real users quickly." },
    ],
  }),
  s({
    slug: "mobile-app-development",
    category: "web-development",
    name: "Mobile App Development",
    short: "Android and iOS apps with React Native and Flutter.",
    description:
      "Cross-platform mobile apps for Android and iOS using React Native or Flutter — one codebase, native performance, and App Store / Play Store launch support.",
    features: ["Android & iOS from one codebase", "React Native / Flutter", "Backend & API development", "Push notifications & analytics", "App Store & Play Store publishing", "App store optimisation (ASO)"],
    faqs: [
      { q: "Native or cross-platform?", a: "For most businesses cross-platform (React Native or Flutter) is faster and more cost-effective with near-native performance." },
    ],
  }),
  s({
    slug: "landing-page-development",
    category: "web-development",
    name: "Landing Page Development",
    short: "High-converting landing pages for ads and campaigns.",
    description:
      "Fast, focused landing pages built for Google Ads and Meta campaigns — A/B test ready, with tracking wired in so every rupee of ad spend is measurable.",
    features: ["Conversion-focused copy & layout", "Sub-second load times", "A/B testing setup", "GA4, GTM & pixel tracking", "Form & CRM integration", "Ad Quality Score optimisation"],
    faqs: [
      { q: "Why do I need a separate landing page for ads?", a: "A focused landing page matches the ad's message, removes distractions and typically converts 2 to 3 times better than a generic homepage." },
    ],
  }),
  s({
    slug: "website-maintenance",
    category: "web-development",
    name: "Website Maintenance & Support",
    short: "Updates, backups, security and speed — handled monthly.",
    description:
      "Monthly care plans covering updates, backups, uptime monitoring, security patches, speed optimisation and content changes.",
    features: ["Core, plugin & dependency updates", "Daily backups", "Uptime & security monitoring", "Speed optimisation", "Content updates", "Monthly health report"],
    faqs: [
      { q: "Can you maintain a website you did not build?", a: "Yes. We start with a technical audit, fix critical issues and then move it onto a care plan." },
    ],
  }),

  // ---------------- UI/UX ----------------
  s({
    slug: "website-design",
    category: "ui-ux-design",
    name: "Website Design",
    short: "Modern, conversion-focused website design in Figma.",
    description:
      "Custom website designs in Figma — wireframes to high-fidelity mockups — built around your brand, your users and your conversion goals.",
    features: ["Sitemap & information architecture", "Wireframes", "High-fidelity Figma designs", "Desktop, tablet & mobile layouts", "Interactive prototype", "Developer handoff"],
    faqs: [
      { q: "Do you design and develop, or only design?", a: "Both. You can hire us for design only, or for design plus development for a seamless handoff." },
    ],
  }),
  s({
    slug: "mobile-app-design",
    category: "ui-ux-design",
    name: "Mobile App UI/UX Design",
    short: "Intuitive app interfaces for Android and iOS.",
    description:
      "User flows, wireframes and pixel-perfect UI for Android and iOS apps following Material Design and Apple Human Interface Guidelines.",
    features: ["User flows & journey maps", "Wireframes & prototypes", "iOS & Android guidelines", "Micro-interactions", "Usability testing", "Design system"],
    faqs: [
      { q: "Do you test designs with real users?", a: "Yes. We run usability tests on prototypes before development to catch problems early when they are cheap to fix." },
    ],
  }),
  s({
    slug: "ux-research-audit",
    category: "ui-ux-design",
    name: "UX Research & Audit",
    short: "Find out why users drop off — and fix it.",
    description:
      "Heuristic reviews, heatmaps, session recordings and user interviews that reveal where your website or app loses users, with a prioritised fix list.",
    features: ["Heuristic evaluation", "Heatmap & session analysis", "User interviews & surveys", "Accessibility (WCAG) review", "Conversion funnel analysis", "Prioritised recommendations"],
    faqs: [
      { q: "What is a UX audit?", a: "A UX audit is an expert review of your product's usability, accessibility and conversion flow, delivered as a prioritised list of improvements." },
    ],
  }),
  s({
    slug: "design-systems",
    category: "ui-ux-design",
    name: "Design Systems",
    short: "Reusable components that keep product design consistent.",
    description:
      "Scalable design systems in Figma with matching code components — so your team ships faster and every screen stays on-brand.",
    features: ["Design tokens (colour, type, spacing)", "Component library in Figma", "Coded React components", "Usage documentation", "Accessibility built in", "Team training"],
    faqs: [
      { q: "When does a company need a design system?", a: "Once more than one designer or developer works on your product, a design system saves time and prevents inconsistency." },
    ],
  }),

  // ---------------- DIGITAL MARKETING ----------------
  s({
    slug: "seo",
    category: "digital-marketing",
    name: "SEO (Search Engine Optimisation)",
    shortName: "SEO",
    short: "Rank higher on Google and get consistent organic leads.",
    description:
      "Technical SEO, on-page optimisation, content and link building that grow your organic traffic and leads month after month.",
    features: ["Technical SEO audit & fixes", "Keyword research & mapping", "On-page optimisation", "Content strategy & writing", "Link building & digital PR", "Monthly ranking & traffic reports"],
    faqs: [
      { q: "How long does SEO take to show results?", a: "Most websites see measurable improvements in 3 to 6 months. Competitive keywords can take 6 to 12 months." },
      { q: "Do you guarantee #1 rankings?", a: "No honest agency can guarantee rankings. We guarantee transparent work, best practices and monthly reporting on traffic and leads." },
    ],
  }),
  s({
    slug: "local-seo",
    category: "digital-marketing",
    name: "Local SEO & Google Business Profile",
    shortName: "Local SEO",
    short: "Show up in Google Maps and 'near me' searches.",
    description:
      "Google Business Profile optimisation, local citations, reviews strategy and location pages so nearby customers find you first.",
    features: ["Google Business Profile optimisation", "Local citations & NAP consistency", "Review generation strategy", "Location landing pages", "LocalBusiness schema", "Map pack rank tracking"],
    faqs: [
      { q: "What is Local SEO?", a: "Local SEO helps your business appear in Google Maps and local search results when people nearby search for your products or services." },
    ],
  }),
  s({
    slug: "geo-generative-engine-optimization",
    category: "digital-marketing",
    name: "GEO (Generative Engine Optimisation)",
    shortName: "GEO",
    short: "Get your brand cited by ChatGPT, Gemini, Perplexity and AI Overviews.",
    description:
      "Generative Engine Optimisation makes your brand the source AI assistants trust and cite — through entity building, structured data, authoritative content and brand mentions across the web.",
    features: ["AI visibility audit (ChatGPT, Gemini, Perplexity, Copilot)", "Entity & knowledge graph optimisation", "Citation-worthy content with stats & sources", "Structured data & llms.txt", "Brand mention & PR strategy", "AI share-of-voice tracking"],
    faqs: [
      { q: "What is GEO?", a: "GEO (Generative Engine Optimisation) is the practice of optimising your content and brand so AI tools like ChatGPT, Google Gemini, Perplexity and Google AI Overviews mention and cite you in their answers." },
      { q: "How is GEO different from SEO?", a: "SEO targets ranking positions in search results. GEO targets being quoted or recommended inside AI-generated answers. Strong SEO is the foundation; GEO adds entity clarity, citations and answer-ready content." },
    ],
  }),
  s({
    slug: "aeo-answer-engine-optimization",
    category: "digital-marketing",
    name: "AEO (Answer Engine Optimisation)",
    shortName: "AEO",
    short: "Win featured snippets, voice search and 'People Also Ask'.",
    description:
      "Answer Engine Optimisation structures your content as direct, concise answers so you win featured snippets, People Also Ask boxes and voice assistant results.",
    features: ["Question & intent research", "FAQ and HowTo content", "FAQ / HowTo / QAPage schema", "Featured snippet optimisation", "Voice search optimisation", "People Also Ask tracking"],
    faqs: [
      { q: "What is AEO?", a: "AEO (Answer Engine Optimisation) is optimising content to be selected as the direct answer by search engines and voice assistants, such as featured snippets and Google Assistant or Siri responses." },
      { q: "Do I need AEO and GEO separately?", a: "They overlap. AEO focuses on direct answers in search and voice; GEO focuses on AI chat assistants. We usually run them together with SEO." },
    ],
  }),
  s({
    slug: "social-media-marketing",
    category: "digital-marketing",
    name: "Social Media Marketing",
    shortName: "Social Media",
    short: "Content, community and growth on Instagram, LinkedIn and more.",
    description:
      "Strategy, content creation, reels, community management and paid social across Instagram, Facebook, LinkedIn, YouTube and X.",
    features: ["Social media strategy & calendar", "Post, carousel & reel creation", "Community management", "Influencer collaborations", "Paid social campaigns", "Monthly analytics report"],
    faqs: [
      { q: "Which social platforms should my business be on?", a: "It depends on where your customers are. B2B brands usually win on LinkedIn; consumer brands on Instagram, Facebook and YouTube. We recommend after an audience audit." },
    ],
  }),
  s({
    slug: "performance-marketing",
    category: "digital-marketing",
    name: "Performance Marketing",
    shortName: "Performance Marketing",
    short: "ROI-driven paid campaigns measured by leads and sales.",
    description:
      "Full-funnel paid campaigns across Google, Meta, LinkedIn and YouTube, optimised daily for cost per lead, ROAS and revenue — not clicks.",
    features: ["Full-funnel campaign strategy", "Conversion tracking (GA4, GTM, CAPI)", "Creative & ad copy testing", "Audience & retargeting setup", "Daily bid & budget optimisation", "ROAS dashboards"],
    faqs: [
      { q: "What is performance marketing?", a: "Performance marketing is paid advertising where success is measured by specific actions such as leads, sales or app installs, and budgets are optimised toward those results." },
      { q: "What budget do I need to start?", a: "We recommend a minimum ad spend of ₹30,000 per month to gather enough data for optimisation, plus our management fee." },
    ],
  }),
  s({
    slug: "google-ads",
    category: "digital-marketing",
    name: "Google Ads Management",
    shortName: "Google Ads",
    short: "Search, Performance Max, YouTube and Shopping campaigns.",
    description:
      "Certified Google Ads management — Search, Performance Max, Shopping, Display and YouTube — with tight keyword control, negative lists and conversion tracking.",
    features: ["Search & Performance Max campaigns", "Google Shopping & Merchant Center", "YouTube & Display ads", "Keyword & negative keyword research", "Landing page & Quality Score optimisation", "Offline conversion import"],
    faqs: [
      { q: "How fast do Google Ads bring leads?", a: "Search campaigns can generate leads within days of launch. Performance improves over the first 4 to 8 weeks as data builds up." },
    ],
  }),
  s({
    slug: "meta-ads",
    category: "digital-marketing",
    name: "Meta Ads (Facebook & Instagram)",
    shortName: "Meta Ads",
    short: "Facebook and Instagram ads that generate leads and sales.",
    description:
      "Lead generation and sales campaigns on Facebook and Instagram with scroll-stopping creatives, Conversions API tracking and structured testing.",
    features: ["Lead gen & sales campaigns", "Creative production (static, video, reels)", "Pixel & Conversions API setup", "Lookalike & retargeting audiences", "Creative A/B testing", "WhatsApp click-to-chat ads"],
    faqs: [
      { q: "Facebook ads or Google ads — which is better?", a: "Google Ads captures existing demand from people searching. Meta Ads creates demand through targeting and creative. Most businesses benefit from both." },
    ],
  }),
  s({
    slug: "content-marketing",
    category: "digital-marketing",
    name: "Content Marketing",
    shortName: "Content Marketing",
    short: "Blogs, guides and videos that build authority and rank.",
    description:
      "Search-driven blogs, long-form guides, case studies and video scripts written by humans, edited for E-E-A-T and optimised for search and AI citations.",
    features: ["Content strategy & topic clusters", "SEO blog writing", "Pillar pages & guides", "Case studies & whitepapers", "Video scripts", "Content refresh & repurposing"],
    faqs: [
      { q: "Is AI-written content bad for SEO?", a: "Google rewards helpful content regardless of how it is produced. We use AI for research but every piece is written and fact-checked by humans to meet E-E-A-T standards." },
    ],
  }),
  s({
    slug: "email-marketing",
    category: "digital-marketing",
    name: "Email & WhatsApp Marketing",
    shortName: "Email Marketing",
    short: "Automated email and WhatsApp flows that nurture and convert.",
    description:
      "Newsletters, automated flows and WhatsApp Business campaigns that turn leads into customers and customers into repeat buyers.",
    features: ["Welcome, nurture & abandoned cart flows", "Newsletter design & copy", "WhatsApp Business API campaigns", "List segmentation", "Deliverability setup (SPF, DKIM, DMARC)", "Open, click & revenue reporting"],
    faqs: [
      { q: "Is email marketing still effective?", a: "Yes. Email consistently delivers one of the highest ROIs of any channel because you own the audience and costs stay low." },
    ],
  }),
  s({
    slug: "conversion-rate-optimization",
    category: "digital-marketing",
    name: "Conversion Rate Optimisation (CRO)",
    shortName: "CRO",
    short: "Turn more of your existing traffic into customers.",
    description:
      "Data-driven testing of headlines, layouts, forms and checkout to increase the percentage of visitors who become leads and customers.",
    features: ["Funnel & analytics audit", "Heatmaps & session recordings", "Hypothesis-driven A/B tests", "Form & checkout optimisation", "Page speed improvements", "Test result reporting"],
    faqs: [
      { q: "What is a good conversion rate?", a: "It varies by industry, but most websites convert 2 to 5 percent of visitors. CRO aims to steadily increase that number through testing." },
    ],
  }),
];

// ---------------- helpers ----------------
export const liveServices = services.filter((x) => !x.draft); // for nav, footer, sitemap, schema
export const templatedServices = services.filter((x) => !x.href); // rendered by /services/[category]/[service]
export const getCategory = (slug) => categories.find((c) => c.slug === slug);
export const getServicesByCategory = (slug, includeDrafts = false) =>
  (includeDrafts ? services : liveServices).filter((x) => x.category === slug);
export const getService = (category, slug) => templatedServices.find((x) => x.category === category && x.slug === slug);
export const serviceHref = (x) => x.href || `/services/${x.category}/${x.slug}`;
export const categoryHref = (c) => `/services/${typeof c === "string" ? c : c.slug}`;
export const getRelatedServices = (x, n = 3) =>
  liveServices.filter((o) => o.category === x.category && o.slug !== x.slug).slice(0, n);
