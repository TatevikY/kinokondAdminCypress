const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,

  e2e: {
    supportFile: false,
  },

  env: {
    baseURL: "http://localhost:4200/",
    username: "tatevikyyy",
    password: "Test123!",
  },

  viewportHeight: 1080,
  viewportWidth: 1920,

  //defaultCommandTimeout: 6000 will be 6 sec.
  experimentalStudio: true,

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
