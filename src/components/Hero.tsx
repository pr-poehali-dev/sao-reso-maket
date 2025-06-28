import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Надёжная защита
            <span className="text-blue-600"> вашего будущего</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            RESO-Garantiya — ведущая страховая компания России. Более 30 лет мы
            защищаем то, что важно для вас.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать стоимость
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              <Icon name="Phone" className="mr-2" size={20} />
              Консультация
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <Icon
                name="Award"
                className="text-blue-600 mx-auto mb-3"
                size={40}
              />
              <h3 className="font-semibold text-gray-900 mb-2">№1 в России</h3>
              <p className="text-gray-600 text-sm">
                По объёму страховых премий
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <Icon
                name="Users"
                className="text-blue-600 mx-auto mb-3"
                size={40}
              />
              <h3 className="font-semibold text-gray-900 mb-2">
                15+ млн клиентов
              </h3>
              <p className="text-gray-600 text-sm">
                Доверяют нам по всей стране
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <Icon
                name="MapPin"
                className="text-blue-600 mx-auto mb-3"
                size={40}
              />
              <h3 className="font-semibold text-gray-900 mb-2">3000+ офисов</h3>
              <p className="text-gray-600 text-sm">В 82 регионах России</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
