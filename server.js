require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3011;
const routes = require("./routes");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// adding routes
app.use(routes);

// Connect to the Mongo DB
mongoose
.connect(process.env.MONGO_URI || "mongodb://localhost/reactreadinglist", {
// additional code to remove Deprecation Warnings
useUnifiedTopology: true,
useNewUrlParser: true
})
.then(() => console.log("DB Connected!"))
.catch(err => {
console.log("DB Connection Error:" + err.message);
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
