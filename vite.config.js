import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from 'vite-plugin-pwa'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "/src"),
      "~@": resolve(__dirname, "/src")
    },
  },
  build: {
    minify: false // <= dev
  },
  plugins: [
    vue(),
    VitePWA({
      mode: "development",
      base: "/",
      srcDir: "src",
      filename: "serviceWorker.ts",
      includeAssets: ["/favicon-32x32.png"],
      strategies: "injectManifest",
      manifest: {
        name: "Aux sons du jardin",
        short_name: "Aux sons du jardin",
        theme_color: "#ffffff",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        icons: [
          {
            src: "logo-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/logo-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "logo-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ]
      }
    })
  ]
})
