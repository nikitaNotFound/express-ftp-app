import express from "express";

import authenticationRouter from "./authentication.routes";

const rootRouter = express.Router();

rootRouter.use('/authentication', authenticationRouter);

export default rootRouter;