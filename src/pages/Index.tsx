import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: 'Индивидуальная консультация',
      description: 'Персональная работа с психологом в формате видеосвязи',
      duration: '60 минут',
      features: ['Конфиденциальность', 'Видеоформат', 'Записи сессий'],
      icon: 'User'
    },
    {
      title: 'Коучинг-сессия',
      description: 'Достижение целей и личностный рост',
      duration: '90 минут',
      features: ['План развития', 'Домашние задания', 'Поддержка 24/7'],
      icon: 'Target'
    },
    {
      title: 'Групповая терапия',
      description: 'Работа в поддерживающей группе единомышленников',
      duration: '120 минут',
      features: ['До 8 человек', 'Еженедельно', 'Закрытая группа'],
      icon: 'Users'
    }
  ];

  const prices = [
    { name: 'Разовая консультация', price: '5 000 ₽', duration: '60 мин', popular: false },
    { name: 'Пакет 4 сессии', price: '18 000 ₽', duration: '4×60 мин', popular: true, save: 'Экономия 2 000 ₽' },
    { name: 'Коучинг (месяц)', price: '25 000 ₽', duration: '4×90 мин', popular: false }
  ];

  const reviews = [
    {
      name: 'Анна К.',
      text: 'Профессиональный подход и абсолютная конфиденциальность. За 3 месяца работы я научилась справляться с тревожностью.',
      rating: 5
    },
    {
      name: 'Дмитрий С.',
      text: 'Коучинг помог мне выстроить карьерный план и достичь повышения. Благодарен за поддержку!',
      rating: 5
    },
    {
      name: 'Мария Л.',
      text: 'Удобный формат онлайн-сессий и гибкий график. Чувствую реальные изменения в жизни.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Brain" className="text-primary" size={28} />
              <span className="text-xl font-semibold">Психолог Online</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'services', 'prices', 'reviews', 'about'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'services' && 'Услуги'}
                  {section === 'prices' && 'Цены'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'about' && 'Обо мне'}
                </button>
              ))}
            </div>
            <Button className="hidden md:inline-flex">Записаться</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge variant="secondary" className="mb-4">
              <Icon name="Shield" size={14} className="mr-1" />
              100% конфиденциально
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Профессиональная психологическая помощь онлайн
            </h1>
            <p className="text-xl text-muted-foreground">
              Квалифицированный психолог и коуч с 10-летним опытом. 
              Помогаю справиться с тревогой, найти цели и достичь гармонии.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="text-lg" onClick={() => scrollToSection('prices')}>
                Записаться на консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection('about')}>
                Узнать больше
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-12 max-w-2xl mx-auto">
              <div className="text-center space-y-2">
                <Icon name="Lock" className="mx-auto text-primary" size={32} />
                <p className="text-sm font-medium">Защита данных</p>
              </div>
              <div className="text-center space-y-2">
                <Icon name="Award" className="mx-auto text-primary" size={32} />
                <p className="text-sm font-medium">10 лет опыта</p>
              </div>
              <div className="text-center space-y-2">
                <Icon name="UserCheck" className="mx-auto text-primary" size={32} />
                <p className="text-sm font-medium">500+ клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Мои услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Индивидуальный подход к каждому клиенту с гарантией полной конфиденциальности
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <Card key={idx} className="hover-scale border-2 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Clock" size={16} className="text-muted-foreground" />
                      <span>{service.duration}</span>
                    </div>
                    <Separator />
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Прозрачные цены</h2>
            <p className="text-muted-foreground">Без скрытых платежей. Оплата после каждой сессии.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {prices.map((price, idx) => (
              <Card 
                key={idx} 
                className={`relative ${price.popular ? 'border-primary border-2 shadow-lg scale-105' : ''}`}
              >
                {price.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Популярно
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{price.name}</CardTitle>
                  <CardDescription>{price.duration}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-4xl font-bold text-primary">{price.price}</div>
                  {price.save && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {price.save}
                    </Badge>
                  )}
                  <Button className="w-full" variant={price.popular ? 'default' : 'outline'}>
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-muted-foreground">Все отзывы публикуются с согласия клиентов (имена изменены)</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={idx} className="hover-scale">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Обо мне</h2>
            </div>
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Елена Смирнова</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Клинический психолог, сертифицированный коуч ICF. 
                      Более 10 лет помогаю людям справляться с тревогой, депрессией, 
                      находить жизненные цели и строить гармоничные отношения.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Icon name="GraduationCap" className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Образование</p>
                          <p className="text-sm text-muted-foreground">МГУ, факультет психологии</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Award" className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Сертификаты</p>
                          <p className="text-sm text-muted-foreground">CBT, ACT, ICF Coach</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Languages" className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Языки</p>
                          <p className="text-sm text-muted-foreground">Русский, Английский</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg p-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-4 bg-background rounded-lg">
                        <Icon name="ShieldCheck" className="text-green-600" size={24} />
                        <div>
                          <p className="font-semibold text-sm">Конфиденциальность</p>
                          <p className="text-xs text-muted-foreground">Полная защита данных</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-background rounded-lg">
                        <Icon name="Lock" className="text-blue-600" size={24} />
                        <div>
                          <p className="font-semibold text-sm">Безопасность</p>
                          <p className="text-xs text-muted-foreground">Шифрование сессий</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-background rounded-lg">
                        <Icon name="FileCheck" className="text-purple-600" size={24} />
                        <div>
                          <p className="font-semibold text-sm">Лицензия</p>
                          <p className="text-xs text-muted-foreground">Аккредитованный специалист</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы начать путь к изменениям?</h2>
          <p className="text-xl mb-8 opacity-90">Первая консультация — это шаг к новой жизни</p>
          <Button size="lg" variant="secondary" className="text-lg">
            <Icon name="Calendar" size={20} className="mr-2" />
            Записаться на консультацию
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Brain" className="text-primary" size={24} />
                <span className="font-semibold">Психолог Online</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональная психологическая помощь с гарантией конфиденциальности
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@psycholog-online.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Безопасность</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Shield" size={16} />
                  Шифрование данных SSL
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Lock" size={16} />
                  GDPR compliant
                </p>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Психолог Online. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
