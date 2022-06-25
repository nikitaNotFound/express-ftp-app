import { StatusCodes } from "http-status-codes";

export default class ApplicationError extends Error {
  constructor(message: string, statusCode: StatusCodes) {
    super();
  }
}