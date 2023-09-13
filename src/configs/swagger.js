const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Create By HUEVNAGXP API for JSONPlaceholder',
      version: '1.0.0',
      contact: {
          name: 'JSONPlaceholder',
          url: 'https://jsonplaceholder.typicode.com',
        },
    },
    servers: [
      {
        url: 'http://localhost:7000',
        description: 'Development server',
      },
    ],
  };
  
  const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./src/routes/*.js'],
};
  
const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerSpec, swaggerUi }