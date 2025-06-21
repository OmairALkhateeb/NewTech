'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

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
  { slug: 'Major', image: '/major.png', link: 'https://major-kappa.vercel.app/en' },
  { slug: 'affiene', image: '/Caffiene_thumb.png' },
  { slug: 'OBAA', image: '/obaa_logo.jpg' },
  { slug: 'Alfahed', image: '/alfahed.jpg' },
  { slug: 'POS', image: '/pos_thumb.png' },
  { slug: 'Nawi', image: '/nawi_thumb.png' },
];

export default function WorksSection({ sections, scrollToSection }: WorksSectionProps) {
  const router = useRouter();

  const handleViewDetails = (slug: string, link?: string) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      router.push(`/projects/${slug}`);
    }
  };

  return (
    <section
      id="work"
      className="relative min-h-screen overflow-hidden p-4 md:p-10 flex items-center"
    >
      {/* Solid dark background */}
      <div className="absolute inset-0 bg-[#1C1F23]" />

      {/* Background image overlay with partial opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/works_background.png')", opacity: 0.7 }}
      />

      {/* Content */}
      <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center gap-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <img
            src="/Scroll.png"
            alt="Section Icon"
            className="w-24 h-24 object-contain mb-8"
          />
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Latest Project
          </h2>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {projects.map(({ slug, image, link }) => (
            <div
              key={slug}
              className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={image}
                alt={`Project ${slug}`}
                className="w-full h-64 object-cover transition-transform duration-500 transform-gpu will-change-transform group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1C1F23]/30 to-[#1C1F23] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-4 pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button
                  onClick={() => handleViewDetails(slug, link)}
                  className="px-4 py-2 rounded font-semibold"
                  style={{ backgroundColor: '#292F36', color: '#fff' }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
