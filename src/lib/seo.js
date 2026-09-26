import { SITE, absoluteUrl } from "@/data/site";

// One helper for every page's metadata: title, description,
// canonical, Open Graph and Twitter stay consistent everywhere.
// Appends "| Brand" to the title; pass `absoluteTitle: true` to skip (e.g. homepage).
export function buildMetadata({ title: raw, description, path = "/", keywords = [], image, type = "website", noindex = false, absoluteTitle = false }) {
  const url = absoluteUrl(path);
  const img = image || SITE.ogImage;
  const title = absoluteTitle ? raw : `${raw} | ${SITE.name}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: SITE.name,
      locale: SITE.locale,
      // Only the default OG image is known to be 1200x630; page images declare no size.
      images: [image ? { url: img, alt: title } : { url: img, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [img] },
    robots: noindex ? { index: false, follow: true } : undefined,
  };
}
