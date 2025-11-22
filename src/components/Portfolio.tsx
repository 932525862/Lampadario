import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import mosqueImage from '@/assets/mosque-chandelier.jpg';
import weddingImage from '@/assets/wedding-chandelier.jpg';
import homeImage from '@/assets/home-chandelier.jpg';
import qandil from '@/assets/photo_2024-07-04_20-28-10.jpg';
import qandil5 from '@/assets/5.jpg';
import qandil6 from '@/assets/6.jpg';
import qandil7 from '@/assets/7.jpg';
import qandil8 from '@/assets/8.jpg';
import qandil9 from '@/assets/9.jpg';
import qandil10 from '@/assets/10.jpg';
export const Portfolio = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState<number | null>(null);

  const projects = [
    {
      title: t.portfolio.project1,
      description: t.portfolio.project1Desc,
      image: mosqueImage,
    },
    {
      title: t.portfolio.project2,
      description: t.portfolio.project2Desc,
      image: weddingImage,
    },
    {
      title: t.portfolio.project3,
      description: t.portfolio.project3Desc,
      image: homeImage,
    },
    {
      title: t.portfolio.project4,
      description: t.portfolio.project4Desc,
      image: qandil,
    },
    {
      title: t.portfolio.project5,
      description: t.portfolio.project5Desc,
      image: qandil5,
    },
    {
      title: t.portfolio.project6,
      description: t.portfolio.project6Desc,
      image: qandil6,
    },
    {
      title: t.portfolio.project7,
      description: t.portfolio.project7Desc,
      image: qandil7,
    },
    {
      title: t.portfolio.project8,
      description: t.portfolio.project8Desc,
      image: qandil8,
    },
    {
      title: t.portfolio.project9,
      description: t.portfolio.project9Desc,
      image: qandil9,
    },
    {
      title: t.portfolio.project10,
      description: t.portfolio.project10Desc,
      image: qandil10,
    },
   

  ];

  return (
    <section id="portfolio" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t.portfolio.title}
          </h2>
          <p className="font-playfair text-xl text-primary">{t.portfolio.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(active === index ? null : index)}
              role="button"
              aria-expanded={active === index}
              className={`relative ${active === index ? 'overflow-visible' : 'overflow-hidden'} rounded-lg border border-border transition-all duration-300 hover:border-primary hover:shadow-luxury bg-background`}
            >
              <div className="aspect-[4/3] relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  loading='lazy'
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">
                  {project.title}
                </h3>
                <div className="relative">
                    <p className={`font-inter text-muted-foreground transition-all duration-500 ${active === index ? '' : 'line-clamp-3'}`}>
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
