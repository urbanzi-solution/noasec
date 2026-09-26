"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function NewGen() {
  return (
    <section
      id="about"
      className="min-h-10 bg-[#05070d] flex items-center px-6 md:px-16 "
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">

        {/* RIGHT CONTENT (comes first in mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 order-1 md:order-2"
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold leading-tight text-white"
          >
            NEXT-GEN <br />
            <span className="text-[#7dd3fc]">CYBERSECURITY</span> <br />
            POWERHOUSE
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm leading-relaxed max-w-md"
          >
            NoaSec is not just a provider; we are the architects of digital
            resilience. In a world where perimeter defense is no longer enough,
            we provide the offensive intelligence and defensive depth required
            to survive and thrive in the modern threat landscape.
          </motion.p>

          {/* List */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="mt-4 space-y-3 text-sm text-gray-300"
          >
            {[
              "ELITE INTELLIGENCE GATHERING",
              "STATE-OF-THE-ART TRAINING LABS",
              "PROACTIVE THREAT NEUTRALIZATION",
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-center gap-3"
              >
                <span className="w-2 h-2 bg-[#7dd3fc]"></span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* LEFT IMAGE (moves to bottom on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex justify-center order-2 md:order-1"
        >
          <div className="relative">
            {/* corners */}
            <div className="absolute -top-4 -left-4 w-10 h-10 border-l-2 border-t-2 border-white/30"></div>
            <div className="absolute -bottom-4 -right-4 w-10 h-10 border-r-2 border-b-2 border-white/30"></div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
             <Image
  src="/new.png"
  width={600}
  height={400}
  alt="image"
  className="w-full h-auto"
/>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}