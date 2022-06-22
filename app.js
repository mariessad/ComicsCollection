// const { response } = require("express");
require("dotenv").config();
const express = require("express");
const app = express();
// const PORT = 3300;
const morgan = require("morgan");
const path = require("path");
const methodOverride = require("method-override");
const indexRoutes = require("./routes/index-routes");
const session = require("express-session");
const passport = require("passport");

const PORT = process.env.PORT || 3300; // edit port to include env file

app.set("view engine", "ejs"); //this configures the app to set EJS to be the template language
app.use(morgan("combined")); //combined or dev?
app.use(methodOverride("_method")); //middlewear for bringing in method override. Needs key name to know what to override
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //didn't see this in homework 12 part one but see it in 3.2 slides

app.use(express.static(path.join(__dirname, "public"))); // this configures the app to know that the public directory is available

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRoutes);

require("./config/connection");

//Server
app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
