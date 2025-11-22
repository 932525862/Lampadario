import { useLanguage } from '@/contexts/LanguageContext';
import { Send, Instagram } from 'lucide-react';
import Logo from '@/assets/lampadrio.png'
export const Footer = () => {
  const { t, language } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={Logo} alt="Lampadario Logo" className="h-10 w-auto" />
              <h3 className="font-playfair text-2xl font-bold text-primary">Lampadario</h3>
            </div>
            <p className="font-inter text-muted-foreground">
              {language === 'ru' 
                ? 'Роскошные люстры ручной работы для свадеб, мечетей и домов.'
                : 'To\'ylar, masjidlar va uylar uchun qo\'lda ishlangan hashamatli qandillar.'}
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4 text-foreground">
              {t.footer.company}
            </h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('about')}
                className="block font-inter text-muted-foreground hover:text-primary transition-colors"
              >
                {t.footer.about}
              </button>
               <button
                onClick={() => scrollToSection('services')}
                className="block font-inter text-muted-foreground hover:text-primary transition-colors"
              >
                {t.footer.services}
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block font-inter text-muted-foreground hover:text-primary transition-colors"
              >
                {t.footer.portfolio}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block font-inter text-muted-foreground hover:text-primary transition-colors"
              >
                {t.footer.contact}
              </button>
            </nav>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4 text-foreground">
              {t.nav.contact}
            </h4>
            <p className="font-inter text-muted-foreground mb-4">
               Tel: +998 99 875 01 46 <br/>
               Tel: +998 97 720 48 13
            </p>
            <div className="flex gap-4">
              <a
                href="https://t.me/lyustriy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/lampadario_qandil?igsh=d2diemhlZGthYWZu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="font-inter text-muted-foreground">
            © {new Date().getFullYear()} Lampadario. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};
