module.exports = {
  async rewrites() {
    return {
      fallback: [
        {
          source: "/api/:path*",
          destination: process.env.NEXT_PUBLIC_API + "/:path*", // Matched parameters can be used in the destination
        },
      ],
    };
  },
};
