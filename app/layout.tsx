import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jose Acebuche - Software Engineer",
  description: "Portfolio of Jose Acebuche, a passionate software engineer specializing in full-stack web development",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-background">
          <NavBar />
          <main className="w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
