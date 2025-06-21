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
      className="relative min-h-screen p-3 sm:p-5 md:p-10 bg-[#292F36] flex justify-center items-center"
    >
      <div className="flex flex-col items-center text-white w-full max-w-xl sm:max-w-4xl md:max-w-7xl mt-[-90px]">
        <h2 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold p-2 sm:p-4 md:p-10 text-[#98FAEC] text-center leading-tight">
          NewTech<br />Team
        </h2>

        {/* Mobile layout */}
        <div className="flex flex-col gap-6 lg:hidden w-full">
          {/* Column 2 */}
          <div className="flex flex-col w-full">
            <span className="text-[#12F7D6] text-[10px] sm:text-xs">&lt;h1&gt;</span>
            <h3 className="text-sm sm:text-lg md:text-3xl font-bold leading-snug">
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
            <span className="text-[#12F7D6] text-[10px] sm:text-xs">&lt;/h1&gt;</span>
            <span className="text-[#12F7D6] text-[10px] sm:text-xs">&lt;p&gt;</span>
            <p className="text-[10px] sm:text-sm text-gray-400 mb-1 sm:mb-3 leading-relaxed">
              At the forefront of innovation, we engineer cutting-edge digital solutions — blending design,
              functionality, and scalability across web, mobile, and cloud platforms. Your vision, our code.
            </p>
            <span className="text-[#12F7D6] text-[10px] sm:text-xs">&lt;/p&gt;</span>
            <br />
            <span style={{ color: '#12f7d6', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center' }}>
              Let's Talk <i className="fas fa-envelope ml-2" />
            </span>
          </div>

          {/* Column 1 + Column 3 side-by-side on mobile */}
          <div className="flex flex-row gap-4">
            {/* Column 1 */}
            <div className="w-1/2">
              <div
                className="h-full p-4 bg-[#1A1E23] flex flex-col justify-center space-y-4 text-white text-xs"
                style={{
                  borderTopLeftRadius: '25px',
                  borderBottomRightRadius: '25px',
                  borderTopRightRadius: '80px',
                  borderBottomLeftRadius: '80px',
                }}
              >
                <div>
                  <div className="text-white text-xs">+963 953 291 807</div>
                  <div className="text-[#12F7D6] text-xs font-semibold">Syria</div>
                </div>
                <div>
                  <div className="text-white text-xs">+966 55 123 4567</div>
                  <div className="text-[#12F7D6] text-xs font-semibold">Saudi Arabia</div>
                </div>
                <div>
                  <div className="text-white text-xs">+49 170 1234567</div>
                  <div className="text-[#12F7D6] text-xs font-semibold">Germany</div>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="w-1/2">
              <div
                className="h-full p-4 bg-[#1A1E23] flex flex-col justify-center space-y-2 text-white text-xs"
                style={{
                  borderTopLeftRadius: '80px',
                  borderBottomRightRadius: '85px',
                  borderTopRightRadius: '25px',
                  borderBottomLeftRadius: '25px',
                }}
              >
                <div>
                  <span className="text-[#12F7D6] text-base font-bold"><br></br>8</span> Programming lang
                </div>
                <div>
                  <span className="text-[#12F7D6] text-base font-bold">13</span> Development tools
                </div>
                <div>
                  <span className="text-[#12F7D6] text-base font-bold">5</span> Years of experience
                </div>
                <div>
                  <span className="text-[#12F7D6] text-base font-bold">+20</span> Finished projects
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large screen layout (unchanged) */}
        <div className="hidden lg:flex flex-row gap-12 justify-center w-full p-8">
          {/* Column 1 */}
          <div
            className="h-auto lg:h-[300px] w-1/4 p-5 bg-[#1A1E23] flex flex-col justify-center space-y-4 text-white text-sm sm:text-base"
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
            <div className="flex flex-col space-y-2">
              <div className="text-white text-lg sm:text-xl ">+966 55 123 4567</div>
              <div className="text-[#12F7D6] font-semibold">Saudi Arabia</div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="text-white text-lg sm:text-xl ">+49 170 1234567</div>
              <div className="text-[#12F7D6] font-semibold">Germany</div>
            </div>
          </div>

          {/* Column 2 */}
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

          {/* Column 3 */}
          <div
            className="h-auto lg:h-[300px] w-1/4 p-5 bg-[#1A1E23] flex flex-col justify-center space-y-4 text-white text-sm sm:text-base"
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
