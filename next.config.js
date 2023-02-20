module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*{/}?",
        headers: [
          { key: "Content-Security-Policy", value: "script-src 'self'" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "same-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "access-control-allow-origin",
            value: "https://tremani.vercel.app/",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()",
          },
        ],
      },
    ];
  },
};
