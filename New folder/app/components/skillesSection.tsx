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
  {
    title: 'Introductory Websites & Apps',
    icon: <FaGlobe />,
    desc: 'We design and build elegant company websites, landing pages, and mobile apps that introduce your brand and services in the best way.',
  },
  {
    title: 'Administrative Web Systems',
    icon: <FaProjectDiagram />,
    desc: 'Custom dashboards and management systems to help businesses organize, monitor, and automate their operations efficiently.',
  },
  {
    title: 'Mobile App Development',
    icon: <FaMobileAlt />,
    desc: 'Native and cross-platform mobile applications that are scalable, reliable, and tailored to your users’ needs.',
  },
  {
    title: 'UI/UX Design',
    icon: <FaPencilRuler />,
    desc: 'Modern, user-friendly interfaces with focus on experience, accessibility, and brand identity.',
  },
  {
    title: 'Hosting & Infrastructure',
    icon: <FaServer />,
    desc: 'Server setup, cloud deployment, and infrastructure management to keep your apps running smoothly.',
  },
  {
    title: 'System Integration',
    icon: <FaNetworkWired />,
    desc: 'Seamless connection between your internal tools and third-party platforms to ensure efficiency.',
  },
  {
    title: 'Performance & Security',
    icon: <FaShieldAlt />,
    desc: 'Optimization for speed, scalability, and data security, keeping your business safe and reliable.',
  },
  {
    title: 'Maintenance & Support',
    icon: <FaTools />,
    desc: 'Ongoing technical support, updates, and monitoring to ensure stability and long-term success.',
  },
  {
    title: 'Cloud Solutions',
    icon: <FaCloud />,
    desc: 'Deployment and management on cloud platforms with high availability and cost efficiency.',
  },
];

export default function Skilles() {
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
              What We Offer
            </h2>
            <div className="h-[3px] bg-[#12F7D6] rounded-full w-full"></div>
          </div>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            From simple introductory websites to advanced web management systems, 
            we deliver tailored solutions that meet your business needs with modern design and reliable technology.
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
                <div className="text-[#12F7D6] text-4xl">{service.icon}</div>
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
