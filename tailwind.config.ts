import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FCFBF9",
          100: "#F7EBC7",
          200: "#EDD899",
          300: "#E2C66B",
          400: "#D5AD44",
          500: "#B89535",
          600: "#95752A",
          700: "#73561F",
          800: "#513813",
          900: "#2E1F09",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
