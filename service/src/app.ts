import express, { Request, Response } from 'express';
import userRoutes from './routes/userRoutes';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerDefinition from './swagger/swaggerDefinition';

const app = express();

// Swagger Setup
const specs = swaggerJsdoc({
  swaggerDefinition,
  apis: ['./src/routes/*.ts'], // Path to the API docs
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Use JSON body parser
app.use(express.json());

// Set up Routes
app.use('/users', userRoutes);

export default app;
