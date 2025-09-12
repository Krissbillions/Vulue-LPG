import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    allowedHosts: [
      "ab4465d3-fa5d-4445-91ca-a06f23218fdd-00-2pgxry97shazx.worf.replit.dev"
    ],
  },
});
