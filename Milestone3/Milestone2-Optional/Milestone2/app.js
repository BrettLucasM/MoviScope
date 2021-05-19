const express = require('express');
var bodyparser = require('body-parser');
var urlencodedParser = bodyparser.urlencoded({ extended: false });
const app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

//const DB = require('../Milestone3/routes/connectionDB');
const ConnectionDB = require('../Milestone2/routes/connectionDB');
//const Connection = require('../model/connection');

const router = express.Router();


var connectionRoutes = require('./routes/connectionRoutes');
var connectionControl = require('./routes/connectionControl');
app.use('/coursedetails',connectionRoutes);
const {connection} = require("./models/connections");
app.use('/connections', connectionControl);

app.get('/', function (req, res){

    res.render('index');
});

app.get('/contact', function (req, res){

    res.render('contact');
});

app.get('/signup', function (req, res){

    res.render('savedConnections');
});

app.get('/login', function (req, res){

    res.render('login');
});

app.get('/Connection', function (req, res){

    res.render('Connections', {qs: req.query});
});
app.post('/Connection1', urlencodedParser, function (req, res){
    if (validateConnectionId(req.body.connectionID)) {
        console.log("valid id");
        let connections = ConnectionDB();
        let r = req.body;
        let data = {
            "connection": connections,
            "r": r
        }
        res.render('checkConnection', {data: data});
    }
    else{
        console.log("Invalid ID!");
    }

});

app.get('/about', function (req, res){

    res.render('about');
});

app.get('/savedConnections', function (req, res){

    res.render('savedConnections');
});

app.get('/connection1', function (req, res) {
    //let connectionID = req.query.connectionID;
    //let connection;
    //console.log("testing")
    // validate data

    //const connectionDB = new DB.ConnectionDB();

    let connections = ConnectionDB();
    console.log("here")

    console.log(connections)

    let data = {
        "connection": connections
    }
    console.log(data);
    res.render('connection', {data: data});
    //res.render('connection', {data: DB.getConnections()});
        //res.render('connection');
});


app.get('/newConnection', function (req, res) {
    res.render('newConnection', {qs: req.query});


});

app.post('/newConnection1', urlencodedParser, function (req, res){
    console.log(req.body);
    let c = ConnectionDB();
    let r = req.body;
    var j = [];
    let data = {
        "c": c,
        "r": r,
        "j": j
    }

    res.render('newConnection1', {data: data});

});
function validateConnectionId(connectionID) {
    console.log(connectionID);
    if (connectionID !== undefined) {
        if (Number.isInteger(Number.parseInt(connectionID))) {
            return true;
        } else{
            return false;
        }
    } else{
        return false;
    }
}

app.listen(8080,function(){
    console.log('app started')
    console.log('listening on port 8080')
});