import type { Metadata } from "next";
import "./globals.css";
// import { Toaster } from 'react-hot-toast'
import { Josefin_Sans } from "next/font/google";
import AsideBar from "@/components/AsideBar";

const inter = Josefin_Sans({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Jose Acebuche",
  description: "My Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:dark light dark:bg-slate-950`}>
        <div
          className="min-h-screen flex  justify-between  
            scroll-smooth relative "
        >
          <AsideBar />
          <main className="w-full  flex flex-col items-center overflow-x-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
