// This file is to use express as our routing system
const express = require("express");
const morgan = require("morgan");

// importing routers
const creditsRouter = require("./routes/creditsRouter");
const usersRouter = require("./routes/usersRouter");
const spendingsRouter = require("./routes/spendingsRouter");
const investmentsRouter = require("./routes/investmentsRouter");
const remaindersRouter = require("./routes/remaindersRouter");
const transactionsRouter = require("./routes/transactionsRouter");

const app = express();

// to get the development help in console
app.use(morgan("dev"));

// To parse the body of request
app.use(express.json());

// I want to add the timings in evert request body
app.use((req, res, next) => {
  req.requestDate = new Date().toISOString();
  next();
});

// Routings for API
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/credits", creditsRouter);
app.use("/api/v1/spendings", spendingsRouter);
app.use("/api/v1/remainders", remaindersRouter);
app.use("/api/v1/investments", investmentsRouter);
app.use("/api/v1/transactions", transactionsRouter);

module.exports = app;
