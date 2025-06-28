import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" className="text-blue-600" size={32} />
            <span className="text-2xl font-bold text-gray-900">
              RESO-Garantiya
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Главная
            </Link>
            <Link
              to="/insurance"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Виды страхования
            </Link>
            <Link
              to="/calculator"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Калькулятор
            </Link>
            <Link
              to="/account"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Личный кабинет
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              О нас
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Войти
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Рассчитать полис
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
