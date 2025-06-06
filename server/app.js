require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const authRoutes = require("../src/routes/auth/authRoutes");

app.use("/api/auth", authRoutes);

module.exports = app;
