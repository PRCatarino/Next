import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "NextRV Portas e Janelas",
  description: "Portas e janelas de alta qualidade com design moderno.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body className="bg-gray-50 min-h-screen">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
