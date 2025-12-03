const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "baseUrl": "https://example.cypress.io",
  "defaultCommandTimeout": 5000,
  "fixturesFolder": "cypress/fixtures",
  "specPattern": "**/*.cy.{js,jsx,ts,tsx}",
  "viewportWidth": 1920,
  "viewportHeight": 1080,
  "modifyObstructiveCode": false
});
