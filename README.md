# Chris Haga

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## build command
- dist = build directory   
- 12 = cache version
```
npm run build && node composeServiceWorker.js dist 12
```
build le front et ensuite compose le service worker qui gère le hors connexion
