import type { NextConfig } from 'next'
import { withContentlayer } from 'next-contentlayer2'  // 👈 cambia el paquete

const nextConfig: NextConfig = {
  reactStrictMode: true,
}

export default withContentlayer(nextConfig)