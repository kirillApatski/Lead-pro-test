import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import { sassPlugin } from 'vite-plugin-sass';

export default defineConfig({
  plugins: [
    createVuePlugin(),
    sassPlugin(),
  ],
});