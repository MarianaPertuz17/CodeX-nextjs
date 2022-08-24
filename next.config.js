/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
}
const removeImports = require('next-remove-imports')();
module.exports = removeImports({});

module.exports = nextConfig
