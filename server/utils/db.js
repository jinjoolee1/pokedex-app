const { Client } = require('pg');
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const connectionString = process.env.CONNECTION_STRING;

const client = new Client({
    connectionString
});



module.exports = client;