import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'highlight': 'inset 0 0 0 2px transparent, 0 0 10px 2px rgba(255, 255, 255, 0.5)',
        'highlight-hover': 'inset 0 0 0 2px transparent, 0 0 10px 2px rgba(255, 255, 255, 1)',
      },
      fontFamily: {
        'posterama': ['Posterama 2001 W04 Thin', 'sans-serif'],
      },
      textShadow: {
        'highlight': '0 0 5px rgba(255, 255, 255, 0.6), 0 0 10px rgba(255, 255, 255, 0.4), 0 0 15px rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};

export default config;