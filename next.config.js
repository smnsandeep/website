/** @type {import('next').NextConfig} */
const nextConfig = {
  generateStaticParams: async () => {
    return [
      // Define your dynamic routes and parameters here
      { route: "/blog/[slug]", params: { slug: "example-slug" } },
      // Add more routes as needed
    ];
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
