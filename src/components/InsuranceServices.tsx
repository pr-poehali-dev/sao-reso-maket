import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const InsuranceServices = () => {
  const services = [
    {
      icon: "Car",
      title: "ОСАГО и КАСКО",
      description:
        "Обязательное и добровольное автострахование с выгодными условиями",
      features: ["Скидки до 50%", "Онлайн оформление", "Быстрые выплаты"],
    },
    {
      icon: "Home",
      title: "Страхование недвижимости",
      description: "Защита квартир, домов и коммерческой недвижимости",
      features: ["От 0,1% стоимости", "Включая отделку", "24/7 поддержка"],
    },
    {
      icon: "Heart",
      title: "Медицинское страхование",
      description: "ДМС для частных лиц и корпоративных клиентов",
      features: ["1200+ клиник", "Телемедицина", "Без франшизы"],
    },
    {
      icon: "Plane",
      title: "Страхование путешествий",
      description: "Туристическое страхование для поездок по всему миру",
      features: ["От 50₽ в день", "Покрытие COVID-19", "Мобильное приложение"],
    },
    {
      icon: "Building",
      title: "Корпоративное страхование",
      description: "Комплексные страховые решения для бизнеса",
      features: [
        "Индивидуальные программы",
        "Риск-менеджмент",
        "Dedicated менеджер",
      ],
    },
    {
      icon: "Shield",
      title: "Страхование жизни",
      description: "Накопительное и рисковое страхование жизни",
      features: ["Гарантированный доход", "Налоговые льготы", "Наследование"],
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Виды страхования
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Комплексные страховые решения для защиты всех сфер вашей жизни
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-blue-100"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <Icon
                    name={service.icon as any}
                    className="text-blue-600"
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <Icon
                      name="Check"
                      className="text-green-500 mr-2"
                      size={16}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="outline" size="sm" className="w-full">
                Подробнее
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceServices;
