import { defineConfig } from 'vite';
// npm install @types/node
import {fileURLToPath} from "url";
import path from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base : "./",
  resolve: {
    alias: {
      // Deux méthode disponible
      // Méthode 1 : utilisant FireURLtoPath (on peut encore rajouter d'autre alias)
      "@": fileURLToPath(new URL('./src',import.meta.url)),
      // Méthode 2: utilisant path
      "@components": path.resolve(__dirname,"src/components")
    }
  }
})
