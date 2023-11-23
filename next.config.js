const withBundleAnalyzer = require('@next/bundle-analyzer')({
   enabled: process.env.ANALYZE === 'true',
 })

/** @type {import('next').NextConfig} */
const nextConfig = {
   
   images:{
    remotePatterns:[{protocol:"https",hostname:"images.unsplash.com",port:""},{protocol:"https",hostname:"plus.unsplash.com",port:""}]
   }
}

module.exports = withBundleAnalyzer(nextConfig)
