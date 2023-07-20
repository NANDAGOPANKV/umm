const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const db = require("./db/db");

app.use(cors());
app.use(express.json());

// routes
const router = require("./router/bookRouter");

app.use("/", router);

// db connection
app.set(db);

app.listen(process.env, console.log("Server Started"));
