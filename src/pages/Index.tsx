import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    {
      id: 1,
      name: "Доски",
      description: "Строганые и нестроганые доски различных размеров",
      image: "/img/9cb30d11-54a6-487e-b401-0eeb8748a7cd.jpg",
      priceFrom: 2500,
      popular: true,
    },
    {
      id: 2,
      name: "Брус",
      description: "Клееный и цельный брус для строительства",
      image: "/img/a0ec5317-f803-4be7-9641-9f70fe9c7c17.jpg",
      priceFrom: 4500,
      popular: true,
    },
    {
      id: 3,
      name: "Вагонка",
      description: "Евровагонка и классическая вагонка",
      image: "/img/8b6c56b7-b84b-4172-8f83-95ad52f81bfd.jpg",
      priceFrom: 1800,
      popular: false,
    },
    {
      id: 4,
      name: "Фанера",
      description: "Березовая и хвойная фанера разных сортов",
      image: "/img/8b6c56b7-b84b-4172-8f83-95ad52f81bfd.jpg",
      priceFrom: 1200,
      popular: false,
    },
  ];

  const steps = [
    {
      step: 1,
      title: "Выбор товара",
      description: "Изучите каталог и выберите нужные материалы",
      icon: "Search",
    },
    {
      step: 2,
      title: "Расчет стоимости",
      description: "Укажите количество и получите точную цену",
      icon: "Calculator",
    },
    {
      step: 3,
      title: "Оформление заказа",
      description: "Заполните форму и выберите способ доставки",
      icon: "ShoppingCart",
    },
    {
      step: 4,
      title: "Получение товара",
      description: "Доставка на объект или самовывоз со склада",
      icon: "Truck",
    },
  ];

  return (
    <div className="min-h-screen bg-nature-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-nature-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="TreePine" className="h-8 w-8 text-forest-500" />
              <h1 className="text-2xl font-bold text-forest-700">ЭкоЛес</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#catalog"
                className="text-forest-600 hover:text-forest-800 font-medium"
              >
                Каталог
              </a>
              <a
                href="#prices"
                className="text-forest-600 hover:text-forest-800 font-medium"
              >
                Цены
              </a>
              <a
                href="#order"
                className="text-forest-600 hover:text-forest-800 font-medium"
              >
                Как заказать
              </a>
              <a
                href="#contacts"
                className="text-forest-600 hover:text-forest-800 font-medium"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-forest-600 hover:bg-forest-700 text-white">
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-forest-50 to-nature-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-forest-800 mb-6">
            Качественные лесоматериалы
          </h2>
          <p className="text-xl text-forest-600 mb-8 max-w-2xl mx-auto">
            Поставляем пиломатериалы высшего качества для строительства и
            ремонта. Собственное производство, конкурентные цены, быстрая
            доставка.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-forest-600 hover:bg-forest-700 text-white px-8"
            >
              <Icon name="Eye" className="h-5 w-5 mr-2" />
              Посмотреть каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-forest-600 text-forest-600 hover:bg-forest-50"
            >
              <Icon name="Calculator" className="h-5 w-5 mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-forest-800 mb-4">
              Каталог лесоматериалов
            </h2>
            <p className="text-lg text-forest-600">
              Выберите подходящий материал для вашего проекта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="hover:shadow-lg transition-shadow duration-300 border-nature-300"
              >
                <CardHeader className="p-0">
                  <div className="relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {category.popular && (
                      <Badge className="absolute top-2 right-2 bg-forest-600 text-white">
                        <Icon name="Star" className="h-3 w-3 mr-1" />
                        Популярно
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-forest-800 mb-2">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-forest-600 text-sm">
                    {category.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                  <div className="text-lg font-bold text-forest-700">
                    от {category.priceFrom.toLocaleString()} ₽/м³
                  </div>
                  <Button
                    size="sm"
                    className="bg-wood-500 hover:bg-wood-600 text-white"
                  >
                    Подробнее
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-forest-800 mb-4">
              Актуальные цены
            </h2>
            <p className="text-lg text-forest-600">
              Конкурентные цены на все виды лесоматериалов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-nature-300">
              <CardHeader>
                <CardTitle className="text-forest-800">
                  Доска обрезная
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-forest-600">25×150×6000 мм</span>
                    <span className="font-bold text-forest-800">
                      2 500 ₽/м³
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-forest-600">40×200×6000 мм</span>
                    <span className="font-bold text-forest-800">
                      2 800 ₽/м³
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-forest-600">50×250×6000 мм</span>
                    <span className="font-bold text-forest-800">
                      3 200 ₽/м³
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-nature-300">
              <CardHeader>
                <CardTitle className="text-forest-800">Брус клееный</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-forest-600">100×100×6000 мм</span>
                    <span className="font-bold text-forest-800">
                      4 500 ₽/м³
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-forest-600">150×150×6000 мм</span>
                    <span className="font-bold text-forest-800">
                      5 200 ₽/м³
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-forest-600">200×200×6000 мм</span>
                    <span className="font-bold text-forest-800">
                      6 800 ₽/м³
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-nature-300">
              <CardHeader>
                <CardTitle className="text-forest-800">Вагонка евро</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-forest-600">Сорт А</span>
                    <span className="font-bold text-forest-800">
                      1 800 ₽/м²
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-forest-600">Сорт В</span>
                    <span className="font-bold text-forest-800">
                      1 400 ₽/м²
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-forest-600">Сорт С</span>
                    <span className="font-bold text-forest-800">
                      1 000 ₽/м²
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-forest-600 hover:bg-forest-700 text-white"
            >
              <Icon name="FileText" className="h-5 w-5 mr-2" />
              Скачать прайс-лист
            </Button>
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section id="order" className="py-16 bg-nature-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-forest-800 mb-4">
              Как заказать
            </h2>
            <p className="text-lg text-forest-600">
              Простой процесс заказа в 4 шага
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-forest-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                    <Icon
                      name={step.icon}
                      className="h-8 w-8 text-forest-700"
                    />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-nature-400 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-forest-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-forest-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-wood-500 hover:bg-wood-600 text-white mr-4"
            >
              <Icon name="ShoppingCart" className="h-5 w-5 mr-2" />
              Оформить заказ
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-forest-600 text-forest-600 hover:bg-forest-50"
            >
              <Icon name="MessageCircle" className="h-5 w-5 mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-forest-800 mb-4">
              Контакты
            </h2>
            <p className="text-lg text-forest-600">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-nature-300">
              <CardContent className="p-6">
                <Icon
                  name="Phone"
                  className="h-12 w-12 text-forest-600 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-forest-800 mb-2">
                  Телефон
                </h3>
                <p className="text-forest-600 text-lg font-semibold mb-1">
                  +7 (495) 123-45-67
                </p>
                <p className="text-forest-500 text-sm">
                  Ежедневно с 8:00 до 20:00
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-nature-300">
              <CardContent className="p-6">
                <Icon
                  name="MapPin"
                  className="h-12 w-12 text-forest-600 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-forest-800 mb-2">
                  Адрес
                </h3>
                <p className="text-forest-600 mb-1">
                  г. Москва, Промышленная зона
                </p>
                <p className="text-forest-600 mb-1">ул. Лесная, д. 15</p>
                <p className="text-forest-500 text-sm">Склад и офис продаж</p>
              </CardContent>
            </Card>

            <Card className="text-center border-nature-300">
              <CardContent className="p-6">
                <Icon
                  name="Mail"
                  className="h-12 w-12 text-forest-600 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-forest-800 mb-2">
                  Email
                </h3>
                <p className="text-forest-600 text-lg font-semibold mb-1">
                  info@ekoles.ru
                </p>
                <p className="text-forest-500 text-sm">
                  Ответим в течение часа
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="TreePine" className="h-6 w-6" />
              <span className="text-xl font-bold">ЭкоЛес</span>
            </div>
            <div className="text-forest-300 text-sm">
              © 2024 ЭкоЛес. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
