/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: async function (defaultPathMap) {
    return defaultPathMap;
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
