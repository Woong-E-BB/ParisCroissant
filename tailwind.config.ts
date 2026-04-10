import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#4f2c1d",
        sand: "#f5ecdf",
        cream: "#fffaf2",
        ink: "#1f1d1b",
        slateblue: "#27468f",
        blush: "#f6d8df",
        teal: {
          brand: "#00a0b0",
          light: "#e0f7fa",
          dark: "#00838f",
        },
        "brand-dark": "#1a1a2e",
        "brand-red": "#e53935",
        "brand-gold": "#c8a86d",
      },
      boxShadow: {
        soft: "0 24px 60px rgba(42, 31, 24, 0.12)",
        card: "0 8px 30px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 20px 60px rgba(0, 0, 0, 0.14)",
        hero: "0 32px 80px rgba(0, 0, 0, 0.18)",
        glow: "0 0 30px rgba(0, 160, 176, 0.15)",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
      },
      backgroundImage: {
        glow: "radial-gradient(circle at top left, rgba(255,255,255,0.92), transparent 45%), radial-gradient(circle at bottom right, rgba(212,175,140,0.18), transparent 35%)",
        "gradient-brand": "linear-gradient(135deg, #00a0b0 0%, #0077b6 100%)",
        "gradient-dark": "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        "gradient-warm": "linear-gradient(135deg, #f5ecdf 0%, #fffaf2 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "carousel-in": {
          "0%": { opacity: "0", transform: "scale(1.02)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "carousel-out": {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.98)" },
        },
        "slide-in-bottom": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        rise: "rise 0.8s ease forwards",
        "carousel-in": "carousel-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "carousel-out": "carousel-out 0.5s ease forwards",
        "slide-in-bottom": "slide-in-bottom 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
