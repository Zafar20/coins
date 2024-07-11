import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'projectshopapi.pythonanywhere.com',
            port: '',
            pathname: '/media/products/images/**',
          },
          {
            protocol: 'https',
            hostname: 'projectshopapi.pythonanywhere.com',
            port: '',
            pathname: '/media/certificates/images/**',
          },
          {
            protocol: 'https',
            hostname: 'projectshopapi.pythonanywhere.com',
            port: '',
            pathname: '/media/partners/images/**',
          },
          {
            protocol: 'https',
            hostname: 'projectshopapi.pythonanywhere.com',
            port: '',
            pathname: '/media/homepage/images/**',
          },
        ],
      },
};

export default withNextIntl(nextConfig);

