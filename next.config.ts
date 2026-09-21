import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/casadelmare",
  trailingSlash: false,
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/casadelmare/",
        basePath: false,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
