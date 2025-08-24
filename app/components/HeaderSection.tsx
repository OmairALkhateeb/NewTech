import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function HeaderSection() {
  return (
    <header className="flex items-center justify-between p-6 md:p-8 shadow-md bg-[#292F36] text-white border-b border-gray-600">
      {/* Left: Logo + Title */}
      <div className="flex items-center space-x-2">
        <span className="text-[#12F7D6] text-2xl md:text-3xl font-bold">&lt;C\&gt;</span>
        <h1 className="text-2xl md:text-3xl font-bold">LiveTech</h1>
      </div>

      {/* Right: Navigation Menu */}
      <nav className="flex items-center space-x-2 md:space-x-4 text-sm md:text-lg">
        {/* Instagram */}
        <a href="#" className="inline-flex items-center gap-1 hover:text-[#12F7D6] transition">
          <FaInstagram className="text-xl sm:text-2xl md:text-3xl text-[#12F7D6]" />
          <span className="hidden sm:inline">Instagram</span>
        </a>

        {/* LinkedIn */}
        <a href="#" className="inline-flex items-center gap-1 hover:text-[#12F7D6] transition ml-2 md:ml-4">
          <FaLinkedin className="text-xl sm:text-2xl md:text-3xl text-[#12F7D6]" />
          <span className="hidden sm:inline">LinkedIn</span>
        </a>
      </nav>
    </header>
  );
}
