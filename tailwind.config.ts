import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1F3D2B",
          dark: "#162D20",
          light: "#2B5A40",
          accent: "#A6D98C",
        },
        background: {
          light: "#F4F6F4",
        },
        text: {
          dark: "#1C1C1C",
          secondary: "#5F6B5F",
        },
        border: {
          DEFAULT: "#E2E8E2",
        },
      },
      boxShadow: {
        card: "0 8px 24px rgba(31, 61, 43, 0.08)",
        "card-hover": "0 12px 30px rgba(31, 61, 43, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
