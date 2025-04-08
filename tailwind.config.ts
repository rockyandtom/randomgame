import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1A1A1A",
        foreground: "#FFFFFF",
        primary: "#2F80ED",
        "primary-hover": "#1E40AF",
        orange: "#F6BA63",
        "orange-hover": "#E5A94B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
      },
      textShadow: {
        neon: "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ffffff, 0 0 35px #ffffff, 0 0 40px #ffffff",
      },
    },
  },
  plugins: [],
};

export default config; 