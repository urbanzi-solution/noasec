import { SITE } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck } from "lucide-react";

export const metadata = buildMetadata({
  title: "Contact Us — Free Proposal & Consultation",
  description: `Contact ${SITE.name}, Kottayam for cybersecurity, training, branding, web development and digital marketing. Call ${SITE.phoneDisplay} or send an enquiry.`,
  path: "/contact",
});

export default function ContactPage() {
  const a = SITE.address;
  return (
    <>
      <PageHero
        eyebrow="Direct Dispatch"
        title="Let's Secure & Build Your Vision"
        intro="Tell us about your organization's security posture, training objectives, or digital growth goals. Our specialists reply within 1 business day with actionable next steps."
        breadcrumbs={[{ name: "Contact", href: "/contact" }]}
        cta={false}
      />

      <section className="bg-[#05070d] px-6 py-20 md:px-12 bg-cyber-grid">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-12 items-start">
          {/* Main Enquiry Form (7 cols) */}
          <div className="glass-card rounded-2xl p-6 sm:p-10 lg:col-span-7">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                Secure Transmission
              </span>
            </div>
            <h2 className="mb-2 text-2xl sm:text-3xl font-extrabold text-white">
              Send an Enquiry
            </h2>
            <p className="mb-8 text-xs sm:text-sm text-gray-400 leading-relaxed">
              Fill in your details below and our team will get in touch directly.
            </p>
            <ContactForm />
          </div>

          {/* Contact Details & Map (5 cols) */}
          <aside className="space-y-6 lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <ShieldCheck size={20} className="text-cyan-400" />
                <span>Operational Headquarters</span>
              </h2>

              <address className="space-y-5 text-sm not-italic">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                    <MapPin size={17} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Academy & Office</p>
                    <p className="text-gray-200 mt-0.5 leading-relaxed">
                      {a.street}, {a.city}, {a.region} — {a.postalCode}, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                    <Phone size={17} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Phone &amp; Hotline</p>
                    <a href={`tel:${SITE.phone}`} className="text-cyan-400 hover:text-cyan-300 font-semibold block mt-0.5">
                      {SITE.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                    <Mail size={17} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Electronic Mail</p>
                    <a href={`mailto:${SITE.email}`} className="text-gray-200 hover:text-cyan-300 transition block mt-0.5">
                      {SITE.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                    <Clock size={17} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Operational Hours</p>
                    <p className="text-gray-200 mt-0.5">Monday – Saturday: 9:30 AM – 6:30 PM IST</p>
                    <p className="text-[11px] text-cyan-400 mt-0.5">24/7 Hotline for Security Incidents</p>
                  </div>
                </div>
              </address>

              {/* Direct WhatsApp Quick Chat */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full justify-center text-center text-xs uppercase tracking-wider py-3"
                >
                  <MessageSquare size={16} className="text-emerald-400" />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="glass-card rounded-2xl p-2 overflow-hidden">
              <div className="h-[220px] w-full overflow-hidden rounded-xl border border-white/10">
                <iframe
                  title={`${SITE.name} location map`}
                  src={`https://www.google.com/maps?q=${SITE.geo.lat},${SITE.geo.lng}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
