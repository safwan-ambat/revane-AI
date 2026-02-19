import React from 'react';
import { Menu, ChevronDown } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Logo Placeholder */}
          <div className="flex items-center gap-2">
            <img
              src="/src/assets/images/Logo.svg"
              alt="Revane logo"
              className="h-8 w-auto"
            />

          </div>
          <div className="hidden md:block w-px h-[42px] bg-[#D9D7CF] mx-0"></div>
          <div className="hidden md:flex justify-start text-stone-100 text-[10px] font-medium font-['Open_Sauce_One'] leading-4">
            Digital<br/>Finance<br/>Team
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors group">
            Products
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
          </button>
          <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors group">
            Resources
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
          </button>
          <a href="#manifesto" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Manifesto</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:inline-flex px-4 py-2 bg-white rounded-sm shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-stone-200 justify-center items-center gap-1">
            <span className="text-center text-zinc-800 text-base font-medium font-['Inter'] leading-6">Request a demo</span>
          </button>
          <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
