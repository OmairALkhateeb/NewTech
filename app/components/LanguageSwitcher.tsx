"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  const changeLocale = (newLocale: string) => {
    if (!pathname) return;
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
    setOpen(false);
  };

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  return (
    <div className="relative text-sm">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-[#1C1F23] border border-gray-600 text-white px-3 py-1.5 rounded-md hover:border-[#12F7D6] transition"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span>{currentLang.label}</span>
        <FaChevronDown
          className={`ml-1 transition-transform ${open ? "rotate-180" : ""}`}
          size={12}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-[#292F36] border border-gray-600 rounded-md shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLocale(lang.code)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-[#12F7D6] hover:text-[#1C1F23] transition ${
                locale === lang.code ? "bg-[#1C1F23] text-[#12F7D6]" : "text-white"
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
