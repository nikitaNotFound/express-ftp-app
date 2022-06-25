import express from "express";
import * as foldersController from "../controllers/folders.controller";

const router = express.Router();

router.post(
  '/folders',
  /*
    #swagger.tags = ['Folders']
    #swagger.description = 'Create folder'
    #swagger.security = [{
      "bearerAuth": []
    }]
  */
  foldersController.createFolder
);

router.delete(
  '/folders/{folderId}',
  /*
    #swagger.tags = ['Folders']
    #swagger.description = 'Delete folder'
    #swagger.security = [{
      "bearerAuth": []
    }]
  */
  foldersController.deleteFolder
);

router.get(
  '/folders/{folderId}',
  /*
    #swagger.tags = ['Folders']
    #swagger.description = 'Get folder content'
    #swagger.security = [{
      "bearerAuth": []
    }]
  */
  foldersController.getFolderContent
);

export default router;