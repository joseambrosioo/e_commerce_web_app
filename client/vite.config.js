import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // proxy: { "/api": { target: "http://localhost:5000" } },
    proxy: {
      "/api": {
        target: "https://e-commerce-web-app-q0k6.onrender.com",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
