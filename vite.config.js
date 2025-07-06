import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // root folder, where index.html lives
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});

