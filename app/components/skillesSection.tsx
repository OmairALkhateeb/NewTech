'use client';

import React from 'react';
import {
  FaMobileAlt,
  FaGlobe,
  FaServer,
  FaProjectDiagram,
  FaPencilRuler,
  FaTools,
  FaShieldAlt,
  FaNetworkWired,
  FaCloud,
} from 'react-icons/fa';

const services = [
  { title: 'Mobile App Development', icon: <FaMobileAlt /> },
  { title: 'Web Development', icon: <FaGlobe /> },
  { title: 'Server & Infrastructure Services', icon: <FaServer /> },
  { title: 'Integrated Systems Services', icon: <FaProjectDiagram /> },
  { title: 'UI/UX Design Services', icon: <FaPencilRuler /> },
  { title: 'Technical Support & Maintenance', icon: <FaTools /> },
  { title: 'Performance & Security Optimization', icon: <FaShieldAlt /> },
  { title: 'System Integration Services', icon: <FaNetworkWired /> },
  { title: 'Cloud Deployment & Management', icon: <FaCloud /> },
];

interface Section {
  id: string;
  icon: React.ReactNode;
  label: string;
}

interface SkillesProps {
  sections: Section[];
  scrollToSection: (id: string) => void;
}

export default function Skilles({ sections, scrollToSection }: SkillesProps) {
  return (
    <section
      id="skills"
      className="min-h-screen bg-cover bg-center p-4 md:p-10 flex items-center"
      style={{ backgroundImage: "url('/Skills_background.png')" }}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <img
            src="/Scroll.png"
            alt="Section Icon"
            className="w-24 h-24 object-contain mb-8"
          />
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            What We Offer
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-8 w-full">
          {services.map((service, index) => {
            const isLast = index === services.length - 1;
            return (
              <div
                key={index}
                className={`bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6 text-white
                            transform transition-all duration-700 ease-in-out
                            hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,191,166,0.7)]
                            ${isLast ? 'hidden sm:hidden md:block' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="false"
              >
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="text-[#00BFA6] text-3xl">{service.icon}</div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
