import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Проститутки СПБ и индивидуалки элитного уровня",
  description: "Сегодня проститутки Питера работают со скидками! Более 5000 проверенных шлюх с реальными фото. Наши путаны и индивидуалки примут Вас круглосуточно в любом районе Санкт-Петербурга",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
