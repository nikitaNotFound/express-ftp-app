import { RequestHandler } from "express";

export const authenticate: RequestHandler = (req, res) => {
  res.send('Authenticated!');
};

export const logout: RequestHandler = (req, res) => {
  res.send('Logout!');
};