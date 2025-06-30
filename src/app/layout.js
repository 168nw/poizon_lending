import { Roboto } from "next/font/google";
import './globals.css';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
  title: "ABRAMOV LOGISTICS",
  description: "Доставка с POIZON",
};

export default function RootLayout({ children }) {
  return (
      <html lang="ru">
        <body className={`${roboto.className} antialiased text-gray-700`} >
            {children}
        </body>
      </html>
  );
}
