import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "439d0371-c3e1-46f2-ae6d-95e30073f73c-00-1xe06z6n6gp8n.riker.replit.dev", // your host
      "localhost", // keep localhost for local dev
    ],
    host: true, // listen on all addresses
    port: 5173, // you can change if needed
  },
});
