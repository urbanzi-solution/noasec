// Detailed page content for Web Development services (keyed by service slug).

const webDevelopment = {
  "website-development": {
    image: "/webdev-hero.webp",
    stats: [{ v: "90+", l: "PageSpeed target" }, { v: "3–6", l: "Weeks to launch" }, { v: "100%", l: "Mobile responsive" }],
    overview: [
      "Your website is your hardest-working salesperson — open 24/7, answering questions and turning visitors into enquiries. A slow, outdated or confusing website quietly loses customers to competitors every day.",
      "NoaSec builds fast, secure business websites on Next.js, React or WordPress. Every site is mobile-first, optimised for Core Web Vitals, structured with clean URLs and schema markup for SEO, and ready for AI search engines. Because our team also does cybersecurity, your website ships with security hardening built in — not bolted on.",
    ],
    deliverables: [
      { icon: "LayoutTemplate", t: "Custom Design", d: "A unique, on-brand design — no generic templates — built around your customers and conversion goals." },
      { icon: "Smartphone", t: "Mobile-First Build", d: "Pixel-perfect on every phone, tablet and desktop, tested on real devices." },
      { icon: "Gauge", t: "Speed & Core Web Vitals", d: "Optimised images, code and hosting for fast load times and better Google rankings." },
      { icon: "Search", t: "Technical SEO & Schema", d: "Meta tags, sitemap, robots, structured data and clean URL structure from day one." },
      { icon: "FileText", t: "Easy Content Management", d: "A simple CMS so your team can update pages, blogs and images without a developer." },
      { icon: "ShieldCheck", t: "Security & Analytics", d: "SSL, security headers, backups, GA4 and conversion tracking configured before launch." },
    ],
    benefits: [
      { t: "More Enquiries", d: "Clear layouts and strong calls-to-action turn visitors into leads." },
      { t: "Better Google Rankings", d: "Fast, well-structured sites rank higher and cost less to market." },
      { t: "Secure by Default", d: "Built by a team with real cybersecurity experience." },
      { t: "Easy to Grow", d: "Scalable architecture that grows with your business." },
    ],
    process: [
      { t: "Discovery & Sitemap", d: "Goals, audience, competitor review and a planned page structure." },
      { t: "Design", d: "Wireframes and high-fidelity designs approved before development." },
      { t: "Development & Content", d: "Build, content upload, SEO setup and integrations." },
      { t: "Testing & Launch", d: "Cross-device QA, speed and security checks, then go live with monitoring." },
    ],
    tools: ["Next.js", "React", "WordPress", "Tailwind CSS", "Vercel", "Cloudflare", "Google Analytics 4", "Search Console"],
    idealFor: ["Service businesses needing more leads", "Companies with an outdated website", "Startups launching a new brand", "Institutes, clinics and professional firms"],
    faqs: [
      { q: "Which platform is best for my website: WordPress or Next.js?", a: "WordPress is great for content-heavy sites your team will edit often. Next.js is best for maximum speed, security and custom features. We recommend based on your goals and budget." },
      { q: "Do you provide hosting and domain?", a: "We can set up and manage hosting, domain, SSL and email for you, or deploy to your existing provider." },
    ],
  },

  "ecommerce-development": {
    image: "/ecommerce-hero.webp",
    stats: [{ v: "24/7", l: "Online sales" }, { v: "1-click", l: "UPI & card checkout" }, { v: "6–10", l: "Weeks to launch" }],
    overview: [
      "E-commerce lets you sell to customers across India and the world while you sleep. But a store only succeeds when it loads quickly, earns trust and makes checkout effortless — every extra step loses buyers.",
      "We build online stores on Shopify, WooCommerce or custom headless stacks, with Indian payment gateways (Razorpay, PhonePe, UPI), GST-ready invoicing, shipping integrations and product schema so your products appear in Google Shopping. The result is a store that is easy for you to manage and easy for customers to buy from.",
    ],
    deliverables: [
      { icon: "ShoppingCart", t: "Store Setup & Design", d: "A conversion-focused storefront on Shopify, WooCommerce or headless commerce." },
      { icon: "CreditCard", t: "Payments & Checkout", d: "Razorpay, Stripe, UPI, COD and a fast, trustworthy checkout flow." },
      { icon: "Boxes", t: "Products & Inventory", d: "Catalogue setup, variants, stock management and bulk import." },
      { icon: "Truck", t: "Shipping & GST", d: "Shiprocket/Delhivery integration, shipping rules and GST-compliant invoices." },
      { icon: "Tag", t: "Google Shopping Ready", d: "Product schema and Merchant Center feed for free and paid Shopping listings." },
      { icon: "Mail", t: "Recovery & Retention", d: "Abandoned cart emails/WhatsApp, reviews and loyalty features." },
    ],
    benefits: [
      { t: "Sell Beyond Your Location", d: "Reach customers across India and internationally." },
      { t: "Higher Conversion Rate", d: "Fast pages and a simple checkout reduce drop-offs." },
      { t: "Less Manual Work", d: "Automated orders, invoices and shipping labels." },
      { t: "Data to Grow", d: "Know your best products, customers and channels." },
    ],
    process: [
      { t: "Planning", d: "Catalogue, platform choice, payments and shipping requirements." },
      { t: "Design & Build", d: "Storefront design, product pages and checkout development." },
      { t: "Integrations & Data", d: "Payments, shipping, GST, analytics and product upload." },
      { t: "Launch & Train", d: "Test orders, go live, and train your team to manage the store." },
    ],
    tools: ["Shopify", "WooCommerce", "Next.js Commerce", "Razorpay", "Shiprocket", "Google Merchant Center", "Klaviyo"],
    idealFor: ["D2C and retail brands", "Manufacturers selling direct", "Offline stores going online", "Businesses leaving marketplaces"],
    faqs: [
      { q: "Can I manage products myself after launch?", a: "Yes. We train your team to add products, update prices, manage orders and run discounts without any coding." },
      { q: "Can you migrate my store from another platform?", a: "Yes. We migrate products, customers and orders, and set up redirects so you keep your search rankings." },
    ],
  },

  "web-application-development": {
    image: "/webapp-hero.webp",
    stats: [{ v: "6–10", l: "Weeks for an MVP" }, { v: "99.9%", l: "Uptime target" }, { v: "OWASP", l: "Secure coding" }],
    overview: [
      "Off-the-shelf software rarely fits exactly how your business works. A custom web application — a SaaS product, customer portal, booking system or internal dashboard — automates your processes and gives you a competitive edge that others cannot copy.",
      "We design and build web applications with React, Next.js and Node.js, backed by secure APIs and scalable cloud infrastructure. With cybersecurity in our DNA, every application follows OWASP secure-coding practices, role-based access and regular security testing.",
    ],
    deliverables: [
      { icon: "FileSearch", t: "Requirements & Architecture", d: "User stories, technical architecture and a clear roadmap before any code is written." },
      { icon: "Code2", t: "Frontend Development", d: "Fast, responsive interfaces with React and Next.js." },
      { icon: "Server", t: "Backend & APIs", d: "Secure REST/GraphQL APIs with Node.js and robust databases." },
      { icon: "Plug", t: "Integrations", d: "Payment gateways, CRMs, ERPs, WhatsApp, email and third-party APIs." },
      { icon: "Lock", t: "Auth & Security", d: "Login, roles and permissions, encryption and OWASP-aligned security testing." },
      { icon: "Cloud", t: "Cloud Deployment & Support", d: "CI/CD, monitoring and hosting on AWS or Vercel, with ongoing maintenance." },
    ],
    benefits: [
      { t: "Automate Manual Work", d: "Replace spreadsheets and repetitive tasks with software." },
      { t: "Scale Without Limits", d: "Architecture designed to grow with users and data." },
      { t: "Security Built In", d: "Developed and tested by a security-first team." },
      { t: "Own Your Product", d: "Full source code ownership and documentation." },
    ],
    process: [
      { t: "Discovery & Scoping", d: "Workshops to define features, users and success metrics." },
      { t: "UX & Prototype", d: "Clickable prototype validated before development." },
      { t: "Agile Development", d: "Two-week sprints with demos so you see progress constantly." },
      { t: "Launch & Iterate", d: "Security test, deploy, monitor and improve based on real usage." },
    ],
    tools: ["React", "Next.js", "Node.js", "PostgreSQL", "MongoDB", "AWS", "Docker", "GitHub Actions"],
    idealFor: ["Startups building an MVP or SaaS", "Businesses automating workflows", "Companies needing customer portals", "Teams replacing legacy software"],
    faqs: [
      { q: "Will I own the source code?", a: "Yes. You receive full ownership of the source code, documentation and deployment configuration." },
      { q: "Do you sign an NDA?", a: "Yes. We are happy to sign an NDA before discussing your idea in detail." },
    ],
  },

  "mobile-app-development": {
    image: "/mobile-dev-hero.webp",
    stats: [{ v: "2-in-1", l: "Android + iOS" }, { v: "8–14", l: "Weeks typical" }, { v: "4.5★", l: "Rating goal" }],
    overview: [
      "A mobile app puts your business on your customer's home screen — enabling bookings, orders, loyalty and push notifications that keep people coming back far more than a website alone.",
      "We build cross-platform apps with React Native and Flutter, so you get Android and iOS from one codebase at lower cost and faster timelines, without compromising performance. We handle design, backend, testing and App Store / Play Store publishing end to end.",
    ],
    deliverables: [
      { icon: "Smartphone", t: "Cross-Platform App", d: "One codebase for Android and iOS using React Native or Flutter." },
      { icon: "Component", t: "App UI/UX", d: "Intuitive, platform-native design that users enjoy." },
      { icon: "Server", t: "Backend & Admin Panel", d: "APIs, database and a web admin panel to manage content and users." },
      { icon: "Bell", t: "Push Notifications", d: "Targeted notifications for offers, reminders and updates." },
      { icon: "Activity", t: "Analytics & Crash Reporting", d: "Firebase analytics and crash monitoring to improve the app." },
      { icon: "Rocket", t: "Store Publishing & ASO", d: "App Store and Play Store submission with store listing optimisation." },
    ],
    benefits: [
      { t: "Direct Customer Channel", d: "Reach users instantly with push notifications." },
      { t: "Lower Development Cost", d: "One codebase for two platforms." },
      { t: "Better Retention", d: "Apps drive repeat usage and loyalty." },
      { t: "Secure by Design", d: "Mobile security best practices and testing included." },
    ],
    process: [
      { t: "Idea & Scoping", d: "Define core features, users and monetisation." },
      { t: "Design & Prototype", d: "User flows and clickable prototype for approval." },
      { t: "Development & Testing", d: "Sprint-based build with QA on real devices." },
      { t: "Launch & Support", d: "Store submission, launch marketing support and updates." },
    ],
    tools: ["React Native", "Flutter", "Firebase", "Node.js", "Expo", "TestFlight", "Google Play Console"],
    idealFor: ["E-commerce and D2C brands", "Service booking businesses", "Startups with app-first products", "Institutes and membership businesses"],
    faqs: [
      { q: "How much does a mobile app cost?", a: "It depends on features, integrations and design complexity. After a short discovery call we provide a fixed, itemised quote." },
      { q: "Do you maintain the app after launch?", a: "Yes. We offer maintenance plans covering OS updates, bug fixes, security patches and new features." },
    ],
  },

  "landing-page-development": {
    image: "/landing-page-hero.webp",
    stats: [{ v: "<1.5s", l: "Load time target" }, { v: "2–3x", l: "Typical lift vs homepage" }, { v: "5–7", l: "Days to launch" }],
    overview: [
      "When you pay for every click, sending ads to a generic homepage wastes money. A dedicated landing page matches the ad's promise, removes distractions and guides visitors to one action — call, enquire or buy.",
      "We build lightning-fast landing pages for Google Ads, Meta Ads and email campaigns, with persuasive copy, social proof and full tracking (GA4, GTM, Meta Pixel and Conversions API). Every page is A/B test ready so we can keep improving your cost per lead.",
    ],
    deliverables: [
      { icon: "MousePointerClick", t: "Conversion-Focused Layout", d: "Proven structure with clear headline, benefits, proof and a single call-to-action." },
      { icon: "PenTool", t: "Persuasive Copywriting", d: "Copy written around your audience's pain points and objections." },
      { icon: "Zap", t: "Blazing Fast Performance", d: "Sub-second loads to improve Quality Score and reduce bounce." },
      { icon: "Split", t: "A/B Testing Setup", d: "Test headlines, offers and layouts to find the best performer." },
      { icon: "BarChart3", t: "Tracking & Attribution", d: "GA4, GTM, Google Ads conversions, Meta Pixel and CAPI configured." },
      { icon: "Plug", t: "Form & CRM Integration", d: "Leads delivered to your CRM, email, Google Sheets or WhatsApp instantly." },
    ],
    benefits: [
      { t: "Lower Cost Per Lead", d: "Higher conversion rates stretch your ad budget." },
      { t: "Better Quality Score", d: "Relevant, fast pages reduce Google Ads costs." },
      { t: "Measurable Results", d: "Know exactly which ads and keywords generate leads." },
      { t: "Fast Launch", d: "Campaign-ready pages in days, not weeks." },
    ],
    process: [
      { t: "Campaign Brief", d: "Offer, audience, ad channels and conversion goal." },
      { t: "Copy & Design", d: "Messaging and design aligned with your ads." },
      { t: "Build & Track", d: "Development with full tracking and integrations." },
      { t: "Test & Optimise", d: "Launch, A/B test and improve based on data." },
    ],
    tools: ["Next.js", "Google Tag Manager", "GA4", "Meta Pixel & CAPI", "Microsoft Clarity", "VWO"],
    idealFor: ["Businesses running Google or Meta ads", "Product and course launches", "Lead generation campaigns", "Events and webinars"],
    faqs: [
      { q: "Can the landing page be hosted on my existing website?", a: "Yes. We can host it on a subdomain, a folder of your current site or a separate fast host — whichever works best for tracking and speed." },
      { q: "Do you write the content?", a: "Yes. Conversion copywriting is included, based on a short brief and your existing marketing material." },
    ],
  },

  "website-maintenance": {
    image: "/maintenance-hero.webp",
    stats: [{ v: "24/7", l: "Uptime monitoring" }, { v: "Daily", l: "Backups" }, { v: "<24h", l: "Support response" }],
    overview: [
      "A website is never 'finished'. Plugins, frameworks and servers need updates; security vulnerabilities appear; content goes stale; speed slowly degrades. Neglected websites get hacked, break and slip down Google.",
      "Our monthly care plans keep your website secure, fast and up to date. As a cybersecurity company we go beyond basic updates — with malware scanning, firewall rules, uptime monitoring and a monthly health report so you always know your site is in good shape.",
    ],
    deliverables: [
      { icon: "RefreshCw", t: "Updates & Patching", d: "Core, plugin, theme and dependency updates tested before going live." },
      { icon: "Database", t: "Daily Backups", d: "Automated off-site backups with fast one-click restore." },
      { icon: "ShieldCheck", t: "Security Monitoring", d: "Malware scans, firewall rules and vulnerability checks by security experts." },
      { icon: "Activity", t: "Uptime Monitoring", d: "24/7 monitoring with instant alerts and rapid fixes." },
      { icon: "Gauge", t: "Speed Optimisation", d: "Regular performance tuning to keep Core Web Vitals green." },
      { icon: "Wrench", t: "Content Changes & Support", d: "Monthly hours for text, image and page updates plus a monthly report." },
    ],
    benefits: [
      { t: "Peace of Mind", d: "Experts watch your website so you can focus on business." },
      { t: "Protection From Hacks", d: "Proactive security from a cybersecurity team." },
      { t: "Consistent Performance", d: "Fast, working pages that keep rankings healthy." },
      { t: "Predictable Cost", d: "One monthly fee instead of emergency fixes." },
    ],
    process: [
      { t: "Technical Audit", d: "Review of security, speed, plugins and hosting." },
      { t: "Stabilise & Fix", d: "Critical issues fixed and backups configured." },
      { t: "Monthly Care", d: "Updates, monitoring and content changes every month." },
      { t: "Report & Improve", d: "Monthly health report with recommendations." },
    ],
    tools: ["Wordfence", "Cloudflare", "UptimeRobot", "ManageWP", "Google Search Console", "PageSpeed Insights"],
    idealFor: ["Businesses without an in-house developer", "WordPress and WooCommerce websites", "Sites that have been hacked before", "Agencies needing white-label support"],
    faqs: [
      { q: "What happens if my site goes down?", a: "Our monitoring alerts us immediately and we begin investigating, restoring from backup if needed, typically within hours." },
      { q: "Can I cancel anytime?", a: "Yes. Care plans are month-to-month with no long lock-in contracts." },
    ],
  },
};

export default webDevelopment;
