import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // We'll use native Tailwind colors that match our enterprise design system
      // This avoids CSS variable mapping issues while maintaining the MNC-style look
      colors: {
        'brand-navy': '#06143D',  // Dark navy blue - primary brand color
        'brand-orange': '#9C4808', // Dark orange - accent brand color
        primary: {
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        accent: {
          cyan: '#06b6d4',
          blue: '#3b82f6',
          violet: '#8b5cf6',
        }
      },
    },
  },
} satisfies Config;