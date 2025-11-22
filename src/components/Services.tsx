import { useLanguage } from '@/contexts/LanguageContext';
import mosqueImage from '@/assets/mosque-chandelier.jpg';
import weddingImage from '@/assets/wedding-chandelier.jpg';
import homeImage from '@/assets/home-chandelier.jpg';

export const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.mosque,
      description: t.services.mosqueDesc,
      image: mosqueImage,
    },
    {
      title: t.services.wedding,
      description: t.services.weddingDesc,
      image: weddingImage,
    },
    {
      title: t.services.home,
      description: t.services.homeDesc,
      image: homeImage,
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t.services.title}
          </h2>
          <p className="font-playfair text-xl text-primary">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border border-border transition-all duration-300 hover:border-primary hover:shadow-luxury bg-background"
            >
              <div className="aspect-square relative overflow-hidden group">
                <img
                  src={service.image}
                  alt={service.title}
                  loading='lazy'
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 max-h-[50%] overflow-hidden">
                <h3 className="font-playfair text-2xl font-semibold mb-2 text-foreground">
                  {service.title}
                </h3>
                <div className="relative">
                  <p className="font-inter text-muted-foreground line-clamp-3 hover:line-clamp-none transition-all duration-500">
                    {service.description}
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
