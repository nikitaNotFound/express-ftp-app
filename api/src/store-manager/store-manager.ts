import StoreManagerOptions from "./models/store-manager-options.model";
import fs from "fs";

export class StoreManager {
  private static _options: StoreManagerOptions;

  static init(options: StoreManagerOptions) {
    this._options = options;

    if (!fs.existsSync(this._options.rootFolderPath)) {
      console.log(this._options.rootFolderPath);
      fs.mkdirSync(this._options.rootFolderPath);
    }
  }

  static uploadFile() {
    return;
  }

  static getFileStream(fileId: string) {
    return;
  }

  static deleteFile(fileId: string) {
    return;
  }
}