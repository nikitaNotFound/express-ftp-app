import express from "express";
import * as authenticationController from '../controllers/authentication.controller';

const router = express.Router();

router.put(
  '/authentication/authenticate',
  // #swagger.tags = ['Authentication']
  // #swagger.description = 'Authenticate using google'
  authenticationController.authenticate
);

router.delete(
  '/authentication/logout',
  // #swagger.tags = ['Authentication']
  // #swagger.description = 'Logout'
  authenticationController.logout
);

export default router;