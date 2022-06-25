import express from "express";
import * as filesController from "../controllers/files.controller";

const router = express.Router();

router.post(
  '/files',
  /*
    #swagger.tags = ['Files']
    #swagger.description = 'Upload file'
    #swagger.security = [{
      "bearerAuth": []
    }]
    #swagger.parameters['file'] = {
      in: 'formData',
      required: true,
      type: 'file',
      description: 'File to upload'
    }
    #swagger.parameters['folderId'] = {
      in: 'query',
      required: true,
      type: 'string',
      description: 'Folder id to upload file in'
    }
  */
  filesController.uploadFile
);

router.delete(
  '/files/{fileId}',
  /*
    #swagger.tags = ['Files']
    #swagger.description = 'Delete file'
    #swagger.security = [{
      "bearerAuth": []
    }]
  */
  filesController.deleteFile
);

router.patch(
  '/files/{fileId}',
  /*
    #swagger.tags = ['Files']
    #swagger.description = 'Rename file'
    #swagger.security = [{
      "bearerAuth": []
    }]
  */
  filesController.renameFile
);

router.get(
  '/files/{fileId}',
  /*
    #swagger.tags = ['Files']
    #swagger.description = 'Download file'
    #swagger.security = [{
      "bearerAuth": []
    }]
  */
  filesController.download
);

export default router;