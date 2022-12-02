const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

//parse application/json
app.use(bodyParser.json())

//create database connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'db_karyawan'
});

//connect ke database
conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected...');
});

//tampilkan data users berdasarkan id
app.get('/data/karyawan', (req, res) => {
    let sql = 'select * from karyawan';
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }))
    })
})

app.get('/data/karyawan/:id', (req, res) => {
    let sql = 'select * from karyawan where id =' + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }))
    })
})

//Tambahkan data karyawan baru
app.post('/data/karyawan', (req, res) => {
    let data = { nip: req.body.nip, nama: req.body.nama, alamat: req.body.alamat }
    let sql = 'insert into karyawan set ?'
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }))
    })
})

//Edit data kaeyawan berdasarkan id
app.put('/data/karyawan/:id', (req, res) => {
    let { nama, alamat, nip } = req.body
    let sql = 'update karyawan set nip = "${nip}",nama = "${nama}", alamat = "${alamat}" where id = ${req.params.id}'
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }))
    })
})

//Delete data karyawan berdasarkan id
app.delete('/data/karyawan/:id', (req, res) => {
    let sql = 'delete from karyawan where id = ' + req.params.id
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }))
    })
})

//Server listenimg
app.listen(3000, () => {
    console.log('Server started on port 3000')
})