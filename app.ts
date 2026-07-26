import express, { type Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./dbConnection.ts";
import mongoose from "mongoose";
import routes from "./routes/routes.ts";

dotenv.config();

connectDB();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/", routes);

export default app;
