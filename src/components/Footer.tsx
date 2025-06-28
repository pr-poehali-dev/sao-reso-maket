import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Shield" className="text-blue-600" size={32} />
              <span className="text-xl font-bold text-gray-900">
                RESO-Garantiya
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Надёжная страховая защита с 1991 года
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Facebook"
                className="text-gray-400 hover:text-blue-600 cursor-pointer"
                size={20}
              />
              <Icon
                name="Twitter"
                className="text-gray-400 hover:text-blue-600 cursor-pointer"
                size={20}
              />
              <Icon
                name="Instagram"
                className="text-gray-400 hover:text-blue-600 cursor-pointer"
                size={20}
              />
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Страхование</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/auto" className="text-gray-600 hover:text-blue-600">
                  Автострахование
                </Link>
              </li>
              <li>
                <Link
                  to="/property"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Недвижимость
                </Link>
              </li>
              <li>
                <Link
                  to="/health"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Медицинское
                </Link>
              </li>
              <li>
                <Link
                  to="/travel"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Путешествия
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Клиентам</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/account"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Личный кабинет
                </Link>
              </li>
              <li>
                <Link
                  to="/claims"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Урегулирование
                </Link>
              </li>
              <li>
                <Link
                  to="/documents"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Документы
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-blue-600">
                  Вопросы и ответы
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Icon name="Phone" className="text-gray-400 mr-2" size={16} />
                <span className="text-gray-600">8 800 555-01-01</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="text-gray-400 mr-2" size={16} />
                <span className="text-gray-600">info@reso.ru</span>
              </div>
              <div className="flex items-start">
                <Icon
                  name="MapPin"
                  className="text-gray-400 mr-2 mt-0.5"
                  size={16}
                />
                <span className="text-gray-600">
                  Москва, ул. Садовническая, 12
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 RESO-Garantiya. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-gray-500 hover:text-blue-600 text-sm"
              >
                Политика конфиденциальности
              </Link>
              <Link
                to="/terms"
                className="text-gray-500 hover:text-blue-600 text-sm"
              >
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
