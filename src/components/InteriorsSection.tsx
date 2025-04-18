import { useEffect, useRef } from 'react';

const InteriorsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = sectionRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach(el => observer.observe(el));

    return () => {
      revealElements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="interiors" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-fami-black"
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="reveal font-display text-3xl md:text-5xl text-fami-gold mb-6 text-center">
            Styled Spaces
          </h2>

          <p className="reveal text-fami-cream/70 text-center max-w-xl mx-auto mb-16 font-serif italic">
            "Play with contrast to create balance across the entire space: Minimalist and Brutalist; hidden yet open; calm yet electric—at the center of everything, yet cozily sheltered from it."
          </p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-24">
            <div className="reveal h-[400px] md:h-[600px] bg-fami-darkgray/60 relative group overflow-hidden">
              <div 
                className="absolute inset-0 transition-transform duration-700 ease-in-out 
                bg-[url('/fami-bed.png')] bg-cover bg-center group-hover:scale-105"
              ></div>
              <div 
                className="absolute inset-0 bg-gradient-to-t from-fami-black via-fami-black/50 to-transparent 
                opacity-80 group-hover:opacity-60 transition-opacity duration-500"
              ></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="font-serif text-fami-gold text-xl mb-2 group-hover:text-fami-cream transition-colors">
                  Curated Comfort
                </h3>
                <div className="h-px w-12 bg-fami-gold/70 mb-4"></div>
                <p className="text-fami-cream/70 text-sm max-w-xs">
                  Sleek contemporary furnishings and thoughtful details create an atmosphere of effortless and refined ease.
                </p>
              </div>
            </div>

            <div className="reveal h-[400px] md:h-[600px] bg-fami-darkgray/60 relative group overflow-hidden" style={{transitionDelay: '0.2s'}}>
              <div 
                className="absolute inset-0 transition-transform duration-700 ease-in-out 
                bg-[url('/fami-chairs.png')] bg-cover bg-center group-hover:scale-105"
              ></div>
              <div 
                className="absolute inset-0 bg-gradient-to-t from-fami-black via-fami-black/50 to-transparent 
                opacity-80 group-hover:opacity-60 transition-opacity duration-500"
              ></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="font-serif text-fami-gold text-xl mb-2 group-hover:text-fami-cream transition-colors">
                  Material Harmony
                </h3>
                <div className="h-px w-12 bg-fami-gold/70 mb-4"></div>
                <p className="text-fami-cream/70 text-sm max-w-xs">
                  Carefully selected materials like warm walnut and natural travertine define a sophisticated yet inviting ambience.
                </p>
              </div>
            </div>
          </div>

          <div className="reveal text-center">
            <a href="#suites" className="inline-block border border-fami-gold px-8 py-3 text-fami-gold hover:bg-fami-gold/10 transition-colors text-sm tracking-widest uppercase">
              Discover Our Suites
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorsSection;