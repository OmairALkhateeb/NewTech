"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations, useLocale } from "next-intl";

interface Section {
  id: string;
  label: string; // المفتاح في ملف الترجمة (home, about, ...)
}

interface HeaderSectionProps {
  sections: Section[]; 
  scrollToSection: (id: string) => void;
}

export default function HeaderSection({ scrollToSection }: HeaderSectionProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("Header");
  const locale = useLocale();

  // 👇 الأقسام لازم تكون بالمفاتيح مو نصوص مترجمة
  const sections: Section[] = [
    { id: "home", label: "home" },
    { id: "about", label: "about" },
    { id: "skills", label: "skills" },
    { id: "work", label: "work" },
    { id: "contact", label: "contact" },
  ];

  return (
    <header
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="fixed top-0 left-0 w-full z-50 
                 bg-[#292F36]/80 backdrop-blur-md
                 border-b border-gray-700"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <span className="text-[#12F7D6] text-2xl md:text-3xl font-bold">
            &lt;C\&gt;
          </span>
          <h1 className="text-xl md:text-2xl font-bold text-white">LiveTech</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-white text-sm lg:text-base">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="relative group transition"
            >
              <span className="transition-colors group-hover:text-[#12F7D6]">
                {t(label)}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#12F7D6] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}

          <LanguageSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1A1E23] text-white flex flex-col items-center space-y-4 py-6">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => {
                scrollToSection(id);
                setMenuOpen(false);
              }}
              className="w-full text-center py-2 text-lg transition-colors hover:bg-[#292F36] hover:text-[#12F7D6] rounded-md"
            >
              {t(label)}
            </button>
          ))}
          <LanguageSwitcher />
        </div>
      )}
    </header>
  );
}
