import "dotenv/config.js";
import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import http from "http";
import multer from "multer";
import { connectToDatabase } from "./src/lib/db.js";
import { authRouter } from "./src/routers/auth.router.js";
import { errorHandler } from "./src/exceptions/root.js";

const PORT = process.env.PORT || 8080;
const app = express();
const server = http.createServer(app);
const upload = multer();
connectToDatabase();

// middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(upload.none());

app.use("/api/auth", authRouter);
app.use(errorHandler);

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
