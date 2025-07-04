import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm">
            Магазин основанный Давидом Абрамовым в 2025 году.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Компания</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline text-gray-900 transition" href="#">Главная</a>
              </li>
              <li>
                <a className="hover:underline text-gray-900 transition" href="#">О нас</a>
              </li>
              <li>
                <a className="hover:underline text-gray-900 transition" href="#">Контакты</a>
              </li>
              <li>
                <a className="hover:underline text-gray-900 transition" href="#">Политика конфендециальности</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Позвонить нам</h2>
            <div className="text-sm space-y-2">
              <p>+7-(931)-611-72-76</p>
              <p>t.me/abramov_logistic</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        Иркутск 2025 © AbramovLogistic.com Авторские права организаций защищены.
      </p>
    </footer>
  );
};

export default Footer;