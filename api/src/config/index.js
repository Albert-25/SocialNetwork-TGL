const path = require("path");

if (process.env.NODE_ENV != 'production') {
    require('dotenv').config({ path: path.join(__dirname, "../../.env") });
}
const config = {
    // env: process.env.NODE_ENV || "dev",
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_DATABASE: process.env.DB_DATABASE,
    PORT: process.env.PORT,
    API_KEY: process.env.API_KEY,
    SECRET_JWT_SEED: process.env.SECRET_JWT_SEED
}

module.exports = config;