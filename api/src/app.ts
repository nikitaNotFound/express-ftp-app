import express from "express";
import swaggerUi from "swagger-ui-express";

import rootRouter from "./routes/root.routes";

const app = express();

app.use('/', rootRouter);

const swaggerFile = require('../express-ftp-api.swagger.json');
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3000);