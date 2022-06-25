import { RequestHandler } from "express";
import { UploadedFile } from "express-fileupload";
import { StoreManager } from "../store-manager/store-manager";
import * as storeService from "../services/store-service/storeService";
import ApplicationError from "../errors/application-error";
import { StatusCodes } from "http-status-codes";

export const uploadFile: RequestHandler = async (req, res) => {
  const file = req.files.file as UploadedFile;
  const fileExtension: string = file.name.split('.').pop();
  const folderId: string = req.query.folderId as string;

  if (await storeService.isFolderExist(folderId)) {
    throw new ApplicationError('Folder does not exist!', StatusCodes.BAD_REQUEST);
  }

  await storeService.addFile(folderId, fileExtension);

  StoreManager.uploadFile('someId', fileExtension, file.data);

  res.send(200);
}

export const deleteFile: RequestHandler = (req, res) => {
  res.send(200);
}

export const renameFile: RequestHandler = (req, res) => {
  res.send(200);
}

export const download: RequestHandler = (req, res) => {
  res.send(200);
}