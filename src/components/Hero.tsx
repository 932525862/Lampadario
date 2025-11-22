import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-chandelier.jpg';
import {Phone} from "lucide-react"
export const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in">
            {t.hero.title}
          </h1>
          <p className="font-playfair text-2xl md:text-3xl text-primary mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t.hero.subtitle}
          </p>
          <p className="font-inter text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {t.hero.description}
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="font-inter text-lg px-8 py-6 shadow-luxury hover:scale-105 transition-transform animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            {t.hero.cta}
          </Button>
        </div>
      </div>

      <a
        href="tel:+998998750146"
        aria-label="Call us"
        className="fixed bottom-6 right-6 z-50"
      >
        <span className="sr-only">Call us</span>
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#d9a520] text-primary-foreground shadow-xl hover:shadow-2xl transition-transform duration-200 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center ring-0 hover:ring-4 hover:ring-primary/20 focus:outline-none focus:ring-4 focus:ring-primary/30">
          <Phone className="w-6 h-6 md:w-7 md:h-7" />
        </div>
      </a>
    </section>
  );
};
