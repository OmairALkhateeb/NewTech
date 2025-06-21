'use client';

import { useEffect, useState } from 'react';
import HeaderSection from '@/components/HeaderSection';
import FirstSection from '@/components/FirstSection';
import SecSection from '@/components/SecSection';
import Skilles from '@/components/skillesSection';
import ContactUsSection from '@/components/contactUsSection';

import { FaHome, FaUser, FaCode, FaBriefcase, FaBlog, FaEnvelope } from 'react-icons/fa';
import WorksSection from './components/worksSection';

export default function Home() {
  const sections = [
    { id: "home", icon: <FaHome />, label: "Home" },
    { id: "about", icon: <FaUser />, label: "About Us" },
    { id: "skills", icon: <FaCode />, label: "Skills" },
    { id: "work", icon: <FaBriefcase />, label: "Work" },
    // { id: "blogs", icon: <FaBlog />, label: "Blogs" },
    { id: "contact", icon: <FaEnvelope />, label: "Contact" }, // last icon is email
  ];

  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <main className="min-h-screen bg-white text-gray-900 relative">
      {/* Global Vertical Navigation */}
      <nav
        className="hidden lg:flex fixed top-50 left-10 z-50 flex-col space-y-4 
                   bg-[#1A1E23] border border-white p-2 rounded-full"
      >
        {sections.map(({ id, icon, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            title={label}
            className={`flex items-center justify-center w-12 h-12 transition-colors rounded-full
              ${
                activeSection === id
                  ? 'bg-white text-[#1A1E23]'
                  : 'text-white hover:text-[#12F7D6] hover:bg-[#121416]'
              }`}
            aria-label={label}
          >
            {icon}
          </button>
        ))}
      </nav>

      <HeaderSection />
      <FirstSection sections={sections} scrollToSection={scrollToSection} />
      <SecSection sections={sections} scrollToSection={scrollToSection} />
      <Skilles sections={sections} scrollToSection={scrollToSection} />
      <div id="work">
  <WorksSection sections={[]} scrollToSection={function (id: string): void {
          throw new Error('Function not implemented.');
        } } />
</div>
      <ContactUsSection />

      {/* <section id="blogs" className="p-10 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Blogs</h2>
        <p>Latest insights on technology trends and software development.</p>
      </section>

      <section id="contact" className="p-10 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>Email: hello@codecrafters.com</p>
        <p>Phone: +1 123-456-7890</p>
      </section>

      <footer className="p-6 text-center bg-blue-600 text-white">
        &copy; {new Date().getFullYear()} CodeCrafters Inc. All rights reserved.
      </footer> */}
    </main>
  );
}
