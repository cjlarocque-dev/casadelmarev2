import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/casadelmare",
  trailingSlash: false,
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: "/:path((?!casadelmare).*)",
          destination: "/casadelmare/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
