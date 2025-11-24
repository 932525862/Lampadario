import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Telegram bot token va chat ID
    const BOT_TOKEN = '8590366389:AAFikofEZxQ3h4UG7om5aGMJuGA_uRAPc-s';
    const CHAT_ID = '-1003476884363';
    
    // Xabarni tayyorlash
    const message = `
📧 <b>Yangi so'rov</b>

👤 <b>Ism:</b> ${formData.name}
📱 <b>Telefon:</b> ${formData.phone}
💬 <b>Xabar:</b> ${formData.message}
    `.trim();

    // Telegram API'ga yuborish
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          toast({
            title: language === 'ru' ? 'Спасибо за обращение!' : 'Murojaatingiz uchun rahmat!',
            description: language === 'ru' 
              ? 'Мы свяжемся с вами в ближайшее время.' 
              : 'Tez orada siz bilan bog\'lanamiz.',
          });

          setFormData({
            name: '',
            phone: '',
            message: '',
          });
        } else {
          toast({
            title: language === 'ru' ? 'Ошибка' : 'Xatolik',
            description: language === 'ru' 
              ? 'Сообщение не удалось отправить. Попробуйте позже.'
              : 'Xabarni yuborib bo\'lmadi. Keyinroq qayta urinib ko\'ring.',
            variant: 'destructive',
          });
        }
      })
      .catch((error) => {
        console.error('Telegram API xatosi:', error);
        toast({
          title: language === 'ru' ? 'Ошибка' : 'Xatolik',
          description: language === 'ru' 
            ? 'Сообщение не удалось отправить. Попробуйте позже.'
            : 'Xabarni yuborib bo\'lmadi. Keyinroq qayta urinib ko\'ring.',
          variant: 'destructive',
        });
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
                placeholder={language === 'ru' ? 'Введите ваше имя' : 'Ismingizni kiriting'}
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
                placeholder="+99899-445-50-46"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="message" className="font-inter">
                {t.contact.message}
              </Label>
              <Textarea
                id="message"
                placeholder={language === 'ru' ? 'Напишите ваше сообщение...' : 'Xabaringizni yozing...'}
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
