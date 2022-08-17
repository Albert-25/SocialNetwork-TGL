const express = require('express')
const cors = require("cors");
require('dotenv').config()
const router = require("./src/routes/index");
const app = express()

app.use(cors());
app.use(express.json());
app.use(router);

module.exports = app;