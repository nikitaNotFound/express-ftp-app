import mongoose, { Schema } from "mongoose";

export interface File {
  _id: Schema.Types.ObjectId;
  folderId?: Schema.Types.ObjectId;
  extension?: string;
  name?: string;
}

const fileSchema = new Schema<File>({
  folderId: { type: Schema.Types.ObjectId, ref: 'Folder' },
  extension: { type: String, required: true },
  name: { type: String, required: true },
});

export default mongoose.model<File>('File', fileSchema);