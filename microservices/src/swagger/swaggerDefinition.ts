import { SwaggerDefinition } from 'swagger-jsdoc';
import * as dotenv from "dotenv";

dotenv.config();

const port: number = Number(String(process.env.API_PORT));
const swaggerDefinition: SwaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Society Application API with TypeScript and Swagger',
    version: '1.0.0',
    description: 'A simple API documentation Society Application',
  },
  servers: [
    {
      url: 'http://localhost:'+port,
    },
  ],
};

export default swaggerDefinition;
