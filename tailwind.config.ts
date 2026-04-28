import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#1f2933",
        white: "#ffffff",
        "soft-gray": "#f4f6f8",
        "muted-gray": "#dce3ea",
        gold: "#b68a2f",
        blue: "#1f5d99",
        teal: "#1f8a8a"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"]
      },
      boxShadow: {
        card: "0 16px 40px rgba(31, 41, 51, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
