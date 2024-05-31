/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/tEmz8FHAAa",
        permanent: false
      },
      {
        source: "/register",
        destination: "https://lu.ma/2ilus9cr",
        permanent: false
      }
    ]
  },
}

module.exports = nextConfig
