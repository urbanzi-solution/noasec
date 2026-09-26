import { SITE, absoluteUrl, isRealProfile } from "@/data/site";

// JSON-LD generators (schema.org). Rendered server-side via <JsonLd />
// so Google and AI crawlers see them in the initial HTML.

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORG_ID,
  name: SITE.name,
  legalName: SITE.legalName,
  description: SITE.description,
  url: SITE.url,
  logo: absoluteUrl(SITE.logo),
  image: absoluteUrl(SITE.ogImage),
  email: SITE.email,
  telephone: SITE.phone,
  foundingDate: String(SITE.foundingYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  openingHours: SITE.hours,
  areaServed: SITE.areaServed.map((name) => ({ "@type": "Country", name })),
  sameAs: Object.values(SITE.social).filter(isRealProfile),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phone,
    email: SITE.email,
    contactType: "sales",
    availableLanguage: ["English", "Malayalam", "Hindi"],
  },
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE.url,
  name: SITE.name,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-IN",
});

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.href),
  })),
});

export const serviceSchema = ({ name, description, href, category }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url: absoluteUrl(href),
  serviceType: name,
  category,
  provider: { "@id": ORG_ID },
  areaServed: SITE.areaServed.map((n) => ({ "@type": "Country", name: n })),
});

export const itemListSchema = (name, items) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name,
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    url: absoluteUrl(it.href),
  })),
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const articleSchema = (post) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.description,
  datePublished: post.published,
  dateModified: post.updated || post.published,
  author: { "@type": "Organization", name: post.author || SITE.name, url: SITE.url },
  publisher: { "@id": ORG_ID },
  mainEntityOfPage: absoluteUrl(post.href || `/blog/${post.slug}`),
  image: absoluteUrl(SITE.ogImage),
});

export const courseSchema = ({ name, description, href, level, duration }) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name,
  description,
  url: absoluteUrl(href),
  provider: { "@type": "Organization", "@id": ORG_ID, name: SITE.name, sameAs: SITE.url },
  educationalLevel: level,
  inLanguage: "en",
  hasCourseInstance: [
    { "@type": "CourseInstance", courseMode: "Online", ...(duration && { courseWorkload: duration }) },
    {
      "@type": "CourseInstance",
      courseMode: "Onsite",
      ...(duration && { courseWorkload: duration }),
      location: {
        "@type": "Place",
        name: SITE.legalName,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.region,
          postalCode: SITE.address.postalCode,
          addressCountry: SITE.address.country,
        },
      },
    },
  ],
});
