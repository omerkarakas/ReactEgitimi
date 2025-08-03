import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Tema geçişi için gerekli
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
