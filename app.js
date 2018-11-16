const path = require("path");
const express = require("express");
const app = express();
const dbURI = require("./config/keys");
const mongoose = require("mongoose");
const passport = require("passport");
require("./models/Admin")
app.use(passport.initialize());

require("./config/passport")(passport);
// Set up body parser so we can parse json to our frontend
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// creates connection to mongo db, sets default port to 5000
// unless we are using a server
const db = require("./config/keys").mongoURI;
mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;
// End Imports Section // // // // // // // //


app.listen(port, () => console.log(`Server is running on port ${port}`));

