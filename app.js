// Dependencies
const express = require("express");
const path    = require("path");

// Init app
const app = express();

// Load statics
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/public')));

app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/app.html'));
});

// Run the server
app.listen(4000);