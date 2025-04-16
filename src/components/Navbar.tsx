
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        'fixed w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-12',
        scrolled ? 'py-4 bg-fami-black/90 backdrop-blur-sm' : 'py-6 bg-transparent'
      )}
    >
      <div className="flex items-center justify-between">
        <a 
          href="#" 
          className="font-display text-2xl md:text-3xl text-fami-gold"
        >
          (Fami) Paris
        </a>
        
        <nav className="hidden md:flex items-center space-x-10 text-xs tracking-widest uppercase">
          <a href="#story" className="text-fami-cream hover:text-fami-gold transition-colors">La Maison</a>
          <a href="#interiors" className="text-fami-cream hover:text-fami-gold transition-colors">Le Décor</a>
          <a href="#suites" className="text-fami-cream hover:text-fami-gold transition-colors">Les Suites</a>
          <a 
            href="#suites" 
            className="border border-fami-gold text-fami-gold px-8 py-3 hover:bg-fami-gold/10 transition-all"
          >
            Book
          </a>
        </nav>
        
        <button 
          className="md:hidden text-fami-gold"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-fami-black/95 backdrop-blur-sm">
          <div className="flex flex-col py-8 px-6 space-y-6">
            <a 
              href="#story" 
              className="text-fami-cream hover:text-fami-gold text-sm tracking-widest uppercase py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              L&apos;story
            </a>
            <a 
              href="#suites" 
              className="text-fami-cream hover:text-fami-gold text-sm tracking-widest uppercase py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </a>
            <a 
              href="#interiors" 
              className="text-fami-cream hover:text-fami-gold text-sm tracking-widest uppercase py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Intérieurs
            </a>
            <button className="border border-fami-gold text-fami-gold px-6 py-3 hover:bg-fami-gold/10 transition-all w-full text-sm tracking-widest uppercase">
              Menu
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
