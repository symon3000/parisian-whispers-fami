
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
            Living History
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <div className="reveal">
              <div className="aspect-[3/4] relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-80"
                  style={{ backgroundImage: "url('/fami-stairs.png')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-fami-black via-fami-black/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-serif text-fami-cream text-2xl mb-2">Heritage</h3>
                  <div className="h-px w-12 bg-fami-gold mb-4"></div>
                  <p className="text-fami-cream/70 text-sm">
                    Housed in a restored 17th-century building, Fami 
                    preserves the spirit of history in its walls.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="reveal" style={{transitionDelay: '0.2s'}}>
              <p className="text-fami-cream/80 mb-6 leading-relaxed">
                In the beautiful Marais, where cobblestone streets tell stories of centuries past, Fami stands as a testament to elevated living in discreet luxury. 
              </p>
              
              <p className="text-fami-cream/80 mb-6 leading-relaxed">
                Fami was created to provide more than mere accommodation. As an intimate home-away-from home, it fosters the familiar comfort and ease felt among closest friends and family.
              </p>
              
              <p className="text-fami-cream/80 leading-relaxed">
                Each element of our suites have been thoughtfully curated—from the preserved 
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
