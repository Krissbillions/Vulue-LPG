import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "d6c5e36c-24c6-47a7-b05f-451a4dd69911-00-c7lttubx7vnn.picard.replit.dev"
    ],
    host: true,
    port: 5000, // 👈 run dev server on port 5000
  },
});
