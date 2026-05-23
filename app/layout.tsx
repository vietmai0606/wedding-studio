import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import AIChatWidget from "./components/AIChatWidget";

export const metadata: Metadata = {
  title: "Duy Toàn Wedding - Studio chụp ảnh cưới tại Gia Lai",
  description:
    "Duy Toàn Wedding chuyên chụp ảnh cưới, makeup cô dâu, váy cưới và album cưới tại Hoài Ân, Gia Lai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingContact />
        <AIChatWidget />
      </body>
    </html>
  );
}