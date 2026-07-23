import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

export default defineConfig({
  site: 'https://www.phillyipsum.com',
  base: '/',
  cacheDir: './node_modules/.astro',
  trailingSlash: "never",
  build: {
    inlineStylesheets: `never`,
  },
  image: {
    domains: ["astro.build"],
  },
  output: 'static',
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 500,
      }
    }
  },
  integrations: [
    icon({
      iconDir: "src/assets/icons",
      svgoOptions: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                inlineStyles: {
                  onlyMatchedOnce: false,
                },
                removeDoctype: false,
              },
            },
          },
        ],
      },
    })
  ]
});