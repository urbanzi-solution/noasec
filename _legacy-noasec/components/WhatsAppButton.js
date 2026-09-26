"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "7034733944"; // 🔁 replace
  const message = "Hi, I want to know more about your services.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
      >
        {/* 🔥 Glow Pulse */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full"
        >
          {/* WhatsApp SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="26"
            height="26"
            fill="white"
          >
            <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.89.756 5.6 2.07 7.97L0 32l7.82-2.05A15.93 15.93 0 0 0 16 32c8.836 0 16-7.164 16-16S24.836.396 16 .396zm0 29.29c-2.54 0-4.97-.66-7.09-1.92l-.51-.3-4.64 1.21 1.24-4.52-.33-.52a13.36 13.36 0 0 1-2.05-7.19c0-7.38 6.01-13.39 13.39-13.39s13.39 6.01 13.39 13.39-6.01 13.39-13.39 13.39zm7.38-9.99c-.4-.2-2.36-1.17-2.73-1.3-.37-.14-.64-.2-.91.2-.27.4-1.04 1.3-1.27 1.57-.23.27-.46.3-.86.1-.4-.2-1.7-.63-3.23-2-.53-.47-1-1.05-1.4-1.68-.15-.26-.02-.4.12-.54.13-.13.3-.33.45-.5.15-.17.2-.27.3-.46.1-.2.05-.37-.02-.53-.07-.17-.91-2.2-1.25-3.02-.33-.8-.66-.7-.91-.7h-.78c-.27 0-.7.1-1.07.5-.37.4-1.4 1.36-1.4 3.3s1.44 3.83 1.64 4.1c.2.27 2.83 4.33 6.86 6.07.96.41 1.7.66 2.28.84.96.3 1.84.26 2.53.16.77-.12 2.36-.96 2.7-1.9.33-.93.33-1.73.23-1.9-.1-.17-.37-.27-.77-.47z"/>
          </svg>
        </motion.div>

        {/* 💬 Tooltip */}
        <span className="absolute right-16 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-3 py-1 rounded-md whitespace-nowrap">
          Chat with us
        </span>
      </a>
    </motion.div>
  );
}