"use client";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home-page", label: "Home" },
  { href: "#about-page", label: "About" },
  { href: "#tech-page", label: "Skills" },
  { href: "#project-page", label: "Projects" },
  { href: "#contact-page", label: "Contact" },
];

const socialLinks = [
  { url: "https://github.com/Aeceu", icon: AiFillGithub },
  { url: "https://www.linkedin.com/in/jose-acebuche-4a5b851b5/", icon: AiFillLinkedin },
  { url: "https://www.facebook.com/Aeceuuu", icon: AiFillFacebook },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 backdrop-blur-md border-b border-border dark:bg-background/95 bg-background/95"
          : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <Link href="#home-page">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-foreground"
          >
            JA<span className="text-accent">.</span>
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <div className="hidden sm:flex items-center gap-3">
            {socialLinks.map((link, i) => (
              <Link
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <link.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
          <ThemeToggle />
          <Link href="#contact-page">
            <button className="px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium">
              Get in Touch
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}
