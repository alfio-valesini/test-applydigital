const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'y75bcq',
  video:true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
