import withNextIntl from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: { enabled: false }
  }
};

// 👇 أهم سطر: مرر المسار الجديد
export default withNextIntl('./i18n/request.ts')(nextConfig);
