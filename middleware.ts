import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // نفس القيم اللي عندك في i18n/request.ts
  locales: ['en', 'ar' ,  'de'],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
