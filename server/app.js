import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import express from "express";
import http from "http";
import { authRouter } from "./src/routers/auth.router.js";
const PORT = process.env.PORT || 8080;
const app = express();
const server = http.createServer(app);
// middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", authRouter);
// routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "hello world" });
});

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
