const express = require('express')
const cors = require("cors");
require('dotenv').config()
const router = require("./src/routes/index");
const app = express()

app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(router);
app.get('*', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
})

module.exports = app;