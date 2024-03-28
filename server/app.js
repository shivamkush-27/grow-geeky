require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const express = require("express");
const http = require("http")

const PORT = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello world" });
});

const server = http.createServer(app);
app.use(cors({ origin: true, credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
