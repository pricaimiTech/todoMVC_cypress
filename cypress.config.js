const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://todomvc.com/examples/react/dist/'
  },
  reporter: "mochawesome",
  reporterOptions: {
    overwrite: false,
    html: true,
    json: false,
    reportDir: "results/"
  }
});
