import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/Portfolio';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

import { useEffect } from 'react';

export const useSEO = (title: string, description: string, canonical: string) => {
  useEffect(() => {
    document.title = title;
    
    const descTag = document.querySelector("meta[name='description']");
    if (descTag) descTag.setAttribute("content", description);

    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical);
  }, [title, description, canonical]);
};

const Index = () => {
  useSEO(
    "Lampadario – Hashematli qandillar to‘plami",
    "To‘ylar, masjidlar va uylar uchun qo‘lda ishlangan hashamatli qandillar.",
    "https://chandeliers/"
  );
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
