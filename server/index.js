// Example for login/registration backend
// https://www.youtube.com/watch?v=W-sZo6Gtx_E

/*
To run backend server:

1) install dependencies: npm install express body-parser mysql nodemon cors
2) run with: node ./index.js
*/
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "discussit"
});

app.post('/registeruser', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    console.log('REGISTER: Email: '+email+" | Pass: "+password);

  db.query(
    "INSERT INTO users (Email, Password) VALUES (?,?)", 
    [email, password],
    (err, result) => {
      console.log(err);
    }
  );
});

app.listen(3001, () => {
    console.log("Running backend on port 3001");
});

// Database Structure

/*
CREATE DATABASE IF NOT EXISTS `discussit`;
USE `discussit`;

CREATE TABLE IF NOT EXISTS `users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Email` varchar(320) NOT NULL,
  `Password` varchar(320) NOT NULL,
  PRIMARY KEY (`ID`)
) AUTO_INCREMENT=1;
*/