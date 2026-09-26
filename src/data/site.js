// ============================================================
// SITE CONFIG — change brand name, domain, contact here ONCE.
// Every page, meta tag, schema, sitemap and footer reads from this.
// ============================================================

export const SITE = {
  name: "NoaSec",
  legalName: "NoaSec Solutions",
  tagline: "Cybersecurity, Branding, Web Development & Digital Marketing",
  description:
    "NoaSec Solutions, Kottayam: cybersecurity services and training, plus branding, web development, UI/UX, SEO, GEO and digital marketing for growing businesses.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.noasec.com").replace(/\/$/, ""),
  locale: "en_IN",
  ogImage: "/og-image.jpg",
  logo: "/logo.webp",
  foundingYear: 2024,

  phone: "+917034733944",
  phoneDisplay: "+91 70347 33944",
  whatsapp: "917034733944",
  email: "Info@noasecsolutions.com",

  address: {
    street: "R4, Centerspace, XIII/284 A, Anjanasree Arcade, Annankunnu Road, Nagampadom",
    city: "Kottayam",
    region: "Kerala",
    postalCode: "686001",
    country: "IN",
  },
  geo: { lat: 9.5916, lng: 76.5222 },
  areaServed: ["India", "United Arab Emirates", "United States", "United Kingdom"],
  hours: "Mo-Sa 09:30-18:30",

  social: {
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
    x: "https://x.com/",
    youtube: "https://www.youtube.com/",
  },

  // Google Search Console / Bing verification codes (optional)
  verification: { google: "", bing: "" },
};

export const absoluteUrl = (path = "/") => `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;

// Placeholder profiles (bare "https://www.instagram.com/") are skipped in the footer and schema `sameAs`
// until real profile URLs are filled in above.
export const isRealProfile = (url) => {
  try {
    return new URL(url).pathname.replace(/\/+$/, "").length > 0;
  } catch {
    return false;
  }
};
