import type { Metadata } from "next";
import "../globals.css";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import AppProvider from "../components/AppProvider";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LIVE TECH",
  description: "",
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}   // 👈 أضفنا الاتجاه
      className={cairo.className}
    >
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppProvider>{children}</AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
