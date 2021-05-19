const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
fs = require('fs');
const model = require("../Models/UserModel");
const app1 = require("../../Milestone3/app");

const mongoose = require('mongoose');
const UserInfo = mongoose.model('UserInfo', userInfoSchema);



    function DisplaySubOne() {
        UserInfo.find({connectionID: "connect", ConnectionType: "Subscribe to our Service"}, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log("Connection was found")
                let data = {
                    "r": req.session,
                    "p": result,
                    qs: req.query
                }
                res.render('Connection2', {data: data});
            }
        })
    }

module.exports = {DisplaySubOne}