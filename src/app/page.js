import Hero from "@/components/Hero";
import NewGen from "@/components/NewGen";
import Services from "@/components/Services";
import Programs from "@/components/Programs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Script from "next/script";

export const metadata = {
  title: "NoaSec Cybersecurity Training & Services | Kottayam, Kerala",
  description:
    "NoaSec Solutions offers real-world cybersecurity training and expert security services in Kerala.",

  metadataBase: new URL("https://noasec.com/"),

  alternates: {
    canonical: "https://noasec.com/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    url: "https://noasec.com/",
    title: "NoaSec Cybersecurity Training & Services | Kottayam, Kerala",
    description:
      "Learn cybersecurity with real-world training and protect your business.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NoaSec Cybersecurity Training",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      {/* ✅ LocalBusiness Schema */}
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "NoaSec",
            url: "https://noasec.com/",
            telephone: "+917034733944",
            email: "Info@noasecsolutions.com",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "R4, Centerspace, XIII/284 A, Anjanasree Arcade, Annankunnu Road, Nagampadom",
              addressLocality: "Kottayam",
              postalCode: "686001",
              addressCountry: "IN",
            },
            areaServed: "IN",
            description:
              "Cybersecurity training and professional security services provider in Kerala, India.",
          }),
        }}
      />

      <Hero />
      <NewGen />
      <Services />
      <Programs />
      <WhyChooseUs />
    </>
  );
}