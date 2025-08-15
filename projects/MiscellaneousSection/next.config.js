/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  redirects: async () => {
    return [
      {
        source: '/about/:id',
        destination: "/about",
        permanent: false
      },
      // {
      //   source: '/old-blog/:id',
      //   destination: "/new-blog/:id",
      //   permanent: true
      // }
    ]
  }
}

module.exports = nextConfig
