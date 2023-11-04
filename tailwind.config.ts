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
        headerOutline: "hsl(217, 16%, 45%)",
        scoreText: "hsl(229, 64%, 46%)",
        darkText: "hsl(229, 25%, 31%)",
        scissors: { DEFAULT: "hsl(39, 89%, 49%)", end: "hsl(40, 84%, 53%)" },
        rock: { DEFAULT: "hsl(349, 71%, 52%)", end: "hsl(349, 70%, 56%)" },
        paper: { DEFAULT: "hsl(230, 89%, 62%)", end: "hsl(230, 89%, 65%)" },
        lizard: { DEFAULT: "hsl(261, 73%, 60%)", end: "hsl(261, 73%, 63%)" },
        spock: { DEFAULT: "hsl(189, 59%, 53%)", end: "hsl(189, 58%, 57%)" },
      },
      fontFamily: {
        barlow: ["var(--font-barlow)"],
      },
      backgroundImage: {
        gradientBg:
          "radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
        pentangonBg: "url('/bg-pentagon.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
