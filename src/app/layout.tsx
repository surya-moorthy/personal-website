import type { Metadata } from "next";
import {Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";
import { BackgroundLines } from "@/components/ui/background-lines";

const poppinsSans = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "100"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medium Clone",
  description: "a small sized version of a medium clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <BackgroundLines className="flex items-center justify-center flex-col">
      <body
        className={`${poppinsSans.variable} ${geistMono.variable} antialiased `}
      > 
        {children}
      </body>
      </BackgroundLines>
    </html>
  );
}
