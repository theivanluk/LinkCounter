import express, { Application, Express } from "express";
import morgan from "morgan";
import cors from 'cors';
import dotenv from 'dotenv';
import createApp from "./app";
import SQLDataAccess from "./DataAccess/sqlDataAccess";

dotenv.config();

const app: Application = createApp(new SQLDataAccess);
const port: number = Number(process.env.PORT) || 8080;

app.listen(port, () => { console.log(`Listening on Port: ${port}`) });