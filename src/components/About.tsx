import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, Award, Lightbulb } from 'lucide-react';

export const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Sparkles,
      title: t.about.feature1Title,
      description: t.about.feature1Desc,
    },
    {
      icon: Award,
      title: t.about.feature2Title,
      description: t.about.feature2Desc,
    },
    {
      icon: Lightbulb,
      title: t.about.feature3Title,
      description: t.about.feature3Desc,
    },
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t.about.title}
          </h2>
          <p className="font-playfair text-xl text-primary mb-6">{t.about.subtitle}</p>
          <p className="font-inter text-lg text-muted-foreground">
            {t.about.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-lg border border-border hover:border-primary transition-all hover:shadow-luxury group"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-playfair text-2xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="font-inter text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
