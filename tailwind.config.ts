import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // brand-base = #012d59 (biru tua), brand-accent = #79a403 (hijau)
        brand: {
          base: "#012d59",
          "base-light": "#013d78",
          "base-dark": "#011e3c",
          accent: "#79a403",
          "accent-light": "#8fbc04",
          "accent-dark": "#5f8202",
        },
        primary: {
          50:  "#e6edf5",
          100: "#ccdaea",
          200: "#99b5d5",
          300: "#6690c0",
          400: "#336bab",
          500: "#014996",
          600: "#013d78",
          700: "#012d59",   // ← brand base
          800: "#011e3c",
          900: "#010f1f",
          950: "#000810",
        },
        secondary: {
          50:  "#f2f7e6",
          100: "#e4efcc",
          200: "#c9df99",
          300: "#aecf66",
          400: "#93bf33",
          500: "#79a403",   // ← brand accent
          600: "#618303",
          700: "#496202",
          800: "#304201",
          900: "#182101",
        },
        cleniq: {
          black: "#121212",
          gray:  "#878c8f",
          dark:  "#010d18",
        },
      },
      fontFamily: {
        sans:    ["var(--font-sans)"],
        heading: ["var(--font-sans)"],
      },
      boxShadow: {
        soft:    "0 2px 15px rgba(1, 45, 89, 0.08)",
        medium:  "0 4px 25px rgba(1, 45, 89, 0.12)",
        premium: "0 10px 60px rgba(1, 45, 89, 0.14)",
        card:    "0px 0px 70px 0px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        "4xl": "2.5rem",
        "5xl": "3rem",
      },
      keyframes: {
        "zoom-in-out": {
          "0%, 100%": { transform: "scale(1)" },
          "50%":       { transform: "scale(1.15)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-15px)" },
        },
        "float-medium": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        "float-fast": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
        shine: {
          "0%":   { transform: "translateX(-100%) skewX(-12deg)" },
          "100%": { transform: "translateX(200%) skewX(-12deg)" },
        },
        ripple: {
          "0%":   { transform: "scale(0.8)", opacity: "1" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        "slide-left": {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "bar-fill": {
          "0%":   { width: "0%" },
          "100%": { width: "var(--bar-width)" },
        },
      },
      animation: {
        "zoom-in-out":  "zoom-in-out 3s ease-in-out infinite",
        "float-slow":   "float-slow 4s ease-in-out infinite",
        "float-medium": "float-medium 3s ease-in-out infinite",
        "float-fast":   "float-fast 2.5s ease-in-out infinite",
        "shine":        "shine 2s ease-in-out infinite",
        "ripple":       "ripple 3s ease-out infinite",
        "slide-left":   "slide-left 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
