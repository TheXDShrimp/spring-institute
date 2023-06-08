/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: '/u/:slug*',
      destination: '/url/:slug*',
      permanent: true
    },

    {
      source: '/card',
      destination: 'https://springgroup.carrd.co/',
      permanent: false,
      basePath: false
    }
  ]
}