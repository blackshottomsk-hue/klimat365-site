import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1600px",
      },
      colors: {
        brand: {
          DEFAULT: "#1a56db",
          dark: "#1044b8",
          light: "#2563eb",
          accent: "#93c5fd",
        },
        background: {
          light: "#f0f5ff",
        },
        text: {
          dark: "#0f172a",
          secondary: "#475569",
        },
        border: {
          DEFAULT: "#dbeafe",
        },
      },
      boxShadow: {
        card: "0 8px 24px rgba(26, 86, 219, 0.08)",
        "card-hover": "0 12px 30px rgba(26, 86, 219, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
