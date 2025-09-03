'use client';

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

interface FirstSectionProps {
  scrollToSection: (id: string) => void;
}

export default function FirstSection({ scrollToSection }: FirstSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#292F36] flex items-center px-6 md:px-12 lg:px-20 pt-20 sm:pt-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/first_page_background.jpg')" }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Blur overlay (mobile + tablet only) */}
      <div className="absolute inset-0 backdrop-blur-sm bg-[#292F36]/40 lg:backdrop-blur-none lg:bg-transparent"></div>

      <div className="relative w-full max-w-7xl flex justify-center lg:justify-start">
        {/* ==== Content ==== */}
        <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-[#12F7D6]">LiveTech
              
              </span> Dev Team
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mt-4 text-[#12F7D6]">
            <Typewriter
              words={[
                'scalable apps',
                'secure APIs',
                'modern UIs',
                'cloud-native platforms',
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-lg sm:text-xl lg:text-base text-gray-300 mt-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            We help your business grow and reach new heights,
            turning your ideas into real, profitable solutions.
            <br />
            <span className="text-[#12F7D6] font-semibold">
              Your vision, transformed into success.
            </span>
          </p>

          <button
            onClick={() => scrollToSection('contact')}
            className="mt-10 px-8 py-4 bg-transparent text-[#12F7D6] text-lg font-semibold rounded-md border border-[#12F7D6] hover:bg-[#12F7D6] hover:text-[#292F36] transition-colors mx-auto lg:mx-0"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
