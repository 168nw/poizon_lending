import React  from 'react';
import Image from 'next/image'; 
import { assets } from "@/assets/assets";
import Link from 'next/link';


const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 bg-[#E6E9F2] my-16 rounded-xl  overflow-hidden ">
      <Image
        className="max-w-56 pr-10"
        src={assets.white_tshirt}
        alt="white_tshirt"
      />
      <div className="flex flex-col items-center justify-center text-center space-y-2 px-4 md:px-0 pb-10 pt-10">
        <h2 className="text-2xl md:text-3xl font-semibold max-w-[290px]">
        Хватит покупать в 3 раза дороже!
        </h2>
        <p className="max-w-[343px] font-medium text-gray-800/60">
            Покупай товары напрямую из Китая с доставкой в Россию. Мы предлагаем выгодные цены и быструю доставку.
        </p>
        <Link href="https://t.me/abramov_logistic">
                <button className="group flex items-center justify-center gap-1 px-12 py-2.5 bg-[#1BE8F7] rounded text-white ">
          Написать нам
          <Image className="group-hover:translate-x-1 transition" src={assets.arrow_icon_white} alt="arrow_icon_white" />
        </button>
        </Link>
      </div>
      <Image
        className="hidden md:block max-w-80 pl-10 pr-10"
        src={assets.shoes_superstar}
        alt="shoes_superstar"
      />
    </div>
  );
};

export default Banner;