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
        background: "var(--background)",
        foreground: "var(--foreground)",
        logoPink: '#F72585',
        logoPurple: '#7209B7',
        logoBlue: '#4361EE',
        logoCyan: '#4CC9F0',
        logoRed: '#FF005C',
        logoGradientFrom: '#F72585',
        logoGradientVia: '#7209B7',
        logoGradientTo: '#4CC9F0',
      },
      backgroundImage: {
        'logo-gradient': 'linear-gradient(120deg, #F72585 0%, #7209B7 40%, #4361EE 70%, #4CC9F0 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
