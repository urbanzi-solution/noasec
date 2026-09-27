/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  trailingSlash: false,

  // Old blog index moved to /blog (the old article stays at /blogs/blog).
  async redirects() {
    return [
      { source: "/blogs", destination: "/blog", permanent: true },
      { source: "/services/branding/packaging-print-design", destination: "/services/branding", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
