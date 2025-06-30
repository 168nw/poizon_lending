export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <header className="w-full p-6 bg-white shadow">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Доставка из Китая</h1>
          <nav className="space-x-6">
            <a href="#services" className="text-gray-700 hover:text-red-600">Услуги</a>
            <a href="#advantages" className="text-gray-700 hover:text-red-600">Преимущества</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600">Контакты</a>
          </nav>
        </div>
      </header>

      <section className="text-center py-24 px-6 bg-[url('/hero-bg.jpg')] bg-cover bg-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Быстрая и надежная доставка товаров из Китая</h2>
        <p className="text-lg mb-8">Доставим любые товары — от мелкого электроники до крупногабаритных грузов</p>
        <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl text-lg font-medium transition">Оставить заявку</a>
      </section>

      <section id="services" className="py-20 container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Наши услуги</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow text-center">
            <h4 className="text-xl font-semibold mb-4">Выкуп товаров</h4>
            <p className="text-gray-600">Покупка товаров с Taobao, 1688, Alibaba под ключ.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow text-center">
            <h4 className="text-xl font-semibold mb-4">Консолидация</h4>
            <p className="text-gray-600">Объединение товаров на складе перед отправкой для экономии.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow text-center">
            <h4 className="text-xl font-semibold mb-4">Доставка</h4>
            <p className="text-gray-600">Доставка авиа, ЖД, морем с полным отслеживанием.</p>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-gray-100 px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h3>
        <div className="grid md:grid-cols-3 gap-8 container mx-auto">
          <div className="p-6 text-center">
            <h4 className="text-xl font-semibold mb-4">Низкие цены</h4>
            <p className="text-gray-600">Прямые поставки без посредников и скрытых комиссий.</p>
          </div>
          <div className="p-6 text-center">
            <h4 className="text-xl font-semibold mb-4">Гарантия сроков</h4>
            <p className="text-gray-600">Доставим в срок или вернем деньги.</p>
          </div>
          <div className="p-6 text-center">
            <h4 className="text-xl font-semibold mb-4">Поддержка 24/7</h4>
            <p className="text-gray-600">Ответим на все вопросы и поможем с заказом.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-8">Связаться с нами</h3>
        <form className="max-w-xl mx-auto space-y-6">
          <input type="text" placeholder="Ваше имя" className="w-full p-4 rounded-xl border" />
          <input type="tel" placeholder="Телефон" className="w-full p-4 rounded-xl border" />
          <textarea placeholder="Ваш запрос" className="w-full p-4 rounded-xl border h-32"></textarea>
          <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl text-lg font-medium transition w-full">Отправить</button>
        </form>
      </section>

      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; 2025 Доставка из Китая. Все права защищены.</p>
      </footer>
    </main>
  )
}
