const mongoose = require("mongoose");
const dotenv = require("dotenv");

mongoose.connect(
  // replace the connection string argument by using the enviroment variable method
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("Successful connection with MongoDB Server");
    } else {
      console.log("Error with MongoDB's connectivity");
    }
  }
);
