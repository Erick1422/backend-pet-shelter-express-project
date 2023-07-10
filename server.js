import express from 'express';
import cors from "cors";
import morgan from 'morgan'
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

import petRoutes from './pets/routes/pet.routes.js';

const app = express();

// swagger definition
const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Pets API',
            version: '1.0.0',
        },
        servers: [
            {
                url: `http://localhost/${3000}`
            }
        ]
    },
    apis: ['./pets/routes/*.js'], // files containing annotations as above
}

/* Global middlewares */
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(
    '/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(swaggerJSDoc(swaggerSpec))
)

// Routes
app.use('/pets', petRoutes);

export default app;