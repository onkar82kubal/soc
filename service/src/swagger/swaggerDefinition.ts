import { SwaggerDefinition } from 'swagger-jsdoc';

const swaggerDefinition: SwaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API with TypeScript and Swagger',
    version: '1.0.0',
    description: 'A simple API documentation using Express, TypeScript, and Swagger',
  },
  servers: [
    {
      url: 'http://localhost:3000',
    },
  ],
};

export default swaggerDefinition;
