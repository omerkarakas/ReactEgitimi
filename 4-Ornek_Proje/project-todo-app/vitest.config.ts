/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // 🟢 Tarayıcı ortamı sağlar
    globals: true, // describe/test gibi global API'leri aktif eder
    setupFiles: "./src/setupTests.ts", // opsiyonel: jest-dom gibi setup dosyan varsa ekle
  },
});
