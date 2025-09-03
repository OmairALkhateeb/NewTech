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
import { useTranslations } from 'next-intl';

export default function Skilles() {
  const t = useTranslations('Skills');

  // 👇 أيقونات بنفس ترتيب الخدمات
  const icons = [
    <FaGlobe />,
    <FaProjectDiagram />,
    <FaMobileAlt />,
    <FaPencilRuler />,
    <FaServer />,
    <FaNetworkWired />,
    <FaShieldAlt />,
    <FaTools />,
    <FaCloud />,
  ];

  // 👇 جلب الخدمات من الترجمة (كمصفوفة)
  const services = t.raw('services') as { title: string; desc: string }[];

  return (
    <section
      id="skills"
      className="min-h-screen bg-cover bg-center p-6 md:p-12 flex items-center"
      style={{ backgroundImage: "url('/Skills_background.png')" }}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-12">
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

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1E1E1E]/70 border border-white/10 rounded-2xl p-8 text-white
                         shadow-md hover:shadow-xl hover:border-[#12F7D6] 
                         transition-all duration-300 flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-once="false"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="text-[#12F7D6] text-4xl">{icons[index]}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
