const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.Mongo_Connection)
  .then(() => {
    console.log("Mongo Connected");
  })
  .catch((er) => {
    console.log(er.message);
  })
  .finally(() => {
    console.log(".");
  });
