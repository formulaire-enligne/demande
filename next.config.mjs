/** @type {import('next').NextConfig} */
/*const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;*/

const nextConfig = {
  output: "export",
  skipTrailingSlashRedirect: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
