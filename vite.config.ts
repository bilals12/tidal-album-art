import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['@tidal-music/auth', '@tidal-music/player', '@tidal-music/catalogue', 'sharp']
    }
  },
  plugins: [dts()],
  optimizeDeps: {
    exclude: ['@tidal-music/auth', '@tidal-music/player', '@tidal-music/catalogue', 'sharp']
  },
  define: {
    'global.window': 'globalThis',
    'global.document': 'globalThis.document',
    'global.HTMLVideoElement': 'globalThis.HTMLVideoElement',
    'global.HTMLAudioElement': 'globalThis.HTMLAudioElement'
  }
});