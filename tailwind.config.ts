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
      boxShadow: {
        outerRing: "inset 0px -8px 0px 0px rgba(0,0,0,0.2)",
        innerRing: "inset 0px 12px 0px -6px rgba(133,133,133,0.3)",
        winnerRingMobile:
          "rgba(0, 0, 0, 0.2) 0px -8px 0px 0px inset, rgba(44, 59, 89, 0.5) 0px 0px 0px 1rem, rgba(38, 53, 84, 0.5) 0px 0px 0px 3rem, rgba(33, 48, 79, 0.5) 0px 0px 0px 5rem",
        winnerRing:
          "rgba(0, 0, 0, 0.2) 0px -14px 0px 0px inset, rgba(44, 59, 89, 0.2) 0px 0px 0px 4rem, rgba(38, 53, 84, 0.3) 0px 0px 0px 8rem, rgba(33, 48, 79, 0.3) 0px 0px 0px 12rem",
      },
    },
  },
  plugins: [],
};
export default config;
