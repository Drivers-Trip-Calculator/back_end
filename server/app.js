require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const authRoutes = require("../src/routes/auth/authRoutes");
const loadsRoutes = require("../src/routes/loads/loadsRoutes");
const tripRoutes = require("../src/routes/trips/tripRoutes");
const ledgerRoutes = require("../src/routes/ledger/ledgerRoutes");


app.use("/api/auth", authRoutes);
app.use("api/loads", loadsRoutes);
app.use("api/trips", tripRoutes);
app.use("api/ledger", ledgerRoutes);

module.exports = app;
