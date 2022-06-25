import mongoose, { Schema } from "mongoose";

export interface Folder {
  _id: Schema.Types.ObjectId;
  folderId?: Schema.Types.ObjectId;
  files?: Schema.Types.ObjectId[];
  folders?: Schema.Types.ObjectId[];
  name?: string;
}

const FolderSchema = new Schema<Folder>({
  folderId: { type: Schema.Types.ObjectId, ref: 'Folder' },
  files: [{ type: Schema.Types.ObjectId, ref: 'File' }],
  folders: [{ type: Schema.Types.ObjectId, ref: 'Folder' }],
  name: { type: String, required: true },
});

export default mongoose.model<Folder>('Folder', FolderSchema);