// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const fileJSON = require("./db/db.json");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// route that sends the user to the index page
app.get(`*`, (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });

// route that sends the user to the notes page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

// route that sends the user the db.json file
app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
      if (err) throw err;
      res.send(data);
    });

// function reads and adds a new note
fs.readFile("./db/db.json", "utf-8", (err, db) => {
    if (err) throw err;
    db = JSON.parse(db);
    const lastnote = db[db.length - 1];
    const id = lastnote ? lastnote.id + 1 : 1;
    db.push({ ...req.body, id });
    fs.writeFile("./db/db.json", JSON.stringify(db), function (err, data) {
      if (err) throw err;
      res.json("Successfully added!");
    });
  });
});

