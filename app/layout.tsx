import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

export const metadata: Metadata = {
  title: "Hana Wedding Studio",
  description:
    "Studio chụp ảnh cưới chuyên nghiệp với phong cách sang trọng, nhẹ nhàng và đầy cảm xúc.",
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
      </body>
    </html>
  );
}