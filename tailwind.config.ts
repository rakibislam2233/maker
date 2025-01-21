import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1336px",
      xxl: "1620px",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#3DBEFF",
        secondary: "#FF288F",
        primaryBg: "#3D5E91",
        hoverText: "#dcbb87",
      },
      animation: {
        "spin-reverse": "spin 1s linear reverse infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
