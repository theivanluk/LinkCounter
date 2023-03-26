import express, { Application } from "express";
import morgan from "morgan";
import cors from 'cors';
import dotenv from 'dotenv';
import { IDataAccess } from "./DataAccess/iDataAccess";

dotenv.config();

export default function createApp(dataAccess: IDataAccess): Application {
  const app: Application = express();

  app.use(morgan('dev'));
  app.use(cors());
  app.use(express.json());

  return app;
}

