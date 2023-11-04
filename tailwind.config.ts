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
        brand: {
          main: "#145AFF",
          secondary: "#47C1FE",
        },
        black: {
          main: "#000",
        },
        gray: {
          main: "#40454F",
        },
        white: {
          main: "#fff",
          off: "#F9F9F9",
        },
      },
      boxShadow: {
        review: "0px 0px 40px 0px rgba(22, 22, 22, 0.12)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
