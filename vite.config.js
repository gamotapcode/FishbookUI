import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Alias `~` trỏ tới thư mục gốc (hoặc bạn có thể cấu hình trỏ tới bất kỳ thư mục nào)
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
