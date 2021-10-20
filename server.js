// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewware to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes
app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get("/notes", (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get("/api/notes", (req, res) =>
    res.sendFile(path.join(__dirname, "/db.json"))
);

// function to read and add a note

    



// Starts the server
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
