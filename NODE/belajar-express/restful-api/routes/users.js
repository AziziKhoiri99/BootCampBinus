const express = require('express');
const app = express();

const connection = require('../library/database')

//route untuk homepage
app.get("/", (req, res) => {
  let sql = "SELECT * FROM karyawan";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.render("karyawan", {
      results: results,
    });
  });
});

//route untuk insert data
app.post("/save", (req, res) => {
  let data = {
    nip: req.body.nip,
    nama: req.body.nama,
    alamat: req.body.alamat,
  };
  let sql = "INSERT INTO karyawan SET ?";
  connection.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect("/");
  });
});

//route untuk update data
app.post("/update", (req, res) => {
  let sql =
    "UPDATE karyawan SET nip='" +
    req.body.nip +
    "', nama='" +
    req.body.nama +
    "', alamat='" +
    req.body.alamat +
    "' WHERE id=" +
    req.body.id;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect("/");
  });
});

//route untuk delete data
app.post("/delete", (req, res) => {
  let sql = "DELETE FROM karyawan WHERE id=" + req.body.id + "";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect("/");
  });
});


module.exports = app;
