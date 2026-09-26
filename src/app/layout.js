import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/data/site";
import { organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} | ${SITE.tagline}`,
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  verification: {
    google: SITE.verification.google || undefined,
    other: SITE.verification.bing ? { "msvalidate.01": SITE.verification.bing } : undefined,
  },
};

export const viewport = {
  themeColor: "#05070d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body className="bg-[#05070d] text-white">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
