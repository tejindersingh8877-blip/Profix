import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a2c3d",
          50: "#f4f6f8",
          100: "#e9edf1",
          200: "#d3dbe3",
          300: "#adb9c7",
          400: "#8193a6",
          500: "#61748a",
          600: "#4d5c73",
          700: "#3f4a5e",
          800: "#37404f",
          900: "#1a2c3d",
          950: "#0f1921",
        },
        secondary: {
          DEFAULT: "#ff6b35",
          50: "#fff4ed",
          100: "#ffe6d4",
          200: "#ffc9a8",
          300: "#ffa371",
          400: "#ff6b35",
          500: "#fe4911",
          600: "#ef3007",
          700: "#c62108",
          800: "#9d1c0f",
          900: "#7e1a10",
          950: "#440906",
        },
      },
    },
  },
  plugins: [],
};
export default config;
