/** @type {import('tailwindcss').Config} */
import {heroui} from "@heroui/react";
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}","./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        foreground: "#ffffff", // white
        background: "#000000", // black
      },
    },
  },
  plugins: [heroui()],
}

