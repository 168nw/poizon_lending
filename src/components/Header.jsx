"use client"
import React from "react";
import { assets } from '@/assets/assets';
import Link from "next/link"
import Image from "next/image";
import { CommentOutlined } from "@ant-design/icons";

const Header = () => {

  return (
<nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700 w-full">
  {/* Логотип слева */}
  <div className="flex-1 flex items-center">
    <Image
      className="cursor-pointer w-28 md:w-32 object-contain"
      src={assets.logo}
      alt="logo"
    />
  </div>

  {/* Меню по центру */}
  <div className="flex-1 flex items-center justify-center gap-4 lg:gap-8 max-md:hidden">
    <Link href="/" className="text-[#1BE8F7] hover:text-gray-900 transition">Главная</Link>
    <Link href="/all-products" className="text-[#1BE8F7] hover:text-gray-900 transition">Товары</Link>
    <Link href="/" className="text-[#1BE8F7] hover:text-gray-900 transition">О нас</Link>
    <Link href="/" className="text-[#1BE8F7] hover:text-gray-900 transition">Контакты</Link>
  </div>

  {/* Иконка справа */}
  <div className="flex-1 flex items-center justify-end gap-4">
    <Link href="https://t.me/abramov_logistic" className="text-[#1BE8F7] hover:text-gray-900 transition"><CommentOutlined /> </Link>
  </div>
</nav>
  );
};

export default Header;