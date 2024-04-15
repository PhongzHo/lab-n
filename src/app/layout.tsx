import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/modules/home/nav/components";
import "./globals.css";
import Footer from "@/modules/home/footer/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lab Billiards",
  description: "Nơi vui chơi giải trí mọi lứa tuổi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Nav />
      {children}
      <Footer />
      </body>
    </html>
  );
}
