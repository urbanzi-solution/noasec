"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceSelector() {
  const services = [
    {
      title: "Unknown vulnerabilities?",
      action: "VULNERABILITY ASSESSMENT",
      href: "/services/vulnerability-assessment-services",
    },
    {
      title: "Web app at risk?",
      action: "WEB APPLICATION PENTESTING",
      href: "/services/web-application-penetration-testing",
    },
    {
      title: "Ongoing monitoring?",
      action: "MANAGED SOC OPERATIONS",
      href: "/services/managed-soc",
    },
    {
      title: "Incident in progress?",
      action: "INCIDENT RESPONSE SERVICES",
      href: "/services/incident-response-services",
    },
  ];

  // Animation Variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-[#050b14] text-white -mt-15">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-10">
            Which Service Do You Need?
          </motion.h2>

          <div className="space-y-4">
            {services.map((itemData, i) => (
              <motion.div key={i} variants={item}>
                <Link
                  href={itemData.href}
                  className="group flex items-start gap-4 bg-[#0a0f18] hover:bg-[#0f1623] border border-white/5 p-5 transition"
                >
                  <div className="w-1 h-full bg-blue-500 group-hover:bg-blue-400" />

                  <div>
                    <p className="text-sm text-gray-400">
                      {itemData.title}
                    </p>
                    <p className="text-sm font-semibold tracking-wide text-white mt-1">
                      → {itemData.action}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full h-[320px] md:h-[360px] border border-white/10">
            <Image
              src="/service-bg.jpg"
              alt="consultation"
              fill
              loading="lazy"
              className="object-cover opacity-40"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#0a0f18]/90 backdrop-blur-md border border-white/10 p-6 md:p-8 max-w-sm w-full text-center shadow-xl">
              <div className="text-blue-400 text-2xl mb-4">🎧</div>

              <h3 className="text-lg font-semibold mb-2">
                Speak with a Consultant
              </h3>

              <p className="text-sm text-gray-400 mb-6">
                Our analysts are available 24/7 for critical response and architectural planning.
              </p>

              <Link
                href="/contact"
                className="block bg-blue-500 hover:bg-blue-600 text-white py-3 text-sm font-semibold tracking-wide"
              >
                SCHEDULE CONSULTATION
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="border-t border-white/5 bg-gradient-to-b from-[#050b14] to-[#060d18] py-20 text-center px-6 -mt-15"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Train Your Team
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Pair professional services with certified cybersecurity training to build long-term
          resilience and internal expertise within your organization.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/courses"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 font-semibold text-sm tracking-wide"
          >
            EXPLORE CYBERSECURITY COURSES
          </Link>

          <Link
            href="/contact"
            className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 font-semibold text-sm tracking-wide"
          >
            CONTACT US FOR A QUOTE
          </Link>
        </div>
      </motion.div>
    </section>
  );
}