import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          entry.target.classList.remove('opacity-0');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen w-full bg-fami-black overflow-hidden"
      id="hero"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-t from-fami-black via-fami-black/60 to-transparent z-10"
        aria-hidden="true"
      />
      
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/fami-room.png')" }}
        aria-hidden="true"
      />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6 text-center">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-fami-gold mb-4">
          Where Paris Whispers
        </h1>
        <p className="font-serif text-fami-cream/80 max-w-lg text-sm md:text-base leading-relaxed mb-12">
          A hidden sanctuary in the heart of old Paris, where timeless elegance 
          meets intimate luxury. Discover our exclusive suites and secret spaces.
        </p>
        
        <div className="shimmer w-32 h-px bg-fami-gold/30"></div>
      </div>
      
      <a 
        href="#story"
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center text-fami-cream/70 hover:text-fami-gold transition-colors"
        aria-label="Scroll to discover"
      >
        <span className="text-xs tracking-widest uppercase mb-2">Découvrir</span>
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
