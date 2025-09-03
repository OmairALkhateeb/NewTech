'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface Section {
  id: string;
  icon: React.ReactNode;
  label: string;
}

interface WorksSectionProps {
  sections: Section[];
  scrollToSection: (id: string) => void;
}

const projects = [
  { slug: 'Alfahed', image: '/alfahed.jpg', link: null },
  { slug: 'Caffiene', image: '/Caffiene_thumb.png', link: null },
  { slug: 'OBAA', image: '/obaa_logo.jpg', link: null },
  { slug: 'POS', image: '/pos_thumb.png', link: null },
  { slug: 'Nawi', image: '/nawi_thumb.png', link: null },
  { slug: 'Major', image: '/major.png', link: 'https://major-kappa.vercel.app/en' },
];

export default function WorksSection({ sections, scrollToSection }: WorksSectionProps) {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('Projects');

  // ✅ get current locale from URL (/en/... or /ar/... or /de/...)
  const currentLocale = pathname.split('/')[1] || 'en';

  const handleViewDetails = (slug: string, link?: string | null) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      router.push(`/${currentLocale}/projects/${slug}`);
    }
  };

  return (
    <section id="work" className="relative min-h-screen p-6 md:p-12 flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1C1F23]" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/works_background.png')" }}
      />

      <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center gap-12">
        {/* Heading */}
        <div className="text-center">
          <img
            src="/Scroll.png"
            alt="Section Icon"
            className="w-20 h-20 object-contain mx-auto mb-6"
          />
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2">
              {t('heading')}
            </h2>
            <div className="h-[3px] bg-[#12F7D6] rounded-full w-full"></div>
          </div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {projects.map(({ slug, image, link }, index) => {
            const direction = index % 2 === 0 ? -60 : 60;

            return (
              <motion.div
                key={slug}
                initial={{ opacity: 0, x: direction }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="rounded-xl border border-white/10 bg-[#292F36]/90 overflow-hidden shadow-md flex flex-col h-80"
              >
                {/* Image */}
                <div className="h-3/5">
                  <img src={image} alt={slug} className="w-full h-full object-cover" />
                </div>

                {/* Description + Button */}
                <div className="h-2/5 p-4 flex flex-col items-center justify-center text-center">
                  <p className="text-gray-300 text-sm mb-3">{t(`${slug}.short`)}</p>
                  <button
                    onClick={() => handleViewDetails(slug, link)}
                    className="px-4 py-2 border border-[#12F7D6] text-[#12F7D6] rounded-md text-sm font-medium hover:bg-[#12F7D6] hover:text-[#1C1F23] transition-colors"
                  >
                    {t('viewDetails')}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="w-full h-[2px] bg-[#12F7D6]/50 rounded-full mt-10"></div>
      </div>
    </section>
  );
}
