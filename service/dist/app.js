"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDefinition_1 = __importDefault(require("./swagger/swaggerDefinition"));
const app = (0, express_1.default)();
// Swagger Setup
const specs = (0, swagger_jsdoc_1.default)({
    swaggerDefinition: swaggerDefinition_1.default,
    apis: ['./src/routes/*.ts'], // Path to the API docs
});
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
// Use JSON body parser
app.use(express_1.default.json());
// Set up Routes
app.use('/users', userRoutes_1.default);
exports.default = app;
