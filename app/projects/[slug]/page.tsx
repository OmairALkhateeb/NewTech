'use client';

import React, { use, useState } from 'react';
import { notFound } from 'next/navigation';
import { projectDetails } from '@/lib/projects';
import Link from 'next/link';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetailPage(props: ProjectPageProps) {
  const params = use(props.params);
  const { slug } = params;
  const project = projectDetails[slug];

  if (!project) return notFound();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % project.images.length);
      setFade(true);
    }, 300);
  };

  const prevImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(
        (currentIndex - 1 + project.images.length) % project.images.length
      );
      setFade(true);
    }, 300);
  };

  return (
    <div
      className="min-h-screen p-4 sm:p-8 flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: "url('/works_background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

      <div className="relative max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-10 sm:gap-12">
        {/* Left: Image + buttons */}
        <div className="flex flex-col items-center w-full md:w-1/2 max-w-xl">
          <div
            className={`rounded shadow-lg overflow-hidden w-full transition-opacity duration-300 ${
              fade ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ height: '470px' }}
          >
            <img
              src={project.images[currentIndex]}
              alt={`Project image ${currentIndex + 1}`}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>

          <div className="flex justify-center gap-6 mt-6 w-full">
            <button
              onClick={prevImage}
              className="px-6 py-3 bg-gray-700 rounded hover:bg-gray-600 transition"
            >
              Previous
            </button>
            <button
              onClick={nextImage}
              className="px-6 py-3 bg-gray-700 rounded hover:bg-gray-600 transition"
            >
              Next
            </button>
          </div>
        </div>

        {/* Right: Title + Description */}
        <div className="w-full md:w-1/2 max-w-2xl px-4 md:px-0 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-md">
            {project.title}
          </h1>

          <p
            className="text-lg sm:text-xl text-gray-200 font-light"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            {project.description}
          </p>
        </div>
      </div>

      <Link
        href="/#work"
        className="inline-block mt-10 text-[#12f7d6] hover:underline"
      >
        ← Back to Projects
      </Link>
    </div>
  );
}
