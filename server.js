const express    = require('express');
const cors       = require('cors');
const mongoose   = require('mongoose');
const path       = require("path");
const bodyparser = require("bodyparser");
const app        = express();

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
