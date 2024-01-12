const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'h1cwi4',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.pageLoadTimeout = 6000000;  
    }},
    video: true,
    retries: 1
});
