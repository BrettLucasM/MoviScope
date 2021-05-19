const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
fs = require('fs');
const model = require("./Models/UserModel");

function LogMeIn() {

    Users.exists({userID: req.body.username, password: req.body.password}, function (err, result) {
        if (result === false) {
            console.log("Username not found in database")
            res.redirect('/login');
        }
        if (result === true) {
            console.log("User name found in Database")
            Users.find(function (err, password) {
                if (err) return console.error(err);
                console.log(password);

            });
            res.locals.username = req.body.username
            next()
        }

    })
}