'use client';

import { useEffect, useState } from 'react';
import HeaderSection from '@/components/HeaderSection';
import FirstSection from '@/components/FirstSection';
import SecSection from '@/components/SecSection';
import Skilles from '@/components/skillesSection';
import ContactUsSection from '@/components/contactUsSection';

import { FaHome, FaUser, FaCode, FaBriefcase, FaBlog, FaEnvelope } from 'react-icons/fa';
import WorksSection from '../components/worksSection';

export default function Home() {
  const sections = [
    { id: "home", icon: <FaHome />, label: "Home" },
    { id: "about", icon: <FaUser />, label: "About Us" },
    { id: "skills", icon: <FaCode />, label: "Skills" },
    { id: "work", icon: <FaBriefcase />, label: "Work" },
    // { id: "blogs", icon: <FaBlog />, label: "Blogs" },
    { id: "contact", icon: <FaEnvelope />, label: "Contact" }, 
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
     
<HeaderSection sections={sections} scrollToSection={scrollToSection} />
<div className="pt-10 bg-[#292F36]">
<FirstSection scrollToSection={scrollToSection} /></div>

      <SecSection sections={sections} scrollToSection={scrollToSection} /><Skilles />

      <div id="work">
  <WorksSection sections={[]} scrollToSection={function (id: string): void {
          throw new Error('Function not implemented.');
        } } />
</div>
      <ContactUsSection />

     
    </main>
  );
}
