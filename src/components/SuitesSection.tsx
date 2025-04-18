
import { useEffect, useRef } from 'react';

const SuitesSection = () => {
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

  const suites = [
    {
      name: "Première",
      description: "A soft Brutalist hideaway with warm travertine, a sun-drenched patio, and a Bastiano sofa made for lingering.",
      size: "70m²"
    },
    {
      name: "Deuxième",
      description: "Modernist calm meets timeless design, with a Cor Trio sofa and sculptural lighting setting the mood.",
      size: "60m²"
    },
    {
      name: "Troisième",
      description: "An expansive lofted retreat with room to gather, curl up, or drift off under Scandinavian lines and soft, glowing lamps.",
      size: "80m²"
    }
  ];

  return (
    <section 
      id="suites" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-b from-fami-charcoal to-fami-black"
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="reveal font-display text-3xl md:text-5xl text-fami-gold mb-12 text-center">
            Our Suites
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            {suites.map((suite, index) => (
              <div 
                key={suite.name}
                className="reveal bg-fami-darkgray/40 overflow-hidden" 
                style={{transitionDelay: `${index * 0.15}s`}}
              >
                <div className="aspect-[3/4] relative">
                  <div 
                    className="absolute inset-0 bg-[url('/fami-suite2.png')] bg-cover bg-center"
                    style={{
                      backgroundImage: index === 0 ? "url('/fami-suite2.png')" : 
                                    index === 1 ? "url('/fami-bathroom.png')" : 
                                    "url('/fami-kitchen.png')",
                      ...(index === 1 && { backgroundColor: 'rgba(0,0,0,0.3)', backgroundBlendMode: 'darken' })
                    }}
                  ></div>
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-fami-black via-transparent to-transparent"
                  ></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-fami-black via-fami-black/70 to-transparent flex flex-col">
                    <h3 className="font-serif text-fami-gold text-xl mb-1">{suite.name}</h3>
                    <div className="h-px w-10 bg-fami-gold/60 mb-3"></div>
                    <div className="min-h-[80px] md:min-h-[80px] lg:min-h-[100px]">
                      <p className="text-fami-cream/70 text-sm">{suite.description}</p>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-fami-cream/80 text-xs">{suite.size}</span>
                      <button className="text-fami-gold text-xs tracking-wider hover:text-fami-cream transition-colors">
                        DETAILS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="reveal mt-16 text-center" style={{transitionDelay: '0.45s'}}>
            <p className="text-fami-cream/70 mb-8 max-w-lg mx-auto">
              Three singular sanctuaries—cut from the same cloth, yet each unmistakably its own. Designed for quiet retreat or life in the thick of it, with noble materials, thoughtful details, and the quiet luxury of total privacy.
            </p>
            
            <a href="https://wa.me/19172090018?text=I'm%20interested%20in%20staying%20with%20Fami.%20Could%20you%20share%20current%20availability%2C%20please%3F" className="inline-block border border-fami-gold px-8 py-3 text-fami-gold hover:bg-fami-gold/10 transition-colors text-sm tracking-widest uppercase">
              Check Availability
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuitesSection;
