import FileSchema, { File } from "../../schemas/FileSchema";
import FolderSchema, { Folder } from "../../schemas/FolderSchema";

export const isFolderExist = async (folderId: string): Promise<boolean> => {
  return !!await FolderSchema.findById(folderId);
}

export const deleteFolder = async (folderId: string): Promise<void> => {
  await FolderSchema.findByIdAndDelete(folderId).exec();
}

export const createFolder = async (parentFolderId: string, folderName: string): Promise<Folder> => {
  const folder = new FolderSchema({
    folderId: parentFolderId,
    name: folderName
  });
  await folder.save();

  return {
    _id: folder._id,
    name: folder.name
  };
}

export const addFile = async (folderId: string, fileExtension: string): Promise<File> => {
  const file = new FileSchema({
    folderId,
    extension: fileExtension
  });
  await file.save();

  return {
    _id: file._id,
    extension: file.extension,
    name: file.name
  };
}

export const removeFile = async (fileId: string): Promise<void> => {
  await FileSchema.findByIdAndDelete(fileId);
}