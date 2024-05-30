/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/QkAKqqBkaq",
        permanent: false
      },
      {
        source: "/register",
        destination: "#register",
        permanent: false
      }
    ]
  },
}

module.exports = nextConfig
