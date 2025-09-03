'use client';

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useTranslations, useLocale } from 'next-intl';

interface FirstSectionProps {
  scrollToSection: (id: string) => void;
}

export default function FirstSection({ scrollToSection }: FirstSectionProps) {
  const t = useTranslations('FirstSection');
  const locale = useLocale();

  // 👇 صور الخلفية حسب اللغة
  const bgImages: Record<string, string> = {
    ar: "/first_page_background_2.png",
    en: "/first_page_background.jpg",
  };

  return (
    <section
      id="home"
      dir={locale === 'ar' ? 'rtl' : 'ltr'} // 👈 يضبط اتجاه النص
      className="relative min-h-screen bg-[#292F36] flex items-center 
                 px-6 md:px-12 lg:px-20 pt-28 
                 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImages[locale] || bgImages.en})`,
      }}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 backdrop-blur-sm bg-[#292F36]/40 lg:backdrop-blur-none lg:bg-transparent"></div>

      {/* Content */}
      <div className="relative w-full max-w-7xl flex justify-center lg:justify-start">
        <div
          className={`w-full lg:w-1/2 text-white 
            text-center // 👈 على الموبايل
            ${locale === 'ar' ? 'lg:text-right' : 'lg:text-left'}`} // 👈 على الشاشات الكبيرة
        >
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            {locale === 'ar' ? (
              <>
                <span className="text-white">{t('heading.prefix')}</span>{' '}
                <span className="text-[#12F7D6]">LiveTech</span>
              </>
            ) : (
              <>
                <span className="text-[#12F7D6]">LiveTech</span>{' '}
                <span className="text-white">{t('heading.suffix')}</span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mt-4 text-[#12F7D6]">
            <Typewriter
              words={t.raw('heading.subtitle.words') as string[]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          {/* Paragraph */}
          <p className="text-lg sm:text-xl lg:text-base text-gray-300 mt-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {t('paragraph.description')}
            <br />
            <span className="text-[#12F7D6] font-semibold">
              {t('paragraph.vision')}
            </span>
          </p>

          {/* Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="mt-10 px-8 py-4 bg-transparent text-[#12F7D6] text-lg font-semibold rounded-md border border-[#12F7D6] hover:bg-[#12F7D6] hover:text-[#292F36] transition-colors"
          >
            {t('button.contact')}
          </button>
        </div>
      </div>
    </section>
  );
}
