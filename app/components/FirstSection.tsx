'use client';

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

interface Section {
  id: string;
  icon: React.ReactNode;
  label: string;
}

interface FirstSectionProps {
  sections: Section[];
  scrollToSection: (id: string) => void;
}

export default function FirstSection({ sections, scrollToSection }: FirstSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen p-3 sm:p-5 md:p-10 pt-20 md:pt-10 bg-[#292F36] flex justify-center items-start overflow-x-hidden"
    >
      {/* New wrapper to clamp width to viewport and hide overflow */}
      <div className="w-screen max-w-screen overflow-x-hidden flex flex-col items-center text-white max-w-xl sm:max-w-4xl md:max-w-7xl mt-0 md:mt-0">
        {/* Title - only on md and above */}
        <h2 className="hidden md:block text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold p-2 sm:p-4 md:p-10 text-[#98FAEC] text-center leading-tight">
          LiveTech<br />Team
        </h2>

        {/* Mobile Layout */}
        <div className="flex flex-col gap-6 md:hidden w-full max-w-full">
          {/* Main Text Block */}
          <div className="flex flex-col w-full max-w-full">
            <span className="text-[#12F7D6] text-sm">&lt;h1&gt;</span>
            <h3 className="text-lg sm:text-xl font-bold leading-snug">
              Hey,<br />
              We’re <span style={{ color: '#12f7d6' }}>LiveTech</span> Dev Team,<br />
              Full-stack developers building{' '}
              <br />
              <span style={{ color: '#12f7d6' }}>
                <Typewriter
                  words={['scalable platforms', 'secure APIs', 'modern UIs', 'cloud-native apps']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h3>
            <span className="text-[#12F7D6] text-sm">&lt;/h1&gt;</span>
            <span className="text-[#12F7D6] text-sm">&lt;p&gt;</span>
            <p className="text-base sm:text-lg text-gray-400 mb-1 sm:mb-3 leading-relaxed">
              At the forefront of innovation, we engineer cutting-edge digital solutions — blending design,
              functionality, and scalability across web, mobile, and cloud platforms. Your vision, our code.
            </p>
            <span className="text-[#12F7D6] text-sm">&lt;/p&gt;</span>
            <br />
            <span
              style={{ color: '#12f7d6', fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center' }}
            >
              Let's Talk <i className="fas fa-envelope ml-2" />
            </span>
          </div>

          {/* Skills then Numbers */}
          <div className="flex flex-col gap-y-2 max-w-full">
            {/* Skills */}
            <div className="w-full max-w-full">
              <div
                className="p-4 bg-[#1A1E23] flex flex-col justify-center items-center text-center space-y-3 text-white text-sm border-[1px] border-[#12F7D6] max-w-full"
                style={{
                  borderTopLeftRadius: '105px',
                  borderBottomRightRadius: '10px',
                  borderTopRightRadius: '25px',
                  borderBottomLeftRadius: '10px',
                }}
              >
                <div>
                  <span className="text-[#12F7D6] text-lg font-bold">8</span> Programming lang
                </div>
                <div>
                  <span className="text-[#12F7D6] text-lg font-bold">13</span> Development tools
                </div>
                <div>
                  <span className="text-[#12F7D6] text-lg font-bold">5</span> Years of experience
                </div>
                <div>
                  <span className="text-[#12F7D6] text-lg font-bold">+20</span> Finished projects
                </div>
              </div>
            </div>

            {/* Numbers */}
            <div className="w-full max-w-full">
              <div
                className="p-4 bg-[#1A1E23] flex flex-col justify-center items-center text-center space-y-4 text-white text-sm border-[1px] border-[#12F7D6] max-w-full"
                style={{
                  borderTopLeftRadius: '10px',
                  borderBottomRightRadius: '105px',
                  borderTopRightRadius: '10px',
                  borderBottomLeftRadius: '25px',
                }}
              >
                <div>
                  <div className="text-white">+963 953 291 807</div>
                  <div className="text-[#12F7D6] font-semibold">Syria</div>
                </div>
{/*                 <div>
                  <div className="text-white">+966 55 123 4567</div>
                  <div className="text-[#12F7D6] font-semibold">Saudi Arabia</div>
                </div> */}
                <div>
                  <div className="text-white">+49 1575 0113701</div>
                  <div className="text-[#12F7D6] font-semibold">Germany</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop layout (unchanged) */}
        <div className="hidden md:flex flex-row gap-12 justify-center w-full p-8">
          {/* Numbers */}
          <div
            className="h-auto lg:h-[300px] w-1/4 p-5 bg-[#1A1E23] flex flex-col justify-center items-center text-center space-y-4 text-white text-sm sm:text-base border-[1px] border-[#12F7D6]"
            style={{
              borderTopLeftRadius: '25px',
              borderBottomRightRadius: '25px',
              borderTopRightRadius: '80px',
              borderBottomLeftRadius: '80px',
            }}
          >
            <div className="flex flex-col space-y-2">
              <div className="text-white text-lg sm:text-xl ">+963 953 291 807</div>
              <div className="text-[#12F7D6] font-semibold">Syria</div>
            </div>
{/*             <div className="flex flex-col space-y-2">
              <div className="text-white text-lg sm:text-xl ">+966 55 123 4567</div>
              <div className="text-[#12F7D6] font-semibold">Saudi Arabia</div>
            </div> */}
            <div className="flex flex-col space-y-2">
              <div className="text-white text-lg sm:text-xl ">+49 1575 0113701</div>
              <div className="text-[#12F7D6] font-semibold">Germany</div>
            </div>
          </div>

          {/* Center Text */}
          <div className="flex flex-col w-1/2">
            <span className="text-[#12F7D6] text-xs">&lt;h1&gt;</span>
            <h3 className="text-3xl font-bold leading-snug">
              Hey,<br />
              We’re <span style={{ color: '#12f7d6' }}>NewTech</span> Dev Team,<br />
              Full-stack developers building{' '}
              <span style={{ color: '#12f7d6' }}>
                <Typewriter
                  words={['scalable platforms', 'secure APIs', 'modern UIs', 'cloud-native apps']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h3>
            <span className="text-[#12F7D6] text-xs">&lt;/h1&gt;</span>
            <span className="text-[#12F7D6] text-xs">&lt;p&gt;</span>
            <p className="text-sm text-gray-400 mb-3 leading-relaxed">
              At the forefront of innovation, we engineer cutting-edge digital solutions — blending design,
              functionality, and scalability across web, mobile, and cloud platforms. Your vision, our code.
            </p>
            <span className="text-[#12F7D6] text-xs">&lt;/p&gt;</span>
            <br />
            <span style={{ color: '#12f7d6', fontSize: '1rem', display: 'inline-flex', alignItems: 'center' }}>
              Let's Talk <i className="fas fa-envelope ml-2" />
            </span>
          </div>

          {/* Skills */}
          <div
            className="h-auto lg:h-[300px] w-1/4 p-5 bg-[#1A1E23] flex flex-col justify-center items-center text-center space-y-4 text-white text-sm sm:text-base border-[1px] border-[#12F7D6]"
            style={{
              borderTopLeftRadius: '80px',
              borderBottomRightRadius: '85px',
              borderTopRightRadius: '25px',
              borderBottomLeftRadius: '25px',
            }}
          >
            <div>
              <span className="text-[#12F7D6] text-3xl font-bold">8</span> Programming lang
            </div>
            <div>
              <span className="text-[#12F7D6] text-3xl font-bold">13</span> Development tools
            </div>
            <div>
              <span className="text-[#12F7D6] text-3xl font-bold">5</span> Years of experience
            </div>
            <div>
              <span className="text-[#12F7D6] text-3xl font-bold">+20</span> Finished projects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
