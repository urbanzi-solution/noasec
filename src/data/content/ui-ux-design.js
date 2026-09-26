// Detailed page content for UI/UX Design services (keyed by service slug).

const uiUxDesign = {
  "website-design": {
    image: "/website-uiux-hero.webp",
    stats: [{ v: "3", l: "Breakpoints designed" }, { v: "WCAG", l: "Accessibility aware" }, { v: "2–4", l: "Weeks typical" }],
    overview: [
      "Website design is about far more than looks. Good design guides visitors to the information they need, builds trust in seconds and makes the next step obvious — whether that is calling you, booking a demo or buying a product.",
      "We design custom websites in Figma, starting from your sitemap and wireframes and finishing with pixel-perfect, responsive mockups and an interactive prototype. Designs are handed over with a clean component library and specs so development is fast and accurate — whether we build it or your own team does.",
    ],
    deliverables: [
      { icon: "Map", t: "Sitemap & Information Architecture", d: "A logical page structure that is easy to navigate and SEO friendly." },
      { icon: "LayoutTemplate", t: "Wireframes", d: "Low-fidelity layouts to agree content and flow before visual design." },
      { icon: "Paintbrush", t: "High-Fidelity Design", d: "On-brand, modern visual design for every key page." },
      { icon: "MonitorSmartphone", t: "Responsive Layouts", d: "Desktop, tablet and mobile designs for every template." },
      { icon: "MousePointerClick", t: "Interactive Prototype", d: "A clickable prototype to experience the site before it is built." },
      { icon: "Ruler", t: "Developer Handoff", d: "Components, styles, spacing and assets organised for developers." },
    ],
    benefits: [
      { t: "Stronger First Impression", d: "A professional design builds instant trust." },
      { t: "Higher Conversions", d: "Clear hierarchy and CTAs guide visitors to act." },
      { t: "Faster Development", d: "Organised designs cut build time and errors." },
      { t: "Consistent Brand", d: "Every page looks and feels like one brand." },
    ],
    process: [
      { t: "Research & Brief", d: "Goals, audience, competitors and inspiration." },
      { t: "Structure & Wireframes", d: "Sitemap and wireframes agreed with you." },
      { t: "Visual Design", d: "High-fidelity designs with revision rounds." },
      { t: "Prototype & Handoff", d: "Interactive prototype and developer-ready files." },
    ],
    tools: ["Figma", "FigJam", "Adobe Photoshop", "Adobe Illustrator", "Maze", "Unsplash / custom imagery"],
    idealFor: ["Businesses redesigning an old website", "Startups needing a launch website", "In-house dev teams needing designs", "Agencies needing white-label design"],
    faqs: [
      { q: "Do you design in Figma?", a: "Yes. All our designs are created in Figma, and you get full access to the files." },
      { q: "How many revision rounds are included?", a: "Typically two to three revision rounds per stage, agreed in the proposal." },
    ],
  },

  "mobile-app-design": {
    image: "/mobile-uiux-hero.webp",
    stats: [{ v: "iOS + Android", l: "Guidelines followed" }, { v: "5+", l: "Usability testers" }, { v: "3–6", l: "Weeks typical" }],
    overview: [
      "In mobile apps, small details decide whether users stay or uninstall. Clear navigation, readable screens, thumb-friendly controls and smooth interactions turn first-time users into loyal ones.",
      "We design mobile app experiences that follow Apple's Human Interface Guidelines and Google's Material Design, validated with real users before development begins. You get user flows, wireframes, polished UI, micro-interactions and a reusable design system for your app.",
    ],
    deliverables: [
      { icon: "Workflow", t: "User Flows & Journeys", d: "Mapped journeys for onboarding, core tasks and edge cases." },
      { icon: "LayoutTemplate", t: "Wireframes", d: "Screen layouts and navigation agreed before visual design." },
      { icon: "Smartphone", t: "App UI Design", d: "Beautiful, platform-appropriate screens for iOS and Android." },
      { icon: "Sparkles", t: "Micro-Interactions", d: "Animations and feedback that make the app feel responsive." },
      { icon: "Users", t: "Usability Testing", d: "Prototype tests with real users to catch problems early." },
      { icon: "Component", t: "App Design System", d: "Reusable components and styles for consistent future screens." },
    ],
    benefits: [
      { t: "Higher Retention", d: "Easy-to-use apps keep users coming back." },
      { t: "Better Store Ratings", d: "Good UX leads to better reviews." },
      { t: "Lower Dev Rework", d: "Problems fixed in design, not in code." },
      { t: "Faster Onboarding", d: "Users understand the app in their first session." },
    ],
    process: [
      { t: "Research", d: "Users, competitors and core use cases." },
      { t: "Flows & Wireframes", d: "Structure and navigation defined." },
      { t: "UI & Prototype", d: "Visual design and interactive prototype." },
      { t: "Test & Handoff", d: "Usability testing, refinements and developer handoff." },
    ],
    tools: ["Figma", "Protopie", "Lottie", "Maze", "Material Design 3", "Apple HIG"],
    idealFor: ["Startups building a new app", "Businesses redesigning an existing app", "Teams with poor app ratings", "Development teams needing UI"],
    faqs: [
      { q: "Can you redesign my existing app?", a: "Yes. We start with a UX audit of your current app and user feedback, then redesign the screens that matter most." },
      { q: "Do you create app store screenshots?", a: "Yes. We can design App Store and Play Store screenshots and preview graphics as part of the project." },
    ],
  },

  "ux-research-audit": {
    image: "/uiux-audit-hero.webp",
    stats: [{ v: "50+", l: "Heuristic checkpoints" }, { v: "WCAG 2.2", l: "Accessibility review" }, { v: "1–3", l: "Weeks typical" }],
    overview: [
      "If visitors arrive but do not convert, the problem is usually friction you cannot see — confusing navigation, unclear copy, slow forms or broken mobile layouts. A UX audit finds exactly where and why users drop off.",
      "Our UX research combines expert heuristic review, analytics, heatmaps, session recordings and, where useful, user interviews. You receive a prioritised list of issues ranked by impact and effort, with clear recommendations your team can act on immediately.",
    ],
    deliverables: [
      { icon: "ListChecks", t: "Heuristic Evaluation", d: "Expert review against proven usability principles." },
      { icon: "Eye", t: "Heatmaps & Recordings", d: "Analysis of clicks, scrolls and real user sessions." },
      { icon: "Filter", t: "Funnel Analysis", d: "Where users drop off in key journeys and why." },
      { icon: "Accessibility", t: "Accessibility Review", d: "WCAG checks for contrast, keyboard use and screen readers." },
      { icon: "Users", t: "User Interviews & Surveys", d: "Direct feedback from your real customers." },
      { icon: "ClipboardCheck", t: "Prioritised Action Plan", d: "Findings ranked by impact and effort with clear fixes." },
    ],
    benefits: [
      { t: "Find Hidden Revenue Leaks", d: "Discover the friction costing you customers." },
      { t: "Data-Backed Decisions", d: "Stop guessing what to redesign." },
      { t: "Quick Wins First", d: "Prioritised list shows what to fix first." },
      { t: "More Inclusive Product", d: "Accessibility improvements reach more users." },
    ],
    process: [
      { t: "Goals & Access", d: "Define key journeys and connect analytics tools." },
      { t: "Research", d: "Heuristic review, data analysis and user feedback." },
      { t: "Synthesis", d: "Issues grouped, rated and turned into recommendations." },
      { t: "Presentation", d: "Walkthrough of findings with your team and a written report." },
    ],
    tools: ["Microsoft Clarity", "Hotjar", "GA4", "Maze", "axe DevTools", "Lighthouse"],
    idealFor: ["Websites with high bounce rates", "Stores with low checkout completion", "SaaS products with poor activation", "Teams planning a redesign"],
    faqs: [
      { q: "How is a UX audit different from a redesign?", a: "An audit diagnoses problems and recommends fixes; a redesign implements changes. Many clients start with an audit so the redesign targets the right problems." },
      { q: "What access do you need?", a: "Read access to analytics and, ideally, permission to install a heatmap tool such as Microsoft Clarity for two to four weeks." },
    ],
  },

  "design-systems": {
    image: "/design-systems-hero.webp",
    stats: [{ v: "50%", l: "Faster UI delivery (typical)" }, { v: "1", l: "Source of truth" }, { v: "Figma + Code", l: "Synced components" }],
    overview: [
      "As a product grows, inconsistent buttons, colours and spacing creep in, and every new screen takes longer to design and build. A design system solves this with a shared library of reusable components and rules.",
      "We build design systems in Figma with matching React components, design tokens and documentation. Designers and developers work from the same source of truth, shipping new features faster while keeping the product consistent and accessible.",
    ],
    deliverables: [
      { icon: "Palette", t: "Design Tokens", d: "Colours, typography, spacing, radius and shadows defined as tokens." },
      { icon: "Component", t: "Figma Component Library", d: "Buttons, inputs, cards, navigation and more with variants." },
      { icon: "Code2", t: "Coded React Components", d: "Production-ready components that match the designs exactly." },
      { icon: "FileText", t: "Usage Documentation", d: "When and how to use each component, with examples." },
      { icon: "Accessibility", t: "Accessibility Built In", d: "Contrast, focus states and ARIA patterns baked into components." },
      { icon: "GraduationCap", t: "Team Training", d: "Workshops so your team adopts and maintains the system." },
    ],
    benefits: [
      { t: "Ship Faster", d: "Build new screens from ready-made parts." },
      { t: "Consistent Experience", d: "Every screen looks and behaves the same." },
      { t: "Easier Scaling", d: "New team members get productive quickly." },
      { t: "Less Design Debt", d: "Fewer one-off styles to maintain." },
    ],
    process: [
      { t: "UI Inventory", d: "Audit existing screens and components." },
      { t: "Foundations", d: "Tokens and core styles defined." },
      { t: "Components", d: "Design and code the component library." },
      { t: "Docs & Adoption", d: "Documentation, training and rollout support." },
    ],
    tools: ["Figma", "Tokens Studio", "React", "Storybook", "Tailwind CSS", "Chromatic"],
    idealFor: ["SaaS and product companies", "Teams with multiple designers/developers", "Businesses with several websites or apps", "Companies scaling their product"],
    faqs: [
      { q: "Can you build a design system from our existing product?", a: "Yes. We audit your current UI, consolidate duplicate styles and build the system around what already works." },
      { q: "Which frameworks do you support?", a: "We most commonly deliver React components with Tailwind CSS and Storybook, and can adapt to your stack." },
    ],
  },
};

export default uiUxDesign;
