const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/relatorios',
    overwrite: true,
    html: true,
    json: false,
    timestemp: 'ddmmyyyy_HHMMss'
  }
});
