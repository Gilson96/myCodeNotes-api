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

const PORT = process.env.PORT || 5050;

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

export default app;
