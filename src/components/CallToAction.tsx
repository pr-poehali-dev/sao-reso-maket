import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CallToAction = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы защитить то, что важно?
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Получите персональное предложение за 2 минуты. Наши эксперты помогут
            выбрать оптимальную программу страхования.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать онлайн
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 border-gray-600 text-white hover:bg-gray-800"
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Задать вопрос
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <Icon name="Phone" className="text-blue-400 mb-3" size={32} />
              <h3 className="text-lg font-semibold text-white mb-2">
                Круглосуточная поддержка
              </h3>
              <p className="text-gray-300 mb-3">8 800 555-01-01</p>
              <p className="text-sm text-gray-400">
                Звонок по России бесплатный
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <Icon name="Mail" className="text-blue-400 mb-3" size={32} />
              <h3 className="text-lg font-semibold text-white mb-2">
                Онлайн консультация
              </h3>
              <p className="text-gray-300 mb-3">info@reso.ru</p>
              <p className="text-sm text-gray-400">Ответим в течение часа</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
