'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';

interface Section {
  id: string;
  icon: React.ReactNode;
  label: string;
}

interface SecSectionProps {
  sections: Section[];
  scrollToSection: (id: string) => void;
}

export default function SecSection({ sections, scrollToSection }: SecSectionProps) {
  const t = useTranslations('About');
  const locale = useLocale();

  return (
    <section
      id="about"
      className="min-h-screen bg-cover bg-center p-4 md:p-10 flex flex-col items-center justify-center"
      style={{ backgroundImage: `url('/about_me_background.png')` }}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="inline-block text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide text-white relative">
          {t('heading')}
          <div className="mt-2 h-1 bg-[#12F7D6] rounded-full"></div>
        </h2>

        <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      {/* Content container */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl md:max-w-6xl mx-auto items-center gap-6 md:gap-10">
        {/* Left content */}
        <motion.div
          className="flex-1 text-white drop-shadow-md max-w-full flex flex-col"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          style={{ minHeight: 0 }}
        >
          {/* Blur glass card */}
          <div className="backdrop-blur-md bg-[#292F36]/60 border border-[#12F7D6]/30 rounded-xl p-6 shadow-lg flex-1 flex flex-col justify-center h-[360px] md:h-[400px]">
            <span className="text-[#12F7D6] text-xs md:text-sm">&lt;p&gt;</span>
            <br />
            <p className="text-sm md:text-base text-gray-100 mb-2 md:mb-3 leading-relaxed">
              <span className="text-[#12F7D6] font-extrabold text-lg md:text-xl">
                LiveTech
              </span>{' '}
              {t('description.part1')}{' '}
              <span className="text-[#12F7D6] font-semibold">LiveTech</span>{' '}
              {t('description.part2')}{' '}
              <span className="text-[#12F7D6] font-semibold">Syria</span>,{' '}
              <span className="text-[#12F7D6] font-semibold">Saudi Arabia</span>,{' '}
              {t('description.part3')}{' '}
              <span className="text-[#12F7D6] font-semibold">Germany - Assen</span>,{' '}
              {t('description.part4')}
            </p>
            <span className="text-[#12F7D6] text-xs md:text-sm">&lt;/p&gt;</span>
            <br />
          </div>
        </motion.div>

        {/* Right content - image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-start items-center md:items-stretch w-full md:w-auto max-h-[300px] md:max-h-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          style={{ minHeight: 0 }}
        >
          <img
            src="/coders.jpg"
            alt={t('alt')}
            className="rounded-2xl w-full md:w-auto h-auto md:h-full object-cover shadow-lg max-h-[300px] md:max-h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
