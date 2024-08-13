import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000', // Adjust to your app’s URL
    specPattern: 'cypress/e2e/**/*.{js,ts}',
  },
});
