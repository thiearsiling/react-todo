const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const express = require("express");
const colors = require("colors");
const morgan = require("morgan");

const server = express();
const allowCors = require("./cors");

// Config path
dotenv.config({ path: __dirname + "/config.env" });

const PORT = process.env.PORT;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

// Lista as requisições recebidas
if (process.env.NODE_ENV === "development") {
  server.use(morgan("dev"));
}

server.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);

module.exports = server;
