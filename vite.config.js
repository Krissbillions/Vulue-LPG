import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // listen on all addresses
    port: 5173, // default port
    allowedHosts: [
      '359c55d6-36e7-4aa1-923a-0c99280f86dd-00-7zmacbhet0dn.riker.replit.dev',
      'localhost',
    ],
  },
})
