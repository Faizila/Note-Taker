// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// route that sends the user to the index page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// route that sends the user to the notes page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

// route that sends the user the db.json file
app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "db.json"));
});