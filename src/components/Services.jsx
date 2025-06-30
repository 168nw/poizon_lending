import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const serviceСards = [
  {
    id: 1,
    image: assets.vicup_tovara,
    title: "Выкуп товара",
    description: "Покупка товаров с любых плошадок: Poizon, Taobao, 1688, GoldFish и других.",
  },
  {
    id: 2,
    image: assets.sklad,
    title: "Консолидация",
    description: "Объединение товаров на складе перед отправкой для экономии.",
  },
  {
    id: 3,
    image: assets.delivery,
    title: "Доставка",
    description: "Одна из быстрых доставок, от 10 дней.",
  },
];

const Services = () => {
  return (
    <div className="mt-14">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium">Наши услуги</p>
        <div className="w-28 h-0.5 bg-[#1BE8F7] mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {serviceСards.map(({ id, image, title, description }) => (
          <div key={id} className="relative group">
            <Image
              src={image}
              alt={title}
              className="group-hover:brightness-75 transition duration-300 w-full h-auto object-cover"
            />
            <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-2">
              <p className="font-medium text-xl lg:text-2xl text-cyan-300">{title}</p>
              <p className="text-sm lg:text-base leading-5 max-w-60 text-gray-150">
                {description}
              </p>
              <button className="flex items-center gap-1.5  px-4 py-2 bg-[#1BE8F7] rounded">
                Написать нам <Image className="h-3 w-3" src={assets.arrow_icon} alt="Redirect Icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;