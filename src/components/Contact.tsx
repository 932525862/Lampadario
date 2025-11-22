import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For now, just show a success message
    // Later can be connected to backend
    toast({
      title: language === 'ru' ? 'Спасибо за обращение!' : 'Murojaatingiz uchun rahmat!',
      description: language === 'ru' 
        ? 'Мы свяжемся с вами в ближайшее время.' 
        : 'Tez orada siz bilan bog\'lanamiz.',
    });

    setFormData({
      name: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t.contact.title}
          </h2>
          <p className="font-playfair text-xl text-primary">{t.contact.subtitle}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="font-inter">
                {t.contact.name}
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="font-inter">
                {t.contact.phone}
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="service" className="font-inter">
                {t.contact.service}
              </Label>
              <Select
                value={formData.service}
                onValueChange={(value) => setFormData({ ...formData, service: value })}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder={t.contact.selectService} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mosque">{t.contact.mosqueLighting}</SelectItem>
                  <SelectItem value="wedding">{t.contact.weddingLighting}</SelectItem>
                  <SelectItem value="home">{t.contact.homeLighting}</SelectItem>
                  <SelectItem value="custom">{t.contact.custom}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message" className="font-inter">
                {t.contact.message}
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="mt-2"
              />
            </div>

            <Button type="submit" size="lg" className="w-full font-inter">
              {t.contact.submit}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
