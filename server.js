const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const PORT = 5001;
app.listen(PORT, () => console.log(`Server is running on this port: ${PORT}`));
 
//database connection//
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin',
    database: 'mydb'
});
 
connection.connect();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const path = require("path")
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/public/index.html"))
})
// 
app.get("/users", function (req, res) {
    connection.query(`SELECT * FROM kunde`, function (err, result, fields) {
        let data = JSON.parse(JSON.stringify(result))
        res.send(data)
    })
})


//sender data til produkter i database//
app.get("/produkter", function (req, res) {
    connection.query(`SELECT * FROM produkter`, function (err, result, fields) {
        let data = JSON.parse(JSON.stringify(result))
        res.send(data)
    })
})


//sender data til signup i database//
app.post("/signup", function (req, res) {
    let username = req.body.user
    let password = req.body.pass
    connection.query(`insert into brukere (Brukernavn, Passord) values ("${username}", "${password}")`)
})

//sender data til brukere(brukernavn,Passord) i database//
app.post("/create/user/", function (req, res) {
    let user = req.body.user
    let passord = req.body.passord
    connection.query(`INSERT INTO brukere (Brukernavn, passord) VALUES ("${user}", "${passord}")`)
 
})



app.use(express.static("public"))

