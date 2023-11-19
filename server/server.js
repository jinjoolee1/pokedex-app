const express = require("express");
const { Client } = require('pg');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;
const connectionString = process.env.CONNECTION_STRING;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const client = new Client({
    connectionString
});

client.connect();

module.exports = client;

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));