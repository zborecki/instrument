import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    typedEnv: true
  },
  images: {
    remotePatterns: [
      { hostname: 'dummyimage.com', protocol: 'https' }
    ]
  }
};

export default withNextIntl(nextConfig);
