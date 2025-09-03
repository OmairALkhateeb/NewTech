'use client';
import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    <section
      id="about"
      className="min-h-screen bg-cover bg-center p-4 md:p-10 flex flex-col items-center justify-center"
      style={{ backgroundImage: `url('/about_me_background.png')` }}
    >
      {/* Heading */}
<div className="text-center mb-12">
  <h2 className="inline-block text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide text-white relative">
    About Us
    {/* Full underline */}
    <div className="mt-2 h-1 bg-[#12F7D6] rounded-full"></div>
  </h2>

  {/* Subtitle */}
  <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-xl mx-auto">
    Discover who we are and how we help businesses grow through modern,
    scalable technology.
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
          <div className="backdrop-blur-md bg-[#292F36]/60 border border-[#12F7D6]/30 rounded-xl p-4 md:p-6 shadow-lg flex-1 flex flex-col justify-center">
            <span className="text-[#12F7D6] text-xs md:text-sm">&lt;p&gt;</span>
            <br />
            <p className="text-sm md:text-base text-gray-100 mb-2 md:mb-3">
              <span className="text-[#12F7D6] font-extrabold text-lg md:text-xl">NewTec</span>
              <br />
              is a skilled team ready to meet your technical needs. We provide custom software development and digital solutions to help your business grow. Whether you’re a small business or a large company,{' '}
              <span className="text-[#12F7D6] font-semibold">NewTec</span> delivers tailored technology and support.
              <br />
              With departments strategically located in{' '}
              <span className="text-[#12F7D6] font-semibold">Syria</span>,{' '}
              <span className="text-[#12F7D6] font-semibold">Saudi Arabia</span>, and{' '}
              <span className="text-[#12F7D6] font-semibold">Germany - Assen</span>, we combine local expertise with global reach to drive your success.
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
            alt="About us"
            className="rounded-2xl w-full md:w-auto h-auto md:h-full object-cover shadow-lg max-h-[300px] md:max-h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
