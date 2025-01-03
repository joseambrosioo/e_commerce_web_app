// tailwind.config.js
import tailwindcssAnimate from "tailwindcss-animate";
import forms from "@tailwindcss/forms";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#ffffff",
        },
        muted: "#d3d3d3",
        foreground: "#333333",
      },
    },
  },
  plugins: [tailwindcssAnimate, forms],
};
