"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BeakerIcon,
  UserGroupIcon,
  ChartBarIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

export default function WhyChooseUs() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#05070d] text-white py-20 px-6 md:px-16 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto -mt-19">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Professionals Choose Us
          </h2>
          <p className="text-gray-400 text-sm mt-3">
            Bridging the gap between academic theory and operational excellence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">

          {/* Card 1 */}
          <div className="bg-[#0c0f17] p-6 rounded-md border border-white/5 hover:border-[#7dd3fc]/40 transition">
            <BeakerIcon className="w-6 h-6 text-[#7dd3fc] mb-4" />
            <h3 className="font-semibold mb-2">Hands-on Labs</h3>
            <p className="text-gray-400 text-sm">
              Real-world simulated environments to test your skills in combat conditions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0c0f17] p-6 rounded-md border border-white/5 hover:border-[#7dd3fc]/40 transition">
            <UserGroupIcon className="w-6 h-6 text-[#7dd3fc] mb-4" />
            <h3 className="font-semibold mb-2">Practitioner-Led</h3>
            <p className="text-gray-400 text-sm">
              Learn from experts who spend their days fighting actual cyber threats.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0c0f17] p-6 rounded-md border border-white/5 hover:border-[#7dd3fc]/40 transition">
            <ChartBarIcon className="w-6 h-6 text-[#7dd3fc] mb-4" />
            <h3 className="font-semibold mb-2">Career Pathways</h3>
            <p className="text-gray-400 text-sm">
              Clear roadmap from beginner to elite security operator roles.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0c0f17] p-6 rounded-md border border-white/5 hover:border-[#7dd3fc]/40 transition">
            <BriefcaseIcon className="w-6 h-6 text-[#7dd3fc] mb-4" />
            <h3 className="font-semibold mb-2">Internships</h3>
            <p className="text-gray-400 text-sm">
              Direct pipeline to industry opportunities and hands-on experience.
            </p>
          </div>

        </div>

        {/* CTA BOX */}
        <div className="bg-gradient-to-r from-[#0c0f17] to-[#111827] border border-white/10 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Ready to start?
            </h3>
            <p className="text-gray-400 text-sm">
              Connect with our team to secure your career or organization.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">

            <Link href="/contact">
              <button className="px-6 py-3 bg-[#7dd3fc] text-black font-semibold rounded-md hover:bg-[#38bdf8] transition">
                Start Learning Today
              </button>
            </Link>

            <Link href="/contact">
              <button className="px-6 py-3 border border-white/20 rounded-md text-white hover:bg-white/5 transition">
                Get a Security Assessment
              </button>
            </Link>

          </div>
        </div>

      </div>
    </motion.section>
  );
}