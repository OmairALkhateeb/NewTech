'use client';

import { notFound } from 'next/navigation';
import { projectDetails } from '@/lib/projects';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface ProjectPageProps {
  params: { slug: string; locale: string };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug, locale } = params;
  const t = useTranslations('Projects');

  const project = projectDetails[slug];
  if (!project) return notFound();

  return (
    <div
      className="min-h-screen p-4 sm:p-8 flex flex-col items-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/works_background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>

      <div className="relative w-full max-w-7xl">
        {/* Title & Description */}
        <div className="text-center mb-8 sm:mb-12 px-2">
          <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-md mb-4">
            {t(`${slug}.title`)}
          </h1>
          <div className="h-[3px] bg-[#12F7D6] rounded-full w-24 sm:w-32 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "'Cairo', sans-serif" }}>
            {t(`${slug}.description`)}
          </p>
        </div>

        {/* Images auto-scroll */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-[#1C1F23] to-transparent z-20"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-[#1C1F23] to-transparent z-20"></div>

          <div className="flex gap-4 sm:gap-8 animate-scroll-slow">
            {project.images.concat(project.images).map((img: string, index: number) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg border border-white/10 bg-[#292F36]/70 min-w-[280px] sm:min-w-[400px] md:min-w-[500px] h-60 sm:h-80 md:h-96 flex-shrink-0"
              >
                <img
                  src={img}
                  alt={`Project image ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Back link */}
        <div className="text-center mt-10">
          <Link href={`/${locale}/#work`} className="text-[#12f7d6] text-base sm:text-lg hover:underline">
            {t('back')}
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-slow {
          display: flex;
          width: max-content;
          animation: scroll-slow 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
