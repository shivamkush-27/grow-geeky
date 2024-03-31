require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const express = require("express");
const http = require("http");
const { default: authRouter } = require("./src/routers/auth.router");

const PORT = process.env.PORT || 8080;
const app = express();
const server = http.createServer(app);
// middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/api/v1", authRouter);
// routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "hello world" });
});

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
