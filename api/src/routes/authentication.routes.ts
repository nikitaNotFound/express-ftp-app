import express, { Router } from "express";
import * as authenticationController from '../controllers/authentication.controller';

const router = express.Router();

router.put(
  '/authenticate',
  // #swagger.tags = ['Authentication']
  // #swagger.description = 'Authenticate using google'
  authenticationController.authenticate
);

export default Router;