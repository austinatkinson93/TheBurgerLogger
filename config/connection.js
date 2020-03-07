const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"ctgplw90pifdso61.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port:"3306",
    user:"mutlsvpr0peqnofb",
    password:"lnqe4ihytrm1ls9x",
    database:"p7hilx07l3anpdtk"
})

connection.connect(err=>{
    if(err) console.log(err);
})

module.exports = connection;