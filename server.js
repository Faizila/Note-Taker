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

app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  });

// function to read and add a note




// deleting the note

    



// Starts the server
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
