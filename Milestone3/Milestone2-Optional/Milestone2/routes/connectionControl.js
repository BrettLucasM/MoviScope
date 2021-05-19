const express = require('express');
const req = require("express");
const url = require("url");
var router = express.Router();

const app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

router.get('/connection1', function (req, res) {
    //var courseModel = require('./../models/Course');

    res.render('connection', {qs: req.query});

});

module.exports = router;