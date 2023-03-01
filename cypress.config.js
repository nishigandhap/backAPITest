const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/APITest/*.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
    },
  },

  env:{
    baseUrl: 'https://candidatex:qa-is-cool@qa-task.backbasecloud.com'
  },

  
});
