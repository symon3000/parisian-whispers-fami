
import { useEffect, useRef } from 'react';

const StorySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      id="story" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-b from-fami-black to-fami-charcoal"
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal font-display text-3xl md:text-5xl text-fami-gold mb-12 text-center">
            L&apos;Story
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <div className="reveal">
              <div className="aspect-[3/4] bg-fami-darkgray/80 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-fami-black via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-serif text-fami-cream text-2xl mb-2">Heritage</h3>
                  <div className="h-px w-12 bg-fami-gold mb-4"></div>
                  <p className="text-fami-cream/70 text-sm">
                    Housed in a restored 17th-century building, Fami Paris 
                    preserves the whispers of history within its walls.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="reveal" style={{transitionDelay: '0.2s'}}>
              <p className="text-fami-cream/80 mb-6 leading-relaxed">
                In the heart of old Paris, where cobblestone streets tell stories of centuries 
                past, Fami stands as a testament to timeless elegance and discreet luxury. 
              </p>
              
              <p className="text-fami-cream/80 mb-6 leading-relaxed">
                The vision behind Fami was to create not merely accommodations, but 
                an intimate sanctuary where the rich history of Paris meets contemporary comfort 
                in perfect harmony.
              </p>
              
              <p className="text-fami-cream/80 leading-relaxed">
                Each element of Fami has been thoughtfully curated—from the preserved 
                architectural details to the carefully selected furnishings—creating 
                spaces that feel both historically authentic and subtly modern.
              </p>
              
              <div className="mt-8 flex justify-start">
                <a href="#interiors" className="group flex items-center text-fami-gold hover:text-fami-cream transition-colors">
                  <span className="text-sm tracking-wide uppercase mr-2">Discover more</span>
                  <span className="w-6 h-px bg-fami-gold group-hover:bg-fami-cream group-hover:w-10 transition-all"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
