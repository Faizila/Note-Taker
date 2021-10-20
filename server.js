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
app.post(`/api/notes`, function (req, res) {
    fs.readFile("./db/db.json", "utf-8", (err, db) => {
      if (err) throw err;
      db = JSON.parse(db);
      const oldNote = db[db.length - 1];
      const id = oldNote ? oldNote.id + 1 : 1;
      db.push({ ...req.body, id });
      fs.writeFile("./db/db.json", JSON.stringify(db), function (err, data) {
        if (err) throw err;
        res.json("Successfully added a Note!");
      });
    });
  });


// deleting the note

    



// Starts the server
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
