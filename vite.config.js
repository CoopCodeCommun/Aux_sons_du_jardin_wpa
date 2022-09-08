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
   minify: true // <= prod
  },
  plugins: [
    vue(),
    VitePWA({
      mode: "development",
      base: "/",
      srcDir: "src",
      filename: "serviceWorker.ts",
      injectManifest: {
        maximumFileSizeToCacheInBytes: 100000000, // 10MB = taille maxi d'un fichier de cache
        globPatterns: ['assets/*'] // met en cache tous le dossier assets
      },
      strategies: "injectManifest",
      manifest: {
        name: "Aux sons du jardin",
        short_name: "Aux sons du jardin",
        start_url: "/index.html",
        display: "standalone",
        background_color: "white",
        theme_color: "white",
        orientation: "portrait-primary",
        description: `Parce qu’il est peuplé d’espèces végétales et animales singulières,
        chaque jardin a son chant qui lui est propre,
        ses mélodies qui varient en fonction de la météo,
        de la saison, des essences qui y ont élu domicile.
        Chaque jardin a sa propre signature acoustique.
        Et si, avec humilité, avec nos instruments, nous nous invitions sur cette scène
        pour faire découvrir cette singularité, et en tirer une création originale.`,
        icons: [
         {
            src: "/logo-96x96.png",
            type: "image/png",
            sizes: "96x96"
          },
          {
            src: "/logo-128x128.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/logo-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/logo-512x512.png",
            sizes: "512x512",
            type: "image/png",
          }
        ]
      }
    })
  ]
})
