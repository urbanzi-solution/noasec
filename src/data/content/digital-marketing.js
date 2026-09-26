// Detailed page content for Digital Marketing services (keyed by service slug).

const digitalMarketing = {
  seo: {
    image: "/seo-hero.webp",
    stats: [{ v: "3–6", l: "Months to see growth" }, { v: "200+", l: "Audit checkpoints" }, { v: "Monthly", l: "Transparent reports" }],
    overview: [
      "Search Engine Optimisation (SEO) is the process of improving your website so it ranks higher on Google and Bing for the searches your customers make. Unlike ads, organic traffic keeps flowing without paying per click — making SEO one of the highest-ROI marketing channels over time.",
      "Our SEO combines technical fixes, keyword-mapped content, on-page optimisation and authority building. Because modern search also includes AI Overviews and chat assistants, we optimise for those too — so your business is found wherever customers search.",
    ],
    deliverables: [
      { icon: "Wrench", t: "Technical SEO", d: "Crawlability, indexing, Core Web Vitals, schema and site architecture fixes." },
      { icon: "Search", t: "Keyword Research & Mapping", d: "High-intent keywords mapped to the right pages to avoid cannibalisation." },
      { icon: "FileText", t: "On-Page Optimisation", d: "Titles, meta descriptions, headings, internal links and content improvements." },
      { icon: "Newspaper", t: "Content Strategy", d: "Topic clusters and blog content that build topical authority." },
      { icon: "Link2", t: "Link Building & Digital PR", d: "Quality backlinks from relevant, trusted websites — no spam." },
      { icon: "LineChart", t: "Reporting", d: "Monthly reports on rankings, traffic, leads and next steps." },
    ],
    benefits: [
      { t: "Consistent Organic Leads", d: "Traffic that keeps coming without paying per click." },
      { t: "Lower Acquisition Cost", d: "SEO leads get cheaper over time." },
      { t: "Trust & Authority", d: "Top rankings signal credibility to buyers." },
      { t: "Visible in AI Search", d: "Optimised for Google AI Overviews and chat assistants." },
    ],
    process: [
      { t: "SEO Audit", d: "Technical, content and backlink audit with competitor benchmarking." },
      { t: "Strategy & Roadmap", d: "Keyword map and a prioritised 90-day plan." },
      { t: "Implementation", d: "Technical fixes, on-page work, content and links." },
      { t: "Measure & Scale", d: "Monthly reporting and doubling down on what works." },
    ],
    tools: ["Google Search Console", "GA4", "Ahrefs", "SEMrush", "Screaming Frog", "PageSpeed Insights"],
    idealFor: ["Service businesses wanting steady leads", "E-commerce stores", "Institutes and education providers", "B2B companies with long sales cycles"],
    faqs: [
      { q: "What is included in monthly SEO?", a: "Technical monitoring and fixes, on-page optimisation, new content, link building, rank tracking and a monthly report with clear next steps." },
      { q: "Do you do SEO for websites you did not build?", a: "Yes. We start with a full audit of your existing site and work with your current platform and developer if needed." },
    ],
  },

  "local-seo": {
    image: "/local-seo-hero.webp",
    stats: [{ v: "Top 3", l: "Map pack goal" }, { v: "50+", l: "Citations built" }, { v: "30–90", l: "Days to impact" }],
    overview: [
      "When people search 'near me' or add a city name, Google shows a map with three businesses — the Local Pack. Those three businesses get most of the calls and direction requests. Local SEO is how you earn one of those spots.",
      "We optimise your Google Business Profile, build consistent citations, create location pages, add LocalBusiness schema and run a review-generation strategy. For businesses in Kottayam, Kochi, Kerala and beyond, Local SEO is often the fastest way to more calls and walk-ins.",
    ],
    deliverables: [
      { icon: "MapPin", t: "Google Business Profile Optimisation", d: "Categories, services, photos, posts and Q&A fully optimised." },
      { icon: "Building2", t: "Local Citations & NAP", d: "Consistent name, address and phone across directories." },
      { icon: "Star", t: "Review Strategy", d: "Systems to generate and respond to more Google reviews." },
      { icon: "Globe", t: "Location Landing Pages", d: "Dedicated pages for each area or branch you serve." },
      { icon: "Code2", t: "LocalBusiness Schema", d: "Structured data that tells Google exactly where and what you are." },
      { icon: "Crosshair", t: "Map Rank Tracking", d: "Grid-based tracking of your map rankings across your area." },
    ],
    benefits: [
      { t: "More Calls & Visits", d: "Appear when nearby customers are ready to buy." },
      { t: "Beat Local Competitors", d: "Outrank businesses in your area." },
      { t: "Build Reputation", d: "More positive reviews build trust." },
      { t: "Fast Results", d: "Local improvements often show within weeks." },
    ],
    process: [
      { t: "Local Audit", d: "Profile, citations, reviews and competitor analysis." },
      { t: "Profile Optimisation", d: "Google Business Profile and website fixes." },
      { t: "Citations & Reviews", d: "Directory listings and review generation." },
      { t: "Ongoing Posts & Tracking", d: "Weekly posts, photo updates and rank tracking." },
    ],
    tools: ["Google Business Profile", "BrightLocal", "Local Falcon", "Google Search Console", "Justdial / Sulekha listings"],
    idealFor: ["Clinics, hospitals and dentists", "Restaurants, hotels and retail stores", "Institutes and training centres", "Home services and contractors"],
    faqs: [
      { q: "How do I get more Google reviews?", a: "We set up a simple review link, QR codes and automated WhatsApp or SMS requests after each sale, making it easy for happy customers to leave reviews." },
      { q: "Can you help with multiple locations?", a: "Yes. We manage separate profiles and location pages for each branch while keeping your brand consistent." },
    ],
  },

  "geo-generative-engine-optimization": {
    image: "/geo-hero.webp",
    stats: [{ v: "5", l: "AI engines tracked" }, { v: "Monthly", l: "AI visibility report" }, { v: "New", l: "Competitive advantage" }],
    overview: [
      "Generative Engine Optimisation (GEO) is the practice of making your brand the source that AI assistants — ChatGPT, Google Gemini, Perplexity, Microsoft Copilot and Google AI Overviews — trust, mention and cite when people ask questions about your industry.",
      "More buyers now ask AI tools for recommendations instead of scrolling search results. GEO builds a clear brand entity across the web, publishes citation-worthy content with facts and sources, adds structured data and llms.txt, and earns mentions on the sites AI models rely on. We then track how often and how positively AI engines mention your brand.",
    ],
    deliverables: [
      { icon: "Bot", t: "AI Visibility Audit", d: "How ChatGPT, Gemini, Perplexity and Copilot describe you vs competitors today." },
      { icon: "Building2", t: "Entity Optimisation", d: "Consistent brand facts across your site, Google, LinkedIn, Wikidata and directories." },
      { icon: "Quote", t: "Citation-Worthy Content", d: "Clear definitions, original data, statistics and expert quotes AI can cite." },
      { icon: "Code2", t: "Structured Data & llms.txt", d: "Schema markup and machine-readable summaries for AI crawlers." },
      { icon: "Megaphone", t: "Brand Mentions & PR", d: "Mentions on trusted publications, forums and review sites." },
      { icon: "PieChart", t: "AI Share-of-Voice Tracking", d: "Monthly tracking of brand mentions and sentiment in AI answers." },
    ],
    benefits: [
      { t: "Be Recommended by AI", d: "Appear when buyers ask AI for the best provider." },
      { t: "First-Mover Advantage", d: "Most competitors have not started GEO yet." },
      { t: "Stronger SEO Too", d: "GEO improvements also strengthen Google rankings." },
      { t: "Accurate Brand Info", d: "Correct what AI tools say about your business." },
    ],
    process: [
      { t: "AI Visibility Baseline", d: "Test key prompts across AI engines and record results." },
      { t: "Entity & Technical Fixes", d: "Schema, llms.txt, profiles and brand facts aligned." },
      { t: "Content & Mentions", d: "Publish citation-worthy content and earn mentions." },
      { t: "Track & Refine", d: "Monthly prompt tracking and optimisation." },
    ],
    tools: ["ChatGPT", "Google Gemini", "Perplexity", "Microsoft Copilot", "Google AI Overviews", "Schema.org", "Ahrefs Brand Radar"],
    idealFor: ["Brands in competitive categories", "B2B and professional services", "Education and training providers", "Businesses already investing in SEO"],
    faqs: [
      { q: "Can you guarantee ChatGPT will recommend my business?", a: "No one can guarantee AI outputs. GEO significantly improves the likelihood and accuracy of mentions, and we measure progress monthly with consistent prompt tracking." },
      { q: "What is llms.txt?", a: "llms.txt is a plain-text file on your website that summarises your business and key pages for AI systems, making it easier for them to understand and reference your content." },
    ],
  },

  "aeo-answer-engine-optimization": {
    image: "/aeo-hero.webp",
    stats: [{ v: "Position 0", l: "Featured snippet goal" }, { v: "PAA", l: "People Also Ask" }, { v: "Voice", l: "Assistant ready" }],
    overview: [
      "Answer Engine Optimisation (AEO) is optimising your content to be selected as the direct answer — in Google featured snippets, People Also Ask boxes, and voice assistants like Google Assistant, Siri and Alexa.",
      "Answer engines reward content that answers a specific question clearly and concisely, near the top of the page, with supporting structure. We research the real questions your customers ask, create answer-first content and add FAQ, HowTo and QAPage schema so search engines can lift your answer directly.",
    ],
    deliverables: [
      { icon: "HelpCircle", t: "Question Research", d: "Find the real questions customers ask on Google, forums and AI tools." },
      { icon: "FileText", t: "Answer-First Content", d: "Concise 40–60 word answers followed by depth and proof." },
      { icon: "Code2", t: "FAQ / HowTo Schema", d: "Structured data that makes answers machine-readable." },
      { icon: "Award", t: "Featured Snippet Optimisation", d: "Format content as paragraphs, lists and tables that win snippets." },
      { icon: "Mic", t: "Voice Search Optimisation", d: "Conversational phrasing and local intent for voice queries." },
      { icon: "BarChart3", t: "SERP Feature Tracking", d: "Track snippets and People Also Ask appearances monthly." },
    ],
    benefits: [
      { t: "Jump Above Organic Results", d: "Featured snippets appear above position 1." },
      { t: "Build Authority", d: "Being 'the answer' positions you as the expert." },
      { t: "Voice Search Visibility", d: "Be the answer assistants read aloud." },
      { t: "Feeds GEO Too", d: "Answer-ready content is easier for AI to cite." },
    ],
    process: [
      { t: "Question Mapping", d: "Collect and group high-value customer questions." },
      { t: "Content Structuring", d: "Rewrite and create pages in answer-first format." },
      { t: "Schema Implementation", d: "FAQ, HowTo and QAPage markup added and validated." },
      { t: "Track & Expand", d: "Monitor snippets and expand to new questions." },
    ],
    tools: ["AlsoAsked", "AnswerThePublic", "Google Search Console", "SEMrush", "Rich Results Test", "Schema.org"],
    idealFor: ["Businesses with many customer questions", "Healthcare, legal and finance providers", "Education and training providers", "Content-driven brands"],
    faqs: [
      { q: "Does FAQ schema still help in 2026?", a: "Google shows FAQ rich results less often than before, but FAQ schema still helps search engines and AI systems understand your answers, which supports snippets, AI Overviews and GEO." },
      { q: "How long should an answer be to win a featured snippet?", a: "Aim for a direct answer of about 40–60 words right after a question heading, then expand with detail, lists or tables below." },
    ],
  },

  "social-media-marketing": {
    image: "/social-media-hero.webp",
    stats: [{ v: "12–20", l: "Posts per month" }, { v: "5", l: "Platforms supported" }, { v: "Monthly", l: "Analytics report" }],
    overview: [
      "Social media is where customers discover brands, check credibility and decide who to trust. A consistent, well-designed social presence builds awareness and community — and turns followers into enquiries and sales.",
      "We plan, create and manage content across Instagram, Facebook, LinkedIn, YouTube and X — including reels, carousels and short videos — and back it with community management and paid social campaigns. Every month you receive a clear report showing what worked and what we will do next.",
    ],
    deliverables: [
      { icon: "Calendar", t: "Strategy & Content Calendar", d: "Monthly themes, formats and posting schedule aligned to your goals." },
      { icon: "Camera", t: "Posts & Carousels", d: "Scroll-stopping, on-brand graphics and educational carousels." },
      { icon: "Film", t: "Reels & Short Videos", d: "Scripted, edited reels and shorts built for reach." },
      { icon: "MessageCircle", t: "Community Management", d: "Replies to comments and messages to keep your audience engaged." },
      { icon: "Handshake", t: "Influencer Collaborations", d: "Finding and managing relevant creators for your niche." },
      { icon: "BarChart3", t: "Paid Social & Reporting", d: "Boosted posts and ads, plus monthly analytics reports." },
    ],
    benefits: [
      { t: "Build Brand Awareness", d: "Stay visible to your audience every week." },
      { t: "Earn Trust", d: "An active profile shows you are credible and current." },
      { t: "Generate Leads", d: "Turn engagement into DMs, calls and sales." },
      { t: "Save Your Time", d: "We handle content so you focus on business." },
    ],
    process: [
      { t: "Audit & Strategy", d: "Profile audit, competitor review and content pillars." },
      { t: "Content Production", d: "Monthly calendar, design and video creation." },
      { t: "Publish & Engage", d: "Scheduling, posting and community management." },
      { t: "Analyse & Improve", d: "Monthly report and strategy refinement." },
    ],
    tools: ["Meta Business Suite", "LinkedIn Campaign Manager", "Canva Pro", "Adobe Premiere Pro", "CapCut", "Buffer"],
    idealFor: ["Consumer brands and D2C", "Institutes and coaching centres", "B2B companies building on LinkedIn", "Restaurants, cafes and retail"],
    faqs: [
      { q: "Do you shoot photos and videos?", a: "Yes. We can plan shoots at your location or work with footage you provide, and edit everything into platform-ready content." },
      { q: "Do I approve posts before they go live?", a: "Yes. You review the monthly calendar and designs before anything is published." },
    ],
  },

  "performance-marketing": {
    image: "/performance-hero.webp",
    stats: [{ v: "ROAS", l: "Primary metric" }, { v: "Daily", l: "Optimisation" }, { v: "Live", l: "Dashboards" }],
    overview: [
      "Performance marketing is paid advertising measured by results — leads, sales, app installs or revenue — rather than impressions or likes. Every rupee is tracked, and budgets move to what actually drives business outcomes.",
      "We run full-funnel campaigns across Google, Meta, LinkedIn and YouTube with accurate conversion tracking (GA4, GTM, Conversions API and offline conversions). Creative testing, audience strategy and daily optimisation keep your cost per acquisition falling and your return on ad spend rising.",
    ],
    deliverables: [
      { icon: "Compass", t: "Full-Funnel Strategy", d: "Awareness, consideration and conversion campaigns planned together." },
      { icon: "Crosshair", t: "Conversion Tracking", d: "GA4, GTM, Meta CAPI and offline conversion imports set up correctly." },
      { icon: "Split", t: "Creative & Copy Testing", d: "Structured tests of ad creatives, hooks and offers." },
      { icon: "Users", t: "Audience & Retargeting", d: "Lookalikes, interest, intent and retargeting audiences." },
      { icon: "TrendingUp", t: "Budget & Bid Optimisation", d: "Daily optimisation to lower CPA and improve ROAS." },
      { icon: "PieChart", t: "ROAS Dashboards", d: "Live dashboards showing spend, leads, sales and revenue." },
    ],
    benefits: [
      { t: "Pay for Results", d: "Budgets focused on leads and sales, not vanity metrics." },
      { t: "Fast Growth", d: "Scale quickly once winning campaigns are found." },
      { t: "Full Transparency", d: "See exactly where every rupee goes." },
      { t: "Smarter Decisions", d: "Clean data guides marketing and product choices." },
    ],
    process: [
      { t: "Audit & Tracking", d: "Account audit and tracking fixes before spending more." },
      { t: "Strategy & Launch", d: "Campaign structure, audiences and creatives launched." },
      { t: "Test & Optimise", d: "Weekly tests and daily optimisation." },
      { t: "Scale", d: "Increase budget on proven campaigns and channels." },
    ],
    tools: ["Google Ads", "Meta Ads Manager", "LinkedIn Ads", "GA4", "Google Tag Manager", "Looker Studio"],
    idealFor: ["E-commerce and D2C brands", "Lead generation businesses", "Education and admissions campaigns", "App and SaaS growth"],
    faqs: [
      { q: "How do you charge for performance marketing?", a: "Usually a fixed monthly management fee or a percentage of ad spend, agreed upfront. Ad spend is paid directly to the platforms from your account." },
      { q: "Will I own the ad accounts?", a: "Yes. Campaigns run in ad accounts owned by your business, so you keep all data and history." },
    ],
  },

  "google-ads": {
    image: "/google-ads-hero.webp",
    stats: [{ v: "Days", l: "To first leads" }, { v: "Certified", l: "Google Ads team" }, { v: "Weekly", l: "Search term reviews" }],
    overview: [
      "Google Ads puts your business in front of people at the exact moment they search for what you sell. Done well, it is the fastest way to generate high-intent leads. Done poorly, it burns budget on irrelevant clicks.",
      "We manage Search, Performance Max, Shopping, Display and YouTube campaigns with tight keyword control, extensive negative keyword lists, compelling ad copy and landing pages optimised for Quality Score. With offline conversion tracking, we optimise for real customers — not just form fills.",
    ],
    deliverables: [
      { icon: "Search", t: "Search Campaigns", d: "Intent-driven keyword campaigns with strong ad copy and extensions." },
      { icon: "Zap", t: "Performance Max", d: "AI-driven campaigns with quality asset groups and audience signals." },
      { icon: "ShoppingCart", t: "Shopping & Merchant Center", d: "Product feeds and Shopping campaigns for e-commerce." },
      { icon: "Video", t: "YouTube & Display", d: "Video and display campaigns for awareness and remarketing." },
      { icon: "Filter", t: "Keyword & Negative Research", d: "Constant search-term reviews to cut wasted spend." },
      { icon: "Gauge", t: "Quality Score & Landing Pages", d: "Relevance improvements that lower cost per click." },
    ],
    benefits: [
      { t: "Instant Visibility", d: "Appear at the top of Google from day one." },
      { t: "High-Intent Leads", d: "Reach people actively searching for your service." },
      { t: "Controlled Spend", d: "Set budgets and pay only for clicks." },
      { t: "Measurable ROI", d: "Track calls, forms and sales back to keywords." },
    ],
    process: [
      { t: "Account Audit", d: "Review existing campaigns, tracking and wasted spend." },
      { t: "Build & Launch", d: "Structured campaigns, ads and conversion tracking." },
      { t: "Optimise Weekly", d: "Search terms, bids, ads and landing pages improved." },
      { t: "Report & Scale", d: "Monthly results review and scaling plan." },
    ],
    tools: ["Google Ads", "Google Merchant Center", "Keyword Planner", "GA4", "Google Tag Manager", "Looker Studio"],
    idealFor: ["Local service businesses", "E-commerce stores", "Institutes running admissions", "B2B lead generation"],
    faqs: [
      { q: "What is a good budget for Google Ads?", a: "It depends on your industry's cost per click. Many local businesses start with ₹30,000–₹1,00,000 per month in ad spend. We estimate it from keyword data before you commit." },
      { q: "Why are my Google Ads not getting leads?", a: "Common causes are broad keywords without negatives, weak landing pages, and broken conversion tracking. Our audit identifies which apply to you." },
    ],
  },

  "meta-ads": {
    image: "/meta-ads-hero.webp",
    stats: [{ v: "3B+", l: "People on Meta apps" }, { v: "CAPI", l: "Server-side tracking" }, { v: "Weekly", l: "Creative tests" }],
    overview: [
      "Meta Ads — on Facebook, Instagram, Messenger and WhatsApp — let you reach precisely the people most likely to buy, based on interests, behaviour and lookalike audiences. It is the best channel for creating demand and scaling D2C brands.",
      "Success on Meta depends on creative and data. We produce scroll-stopping creatives (static, video and reels), set up Pixel plus Conversions API for reliable tracking, and run structured tests to find winning hooks and audiences. Click-to-WhatsApp campaigns turn ad interest into direct conversations.",
    ],
    deliverables: [
      { icon: "Target", t: "Lead Gen & Sales Campaigns", d: "Campaigns built for leads, purchases or messages." },
      { icon: "Camera", t: "Creative Production", d: "Static, carousel, video and reel ad creatives." },
      { icon: "Crosshair", t: "Pixel & Conversions API", d: "Accurate tracking even with browser privacy limits." },
      { icon: "Users", t: "Lookalike & Retargeting", d: "Audiences built from your best customers and visitors." },
      { icon: "Split", t: "Creative A/B Testing", d: "Test hooks, formats and offers to find winners." },
      { icon: "MessageCircle", t: "Click-to-WhatsApp Ads", d: "Ads that start WhatsApp conversations with prospects." },
    ],
    benefits: [
      { t: "Precise Targeting", d: "Reach the right people by interest and behaviour." },
      { t: "Create Demand", d: "Introduce your brand to people not yet searching." },
      { t: "Cost-Effective Scale", d: "Reach large audiences at low cost." },
      { t: "Direct Conversations", d: "WhatsApp ads start sales conversations instantly." },
    ],
    process: [
      { t: "Audit & Tracking", d: "Pixel, CAPI and account structure reviewed." },
      { t: "Creative & Audiences", d: "Creatives produced and audiences built." },
      { t: "Launch & Test", d: "Structured testing of creatives and audiences." },
      { t: "Optimise & Scale", d: "Scale winners and refresh creatives regularly." },
    ],
    tools: ["Meta Ads Manager", "Meta Business Suite", "Conversions API", "WhatsApp Business", "Canva / Adobe", "GA4"],
    idealFor: ["D2C and e-commerce brands", "Real estate and education leads", "Restaurants and local offers", "Events and launches"],
    faqs: [
      { q: "How often should ad creatives be refreshed?", a: "Typically every 2–4 weeks, or sooner when frequency rises and performance drops. We keep a pipeline of new creatives ready." },
      { q: "Can Meta ads generate leads directly on WhatsApp?", a: "Yes. Click-to-WhatsApp ads open a chat with your business, which often converts better than forms for Indian audiences." },
    ],
  },

  "content-marketing": {
    image: "/content-marketing-hero.webp",
    stats: [{ v: "4–12", l: "Articles per month" }, { v: "E-E-A-T", l: "Quality standard" }, { v: "100%", l: "Human edited" }],
    overview: [
      "Content marketing attracts customers by answering their questions and solving their problems before they are ready to buy. Helpful blogs, guides and case studies build trust, rank on Google and get cited by AI assistants.",
      "We build topic-cluster strategies around your services, then write expert content that meets Google's E-E-A-T standards (experience, expertise, authoritativeness, trust). Every piece is researched, written and fact-checked by humans, optimised for search and structured for AI citations.",
    ],
    deliverables: [
      { icon: "Layers", t: "Content Strategy & Clusters", d: "Pillar pages and supporting articles mapped to keywords." },
      { icon: "PenTool", t: "SEO Blog Writing", d: "In-depth, original articles optimised for search intent." },
      { icon: "FileText", t: "Pillar Pages & Guides", d: "Comprehensive guides that become go-to resources." },
      { icon: "Briefcase", t: "Case Studies & Whitepapers", d: "Proof-driven content that helps close deals." },
      { icon: "Video", t: "Video Scripts", d: "Scripts for YouTube, reels and explainer videos." },
      { icon: "RefreshCw", t: "Content Refresh", d: "Update and repurpose old content to regain rankings." },
    ],
    benefits: [
      { t: "Compounding Traffic", d: "Articles keep bringing visitors for years." },
      { t: "Establish Expertise", d: "Position your team as industry experts." },
      { t: "Support Sales", d: "Content answers objections before sales calls." },
      { t: "Fuel Every Channel", d: "Repurpose content for social, email and ads." },
    ],
    process: [
      { t: "Research & Strategy", d: "Audience questions, keywords and content gaps." },
      { t: "Editorial Calendar", d: "Monthly plan of topics and formats." },
      { t: "Create & Optimise", d: "Writing, editing, SEO and design." },
      { t: "Publish & Promote", d: "Publishing, internal linking and distribution." },
    ],
    tools: ["Ahrefs", "SEMrush", "Surfer SEO", "Grammarly", "Google Docs", "WordPress"],
    idealFor: ["B2B and SaaS companies", "Education and training providers", "Healthcare and professional services", "Brands building authority"],
    faqs: [
      { q: "Who writes the content?", a: "Experienced writers with subject research, edited by our SEO team. For technical topics we interview your experts to add genuine first-hand experience." },
      { q: "How soon will content rank?", a: "New articles typically start ranking in 2–6 months depending on competition and your site's authority." },
    ],
  },

  "email-marketing": {
    image: "/email-marketing-hero.webp",
    stats: [{ v: "36:1", l: "Typical email ROI" }, { v: "98%", l: "WhatsApp open rates" }, { v: "24/7", l: "Automated flows" }],
    overview: [
      "Email and WhatsApp let you talk directly to people who already know you — without paying for every impression. Automated flows nurture leads, recover abandoned carts and bring customers back again and again.",
      "We set up and manage email newsletters, automated flows and WhatsApp Business API campaigns, with proper deliverability (SPF, DKIM, DMARC), smart segmentation and revenue tracking. It is often the highest-ROI channel for businesses that already have customers.",
    ],
    deliverables: [
      { icon: "Workflow", t: "Automated Flows", d: "Welcome, nurture, abandoned cart and win-back sequences." },
      { icon: "Mail", t: "Newsletter Design & Copy", d: "On-brand, mobile-friendly newsletters that get read." },
      { icon: "MessageCircle", t: "WhatsApp Business API", d: "Broadcasts, notifications and chat automation on WhatsApp." },
      { icon: "Filter", t: "Segmentation", d: "Target by behaviour, interest and purchase history." },
      { icon: "ShieldCheck", t: "Deliverability Setup", d: "SPF, DKIM and DMARC configured to land in the inbox." },
      { icon: "BarChart3", t: "Revenue Reporting", d: "Opens, clicks, conversions and revenue per campaign." },
    ],
    benefits: [
      { t: "Own Your Audience", d: "No algorithm decides who sees your message." },
      { t: "Highest ROI Channel", d: "Low cost, high return communication." },
      { t: "Automated Sales", d: "Flows sell for you around the clock." },
      { t: "Stronger Loyalty", d: "Stay top of mind with existing customers." },
    ],
    process: [
      { t: "Audit & Setup", d: "Platform, list health and deliverability setup." },
      { t: "Flows First", d: "Build the automations that earn revenue daily." },
      { t: "Campaigns", d: "Regular newsletters and WhatsApp broadcasts." },
      { t: "Test & Optimise", d: "Subject line, timing and content testing." },
    ],
    tools: ["Klaviyo", "Mailchimp", "Brevo", "Zoho Campaigns", "WhatsApp Business API", "Interakt / WATI"],
    idealFor: ["E-commerce and D2C brands", "Institutes nurturing enquiries", "B2B companies with long sales cycles", "Businesses with existing customer lists"],
    faqs: [
      { q: "Is WhatsApp marketing allowed?", a: "Yes, through the official WhatsApp Business API with customer opt-in and approved message templates. We set this up correctly so your number stays in good standing." },
      { q: "Do I need a large email list to start?", a: "No. Automated flows work from your first subscribers, and we also help you grow your list with lead magnets and signup forms." },
    ],
  },

  "conversion-rate-optimization": {
    image: "/cro-hero.webp",
    stats: [{ v: "A/B", l: "Statistically tested" }, { v: "2–5%", l: "Typical baseline CR" }, { v: "Monthly", l: "Test cycles" }],
    overview: [
      "Conversion Rate Optimisation (CRO) increases the percentage of visitors who become leads or customers. Doubling your conversion rate has the same effect as doubling your traffic — without paying for more ads.",
      "We use analytics, heatmaps, session recordings and user feedback to find where visitors hesitate, then run hypothesis-driven A/B tests on headlines, layouts, offers, forms and checkout. Every change is measured, so you only keep what genuinely improves results.",
    ],
    deliverables: [
      { icon: "FileSearch", t: "Funnel & Analytics Audit", d: "Find the pages and steps where you lose the most visitors." },
      { icon: "Eye", t: "Heatmaps & Recordings", d: "See how real users interact with your pages." },
      { icon: "FlaskConical", t: "Hypothesis-Driven A/B Tests", d: "Structured experiments with clear success metrics." },
      { icon: "ClipboardCheck", t: "Form & Checkout Optimisation", d: "Fewer fields, clearer steps, more completions." },
      { icon: "Gauge", t: "Page Speed Improvements", d: "Faster pages that keep visitors engaged." },
      { icon: "LineChart", t: "Test Reporting", d: "Clear results and learnings from every experiment." },
    ],
    benefits: [
      { t: "More Revenue, Same Traffic", d: "Get more from visitors you already have." },
      { t: "Lower Ad Costs", d: "Higher conversion rates reduce cost per acquisition." },
      { t: "Evidence-Based Changes", d: "Decisions backed by data, not opinions." },
      { t: "Better User Experience", d: "Improvements that customers appreciate." },
    ],
    process: [
      { t: "Research", d: "Analytics, heatmaps and user feedback analysed." },
      { t: "Hypotheses", d: "Prioritised test ideas based on impact and effort." },
      { t: "Test", d: "A/B tests run until statistically significant." },
      { t: "Implement & Repeat", d: "Winners rolled out and new tests planned." },
    ],
    tools: ["GA4", "Microsoft Clarity", "Hotjar", "VWO", "Google Tag Manager", "Looker Studio"],
    idealFor: ["E-commerce stores with steady traffic", "Businesses spending on paid ads", "SaaS signup and onboarding flows", "Lead generation websites"],
    faqs: [
      { q: "How much traffic do I need for A/B testing?", a: "Reliable A/B tests usually need a few thousand visitors per month to the tested page. With less traffic, we focus on research-led improvements and usability testing instead." },
      { q: "How long does a test run?", a: "Typically two to four weeks, until results reach statistical significance and cover full weekly cycles." },
    ],
  },
};

export default digitalMarketing;
