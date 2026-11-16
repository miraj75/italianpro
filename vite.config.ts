import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Relative base so the bundle loads from the Capacitor WebView's local origin.
  base: './',
  plugins: [react(), tailwindcss()],
  server: { host: '0.0.0.0', port: 3000, allowedHosts: true },
  build: { outDir: 'dist', target: 'es2020' },
  test: { environment: 'node', include: ['tests/**/*.test.ts'] },
});
