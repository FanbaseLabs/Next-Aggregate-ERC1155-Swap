/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  webpack(config, { isServer }) {
    if(!isServer) {
      config.resolve.fallback = { 
        net: false,
        tls: false,
        fs: false
      };
    }
    
    return config
  }
}
