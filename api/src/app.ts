import 'dotenv/config';
import express from "express";
import path from "path";
import swaggerUi from "swagger-ui-express";
import mongoose from "mongoose";

import rootRouter from "./routes/root.routes";
import { StoreManager } from "./store-manager/store-manager";

mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING);

const app = express();

StoreManager.init({ rootFolderPath: path.join(__dirname, '/store') });

app.use('/', rootRouter);

const swaggerFile = require('../express-ftp-api.swagger.json');
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3000);