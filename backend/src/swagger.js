// swagger.js

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ZETDC LOADSHEDDING API',
      version: '1.0.0.2024EC',
      description: 'The ZETDC API provides access to load shedding status, events, and area information in Zimbabwe. Authentication required.',
    },
    servers: [
      {
        url: 'http://localhost:8800/api',
      },
    ],
  },
  apis: ['./src/routes/*.js', './src/controllers/*.js'], // paths to files with API definitions
};

const specs = swaggerJsDoc(options);

module.exports = {
  swaggerUi,
  specs,
};
