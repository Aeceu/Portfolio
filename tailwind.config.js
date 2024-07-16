/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        beating: {
          from: { transform: "scale(1.05)" },
          to: { transform: "scale(1)" },
        },
        move: {
          from: { transform: "translateY(-10px)" },
          to: { transform: "translateY(10px)" },
        },
        changeSizeMD: {
          from: { bottom: "0px" },
          to: { bottom: "-100%" },
        },
        changeSizeSM: {
          from: { bottom: "0px" },
          to: { bottom: "-100%" },
        },
        revertSizeMD: {
          from: { bottom: "-250px" },
          to: { bottom: "0px" },
        },
        revertSizeSM: {
          from: { bottom: "-150px" },
          to: { bottom: "0px" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "up-down": "beating .5s infinite ease alternate",
        moving: "move 3s infinite ease alternate;",
        appearMD: "changeSizeMD 0.5s ease-in-out forwards",
        appearSM: "changeSizeSM 0.5s ease-in-out forwards",
        revertMD: "revertSizeMD 0.5s ease-in-out forwards",
        revertSM: "revertSizeSM 0.5s ease-in-out forwards",
      },
      boxShadow: {
        custom: "6px 6px 0px rgba(2, 6, 23,.7)",
        "green-sm": "3px 3px 0px rgba(16, 185, 129, .9)",
        "green-md": "6px 6px 0px rgba(16, 185, 129, .9)",
        "white-md": "8px 8px 0px rgba(255, 255, 255, 1)",
        "slate-sm": "3px 5px 0px rgba(2, 6, 23, 0.9)",
        "slate-md": "8px 8px 0px rgba(2, 6, 23, 0.9)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
