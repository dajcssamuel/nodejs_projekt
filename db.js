const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

fs.open("employee.db", "w", function (err, file) {
  if (err) throw err;
  console.log("Saved!");
});

const db = new sqlite3.Database(
  "./employee.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);

    console.log("connection succesful");
  }
);

db.run(
  "CREATE TABLE employees(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, suly TEXT NOT NULL, fekmax TEXT NOT NULL, gugmax TEXT NOT NULL)"
);