import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton"; // ✅ add this

export const metadata = {
  title: "NoaSec",
  description: "Cybersecurity Training & Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#05070d] text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* ✅ Floating WhatsApp Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}