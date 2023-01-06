import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { router } from "./routes/index.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(router);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server running on port: ${port}`));
