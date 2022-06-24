import express from "express";
import * as filesController from "../controllers/files.controller";

const router = express.Router();

router.post(
  '/files',
  // #swagger.tags = ['Files']
  // #swagger.description = 'Upload file'
  filesController.uploadFile
);

router.delete(
  '/files/{fileId}',
  // #swagger.tags = ['Files']
  // #swagger.description = 'Delete file'
  filesController.deleteFile
);

router.patch(
  '/files/{fileId}',
  // #swagger.tags = ['Files']
  // #swagger.description = 'Rename file'
  filesController.renameFile
);

router.get(
  '/files/{fileId}',
  // #swagger.tags = ['Files']
  // #swagger.description = 'Download file'
  filesController.download
);

export default router;