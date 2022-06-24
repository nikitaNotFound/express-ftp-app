import express from "express";

import authenticationRouter from "./authentication.routes";
import filesRouter from "./files.routes";
import foldersRouter from "./folders.routes";

const rootRouter = express.Router();

rootRouter.use(authenticationRouter);
rootRouter.use(filesRouter);
rootRouter.use(foldersRouter);

export default rootRouter;