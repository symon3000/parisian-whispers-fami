
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-fami-black border-t border-fami-gold/20 py-16 text-fami-cream/60">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="font-display text-fami-gold text-xl mb-6">(Fami) Paris</h3>
            <p className="text-sm mb-4 leading-relaxed">
              234 Rue Saint-Martin<br />
              75003 Paris, France
            </p>
            <div className="flex items-center space-x-4 text-sm">
              {/* <a href="#" className="hover:text-fami-gold transition-colors">
                <Instagram size={18} />
              </a> */}
              {/* <a href="mailto:contact@famiparis.com" className="hover:text-fami-gold transition-colors">
                <Mail size={18} />
              </a> */}
              <a href="https://wa.me/19172090018?text=I'm%20interested%20in%20staying%20with%20Fami.%20Could%20you%20share%20current%20availability%2C%20please%3F" className="hover:text-fami-gold transition-colors">
                <Phone size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-fami-gold mb-4">Explore</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <a href="#story" className="hover:text-fami-gold transition-colors">La Maison</a>
              <a href="#suites" className="hover:text-fami-gold transition-colors">Les Suites</a>
              <a href="#interiors" className="hover:text-fami-gold transition-colors">Le Décor</a>
            </nav>
          </div>
          
          {/* <div>
            <h4 className="font-serif text-fami-gold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">
              Subscribe to receive updates on events, special offers, and Parisian whispers.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent border-b border-fami-cream/30 py-2 text-sm text-fami-cream placeholder:text-fami-cream/40 focus:outline-none focus:border-fami-gold"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-fami-gold text-xs uppercase tracking-wider hover:text-fami-cream transition-colors"
              >
                Submit
              </button>
            </form>
          </div> */}
        </div>
        
        <div className="mt-16 pt-6 border-t border-fami-gold/10 text-center text-xs text-fami-cream/40">
          <p>&copy; {new Date().getFullYear()} Fami Paris. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
