//const express = require('express');
//const req = require("express");
//const url = require("url");
//var router = express.Router();
//const app = express();
//app.set('view engine', 'ejs');
//app.use('/assets', express.static('assets'));
//const {connection} = require("../Models/connections");

//function getConnections() {
    //var data = {
      //  set: [
          //  a = ['Category: My Movie Ranking, Director: Jos Whedon', 'Movie: Avengers', 'Score: 50', 'Review: Amazing Film!'],
         //   b = ['Category: Movie Search\n', 'Jos Whedon\n', 'Avengers\n'],
        //    c = ['Category: News By Movie: Batman\n', 'Ben Aflec hangs up the cape\n, will Robbie Pattinson be as good?\n'],
         //   d = ['Category: New Releases 2020\n', 'Director: Jame Gunn\n', 'Movie: Suicide Squad 2\n', 'Release Date: Spring 2021\n'],
         //   f = ['Category: My movie trivia\n', 'Tom Cruise really climbed the Burge Kalifa in MI5, 2016.']
       // ],
        //connectionID: '101'
    //}
    //return data;
//}
//function getConnection(connectionID) {
//}
//module.exports = {myFunc: getConnections()};


const Connection = require("../Models/connections");
const connections = [
    new Connection(
        0,
        "My Movie Ranking",
        "Jos Whedon",
        "Avengers",
        "30",
        "Amazing Film!"
    ),
    new Connection(
        1,
        "My Movie Ranking",
        "Ben Aflec",
        "Batman Vs Superman",
        "90",
        "It was better than you think."
    ),

    new Connection(
        2,
        "My Movie Ranking",
        "Martin Scorsese",
        "Goodfellas",
        "20",
        "'How about that long take'-every college kid ever."
    ),
    new Connection(
        3,
        "My Movie Ranking",
        "Stanley Kubric",
        "2001: A Space Oddessy",
        "4",
        "A technical innovation, far ahead of its time. Hard to imagine this came out before the moon landing."
    ),

    new Connection(
        4,
        "My Movie Ranking",
        "Unknown",
        "Killer Clowns From Outer Space",
        "70",
        "What a wild nightmare this films was."
    ),
    new Connection(
        5,
        "My Movie Ranking",
        "Christopher Nolan",
        "Interstellar",
        "10",
        "A Technical innovation and inspiring look into man kinds future."
    ),
    new Connection(
        6,
        "My Movie Ranking",
        "James Gunn",
        "Slither",
        "46",
        "Strange, but kinda funny."
    )

];
    function getConnections() {
        return connections;
    }

module.exports = getConnections;


