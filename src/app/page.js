import Hero from "@/components/Hero";
import NewGen from "@/components/NewGen";
import Services from "@/components/Services";
import Programs from "@/components/Programs";
import WhyChooseUs from "@/components/WhyChooseUs";


export const metadata = {
  title: " NoaSec Cybersecurity Training & Services | Kerala",
  description:
    "NoaSec Solutions offers real-world cybersecurity training and expert security services in Kerala.",

  metadataBase: new URL("https://noasec.com/"),

  alternates: {
    canonical: "https://noasec.com/",
  },

  icons: {
    icon: "/favicon.ico",          // ✅ main favicon
    shortcut: "/favicon.ico",      // ✅ browser shortcut icon
    apple: "/apple-touch-icon.png" // ✅ for iPhone (optional)
  },

  openGraph: {
    url: "https://noasec.com/",
    title: "NoaSec Cybersecurity Training & Services |Kerala",
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
      <Hero />
      <NewGen />
      <Services />
      <Programs />
      <WhyChooseUs />
    </>
  );
}
