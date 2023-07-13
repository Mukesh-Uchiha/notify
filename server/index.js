const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:test123@pleasework.smmpuxs.mongodb.net/company?retryWrites=true&w=majority"
);

app.use(express.json());

app.listen(3001, () => {
  console.log("Daddy cum on port 3001");
});

app.get("/", (req, res) => {});
