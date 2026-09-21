import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/casadelmare",
  trailingSlash: false,
  redirects: async () => [
    {
      source: "/",
      destination: "/casadelmare",
      permanent: true,
    },
  ],
};

export default nextConfig;
