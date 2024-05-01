import { defineConfig } from 'cypress';
import { Client } from 'pg';

module.exports = defineConfig({
  e2e: {
    supportFile: false, 
    setupNodeEvents(on,config){
      on('task', { 
        async connectDB(query){
          const client = new Client({
            user: 'root',
            host: 'localhost',
            database: 'kinokond',
            password: 'root',
            port: 15432
          })
          await client.connect()
          const res = await client.query(query)
          await client.end()
          return res.rows;
        }
      })
    },
  },

  env: {  },

  viewportHeight: 1080,
  viewportWidth: 1920,

  defaultCommandTimeout: 10000, //will be 6 sec.
  experimentalStudio: true,

  // component: {
  //   devServer: {
  //     framework: "angular",
  //     bundler: "webpack",
  //   },
  //   specPattern: "**/*.cy.ts",
  // },
});
