import type { Metadata } from "next";
import "./globals.css";
// import { Toaster } from 'react-hot-toast'
import { Josefin_Sans } from "next/font/google";
import AsideBar from "@/components/AsideBar";

const JosefinSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jose Acebuche",
  description: "My Personal Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${JosefinSans.className} dark:dark light dark:bg-slate-950`}>
        <div
          className="h-screen flex  justify-between  
            scroll-smooth relative overflow-hidden">
          <AsideBar />
          <main className="w-full  flex flex-col items-center overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
