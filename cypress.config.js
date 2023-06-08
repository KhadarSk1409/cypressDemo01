

const { defineConfig } = require("cypress");

module.exports = defineConfig({

    "reporter" : "mochawesome",
    "reporterOptions" : {
       "reportDir": "cypress/results/mochawesome-report",
       "overwrite": false,
       "html": true,
       "json": false,
       "timestamp": "mmddyyyy_HHMMss"
    },
  
  env:{
    url : "http://183.82.7.112:4200/pages/login",
    userid : "venkat@gmail.com",
    password : "Design_20"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/e2e/UI/Specs/*.js'
  },
});


