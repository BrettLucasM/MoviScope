const express = require('express'); //requires express
const session = require('express-session') //require express sessions
const bodyParser = require('body-parser') //requires body parser
var urlencodedParser = bodyParser.urlencoded({ extended: false }); //saves urlencoder as a variable
const app = express(); // saves express() as a variable
app.set('view engine', 'ejs'); //accesses views engine
app.use('/assets', express.static('assets')); // accesses the css page for the entire season
fs = require('fs');
const model = require("./Models/UserModel"); //requires the userModel and saves it as a variable
const { check, validationResult } = require('express-validator');
const mongoose = require('mongoose'); //requires mongoose and saves it as a variable
mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true, useUnifiedTopology: true}); //creates a mongoose database called users

const db = mongoose.connection; //saves the mongoose connection command as a variable, db.
db.on('error', console.error.bind(console, 'connection error:')); //starts mongoose
db.once('open', function() { //connects mongoose and runs the DB
    console.log("Connected to Mongoose!"); //Output for the console
    const userSchema = new mongoose.Schema({ //creates new user schema (userSchema) that initializes objects.
        userID: String,
        password: String,
        firstN: String,
        lastN: String,
        email: String
    });
    const Users = mongoose.model('Users', userSchema); //saves the userSchema to a model, Users

    const userInfoSchema = new mongoose.Schema({ //creates new user information schema (userInformationSchema) that initializes objects.
        connectionID: String,
        RSVP: String,
        ConnectionType: String,
        Name: String,
        Details: String,
        Where: String,
        When: String
    });

    const UserInfo = mongoose.model('UserInfo', userInfoSchema);//saves the userInfoSchema to a model, UserInfo



const ConnectionDB = require('.//routes/connectionDB'); //requires connectionDB and saves it as a variable.

const router = express.Router();//unused router, please ignore.

app.use(session({secret:'Keep it secret' //creates session secret and parameters.
    ,name:'uniqueSessionID'
    ,saveUninitialized:false}))

var connectionRoutes = require('./routes/connectionRoutes');// left over require from Milestone2
var connectionControl = require('./routes/connectionControl');//left over require from Milestone2
const {connection} = require("./models/connections"); //left over require from Milestone2
//app.use('/connections', connectionControl);

app.get('/', function (req, res){ //serves the index page and gives it a URL of '/'

    let data = { //saves reg.session as a variable called data. This is useful for displaying username while logged it (While session is active).
        "r": req.session
    }


    //place deletion and creation code here for reset of database



    res.render('index', {data: data}) //sends all of the data to index and renders index.
});

    app.get('/connection2', function (req, res){//Services the Connection2 page in order to display database information

                UserInfo.find({connectionID: "connect", ConnectionType: "Subscribe to our Service" }, function(err, result) {
                    //finds a document in the UserInfo model with specific parameters, connectionID and ConnectionType
                    if (err) { //If there is an error then the console will log it and the website will hang
                        console.log(err);
                    } else { //If there is no error then continue
                        console.log("Connection was found")  //console information
                        let data = {   //variable data saves information to be sent to connection2
                            "r": req.session,  //session information
                            "p": result,   //result of the 'find' command, which is saved as a array type document from the located DB document
                            qs: req.query   //query information for user input
                        }
                        res.render('Connection2', {data: data});   //sends all the variables of data to the connection2
                    }
                })
    });
app.get('/connection3', function (req, res){

    //similar to the previous get method, except it is searching different information saved to connectionID and ConnectionType
        UserInfo.find({connectionID: "connect", ConnectionType: "Subscribe to our recommendations" }, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log("Connection was found")
                let data = {
                    "r": req.session,
                    "p": result
                }
                res.render('Connection2', {data: data});
            }
        })
});

    app.get('/connection4', function (req, res){
        //similar to the previous get method, except it is searching different information saved to connectionID and ConnectionType
        UserInfo.find({connectionID: "connect", ConnectionType: "RSVP to streaming events" }, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log("Connection was found")
                let data = {
                    "r": req.session,
                    "p": result
                }
                res.render('Connection2', {data: data});
            }
        })
    });

    app.get('/connection5', function (req, res){
        //similar to the previous get method, except it is searching different information saved to connectionID and ConnectionType
        UserInfo.find({connectionID: "connect", ConnectionType: "RSVP to Theatre Events" }, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log("Connection was found")
                let data = {
                    "r": req.session,
                    "p": result
                }
                res.render('Connection2', {data: data});
            }
        })
    });

    app.get('/connection6', function (req, res){
        //similar to the previous get method, except it is searching different information saved to connectionID and ConnectionType
        UserInfo.find({connectionID: "connect", ConnectionType: "Email List" }, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log("Connection was found")
                let data = {
                    "r": req.session,
                    "p": result
                }
                res.render('Connection2', {data: data});
            }
        })
    });

    app.get('/connection7', function (req, res){
        //similar to the previous get method, except it is searching different information saved to connectionID and ConnectionType
        UserInfo.find({connectionID: "connect", ConnectionType: "Enter Raffle" }, function(err, result) {
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
    });


app.post('/Subscribe', urlencodedParser, function (req, res){
//When a user clicks on the subscribe button on the connection2 page
    console.log(req.body.ConnectionType) //console log

    UserInfo.exists({ConnectionType: req.body.ConnectionType, connectionID: req.session.username, RSVP: 'yes'}, function (err, result) {
        //searches for connectionID that matches the username of the user, connectionType of the information from the for loop on connection2, and where RSVP = 'yes'
        if (result === true) {
                 var t = 1;     //used to display a message showing what the user has done. In this case 'subscribe'
                 var data={  //saves the variables to the variable data.
                       "t": t,
                        qs: req.query,
                        "r": req.session
                          }
                        res.render('Connections', {data: data}); //sends data to Connections
         } else if(result === false) {
                  console.log("found");

                  const temp = new UserInfo({ connectionID: req.session.username, RSVP: "yes", ConnectionType: req.body.ConnectionType, Name: req.body.Name, Details: req.body.Details, When: req.body.When, Where: req.body.Where });
                  temp.save(function (err, temp) {
                        if (err) return console.error(err);
                            console.log(temp);
                        });
            //saves the new subscription with the username as connectionID and RSVP as 'yes', so that they can be distinguished form other connections.


            var t = 2;   //used to display a message of what the user did on the Connections page
                  var data={
                     "t": t,
                      qs: req.query,
                      "r": req.session
                        }
                   res.render('Connections', {data: data}); //sends the above data to Connections
         }
    });
         UserInfo.find(function (err, Users) { //Displays the database to the console
                if (err) return console.error(err);
                console.log(Users);
         });
});

app.get('/contact', function (req, res){ //services the contact page as /contact

    let data = {
        "r": req.session  //saves the session (username) to be displayed once logged in
    }
    res.render('contact', {data: data});  //sends the data to the contact page
});

app.get('/signup', function (req, res){  ///Services the signUp page as /signup

    let data = {
        "r": req.session,
        qs: req.query  //sends query strings that will take user input for signing in.
    }
    res.render('signUp', {data: data}); //sends the data to the signUp page.
});
    app.use(bodyParser.urlencoded({ extended: true}));
    app.post('/c', [
        check('userID').isAlphanumeric().withMessage('USERNAME must be a one word Alphabetical string'),
        check('email').isEmail().withMessage('EMAIL must be a valid Email'),
        check('password').isStrongPassword().withMessage('PASSWORD must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number'),
        check('firstN').isAlpha().withMessage('FIRST NAME must be a one word Alphabetical string'),
        check('lastN').isAlpha().withMessage('LAST NAME must be a one word Alphabetical string')
    ], function (req, res){
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            //console.log(res.status(422).json({ errors: errors.array() }))
            let data = {
            qs: req.query,
            errors: errors.array(),
            "r": req.session
            }
            res.render('signUp', {data: data});
        } else {

            Users.exists({userID: req.body.userID}, function (err, result) {
                if (result === false) {
                    console.log("Exists?:" + result)

                    const temp = new Users({
                        userID: req.body.userID,
                        password: req.body.password,
                        firstN: req.body.firstN,
                        lastN: req.body.lastN,
                        email: req.body.email
                    });
                    temp.save(function (err, temp) {
                        if (err) return console.error(err);
                        console.log(temp);
                    });
                    var v = 1;
                }

                if (result === true) {
                    console.log("Exists?:" + result)
                    var v = 2;
                }
                let data = {
                    "u": req.body,
                    "v": v
                }

                Users.find(function (err, Users) {
                    if (err) return console.error(err);
                    console.log(Users);
                });

                res.render('login', {data: data});
            });
        }
    });

app.get('/updateDeleteAccount', function (req, res, next){ //Services the DeleteUpdateAccount page as /UpdateDeleteAccount

    let data = {
        "r": req.session,
        qs: req.query  //similar to the previos method
    }
    res.render('DeleteUpdateAccount', {data: data});
});

//app.post('/updateAccount', urlencodedParser, function (req, res){
    app.use(bodyParser.urlencoded({ extended: true}));
    app.post('/updateAccount', [
        check('email').isEmail().withMessage('EMAIL must be a valid Email'),
        check('password').isStrongPassword().withMessage('PASSWORD must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number'),
        check('firstN').isAlpha().withMessage('FIRST NAME must be a one word Alphabetical string'),
        check('lastN').isAlpha().withMessage('LAST NAME must be a one word Alphabetical string')
    ], function (req, res){
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            //console.log(res.status(422).json({ errors: errors.array() }))
            let data = {
                qs: req.query,
                "r": req.session,
                errors: errors.array()
            }
            res.render('DeleteUpdateAccount', {data: data});
        } else {
            Users.exists({userID: req.session.username}, function (err, result) {
                if (result === false) {  //if the username does not exits display to the console
                    console.log("Exists?:" + result)
                }

                if (result === true) {
                    console.log("Exists?:" + result)
                    var v = 1;

                    const doc1 = Users.findOne({userID: req.session.username}, function (err, result) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("found");
                        }  //When the username exists find the document containing it and ave as doc1
                    });
                    const update1 = {      //saves the nw document information with the users input from signUp page
                        password: req.body.password,
                        firstN: req.body.firstN,
                        lastN: req.body.lastN,
                        email: req.body.email
                    };
                    doc1.updateOne(update1);  //updates the document

                    let data = {
                        "r": req.session,
                        "u": req.body,
                        "v": v
                    }
                    res.render('DeleteUpdateAccount', {data: data}); //sends the updated data to the DeleteUpdateAccount
                }

                Users.find(function (err, Users) {  //displays all documents to the console.
                    if (err) return console.error(err);
                    console.log(Users);
                });
            });
        }

});
app.post('/deleteAccount', urlencodedParser, function (req, res){
   //services the DeleteUpdateAccount page.
    Users.exists({userID: req.session.username}, function(err, result) {
        if (result === false) {
            console.log("Does not exist");
            res.redirect('/updateDeleteAccount');//if the account does not exist then redirect to /updateDeleteAccount URL
        }
        if (result === true) {
            Users.find({ userID : req.session.username}, function(err, result) { //If user exists find its document
                if (err) {
                    console.log(err);
                } else {
                    Users.deleteOne({userID: req.session.username}, function (err) {//delete the user document
                        if (err) console.log(err);
                        console.log("Successful deletion of user");
                    })
                    UserInfo.deleteMany({connectionID: req.session.username}, function (err) { //delete all of the saved connections for the account.
                        if (err) console.log(err);
                        console.log("Successful deletion of user information");
                    })


                    res.redirect('/logOut');//redirect to logout where the session is destroyed.
                }
            })
        }
    })

    });


//app.post('/c', urlencodedParser, function (req, res){





app.get('/login', function (req, res){// services login page

    let data = {
        "r": req.session
    }
    res.render('login', {data: data});//sends session data to login page
});

app.get('/logOut', function (req, res){//services logout page

    req.session.destroy()  ///destroys session
    let data = {
        "r": req.session
    }
    res.render('index', {data: data}) //sends lack of session data to index
});

app.post('/authenticate'
    ,bodyParser.urlencoded()
    ,(req,res,next)=>
    { //services login page, but is used to authenticate the user exists
// Actual implementation would check values in a database
        Users.exists({ userID: req.body.username, password: req.body.password}, function(err, result) {
            //find username and password as well as check if it exists.
            if (result === false) {
                console.log("Username not found in database")
                res.redirect('/login');//does not exist reroute to /login URL
            }
            if (result === true) {
                console.log("User name found in Database")
                Users.find(function (err, password) { //username and password exist find the document.
                    if (err) return console.error(err);
                    console.log(password);

                });
                res.locals.username = req.body.username //save the username as a local username
                next()
            }

    })
    }
    ,(req,res)=>
    {
        req.session.loggedIn = true  //logged in now equals true
        req.session.username = res.locals.username   //save username as session
        console.log(req.session)
        res.redirect('/authenticate')
    })

app.get('/authenticate', function (req, res){

    if(req.session.loggedIn)
    {
        res.redirect('/Connection');  //if logged in then go to /connect URL where the nav.ejs will have logged in functionality
    }
    else
        res.redirect('/login'); //if any other answer redirect to /login URL
});


app.get('/Connection', function (req, res){

    let data = {
        "qs": req.query,
        "r": req.session
    }

    res.render('Connections', {data: data});
});
app.post('/Connection1', urlencodedParser, function (req, res){

    UserInfo.exists({Name: req.body.Name}, function(err, result) {
        if (result === false) {
            console.log("Name does not exist");
            console.log(req.session.username)
            res.redirect('/Connection');
        }
        if (result === true) {
            console.log("Name does exist");
            UserInfo.find({connectionID: req.session.username, Name: req.body.Name, RSVP: 'Yes' }, function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Name was found")
                    //console.log(result[0].director);
                }
                let data = {
                    "r": req.session,
                    "result": result
                }
                res.render('checkConnection', {data: data});
        })
        }
    })
});

//app.post('/SearchSubs', urlencodedParser, function (req, res){
    app.use(bodyParser.urlencoded({ extended: true}));
    app.post('/SearchSubs', [
        check('Name').isString().withMessage('Name must be a string.')
    ], function (req, res){
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            //console.log(res.status(422).json({ errors: errors.array() }))
            let data = {
                qs: req.query,
                "r": req.session,
                errors: errors.array()
            }
            res.render('Connections', {data: data});
        } else {
            UserInfo.exists({Name: req.body.Name}, function (err, result) {
                if (result === false) {
                    console.log("Movie does not exist");
                    console.log(req.session.username)
                    res.redirect("/Connection");
                }
                if (result === true) {
                    console.log("Movie does exist");
                    UserInfo.find({
                        connectionID: req.session.username,
                        Name: req.body.Name,
                        RSVP: 'yes'
                    }, function (err, result) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("Movie was found")
                            //console.log(result[0].director);
                            let data = {
                                "r": req.session,
                                "result": result
                            }
                            res.render('checkConnection', {data: data});
                        }
                    })
                }
            })
        }
});


app.get('/about', function (req, res){
    let data = {
        "r": req.session
    }
    res.render('about', {data: data});
});

app.get('/savedConnections', function (req, res){
    let data = {
        "r": req.session
    }
    res.render('savedConnections', {data: data});
});

app.get('/updateDelete', function (req, res){
    var i = 1;
        let data = {
            "r": req.session,
            qs: req.query,
            "i": i
        }
        res.render('updateDelete', {data: data});
    });

    app.get('/unsubscribe', function (req, res){
        var i = 2;
        let data = {
            "r": req.session,
            qs: req.query,
            "i": i
        }
        res.render('updateDelete', {data: data});
    });


app.post('/delete', urlencodedParser, function (req, res){

    UserInfo.exists({Name: req.body.Name}, function(err, result) {
        if (result === false) {
            console.log("Does not exist");
            res.redirect('/updateDelete');
        }
        if (result === true) {
            UserInfo.find({ connectionID : req.session.username, Name: req.body.Name, RSVP: 'Yes'}, function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    UserInfo.deleteOne({Name: req.body.Name, connectionID : req.session.username, RSVP: 'Yes'}, function (err) {
                        if (err) console.log(err);
                        console.log("Successful deletion of "+req.body.Name);
                    })
                    var t = 1;
                    UserInfo.find({ "connectionID" : req.session.username }, function(err, result) {
                        if (err) {
                            console.log(err);
                        } else {
                            //res.send(result[8].director);
                        }
                    })

                    let data = {
                        "r": req.session,
                        "t": t,
                        "result": result
                    }
                    //console.log(data);
                    res.render('connection', {data: data});
                }

            })
        }
    })
});

app.post('/unsubscribe1', urlencodedParser, function (req, res){

        UserInfo.exists({Name: req.body.Name}, function(err, result) {
            if (result === false) {
                console.log("Does not exist");
                res.redirect('/updateDelete');
            }
            if (result === true) {
                UserInfo.find({ connectionID : req.session.username, Name: req.body.Name, RSVP: 'yes'}, function(err, result) {
                    if (err) {
                        console.log(err);
                    } else {

                        UserInfo.deleteOne({Name: req.body.Name, connectionID: req.session.username, RSVP: 'yes'}, function (err) {
                            if (err) console.log(err);
                            console.log("Successful deletion of "+req.body.Name);
                        })
                        var t = 100;
                        let data = {
                            "r": req.session,
                            "t": t,
                            "result": result
                        }
                        //console.log(data);
                        res.render('connection', {data: data});
                    }

                })
            }
        })
    });

app.post('/update', urlencodedParser, function (req, res){
    UserInfo.exists({ Name: req.body.Name }, function(err, result) {
        if (result === false) {
            console.log("Exists?:" + result)
            console.log(req.body.Name);
            res.redirect('/updateDelete');
        }

        if (result === true) {
            console.log("Exists?:" + result)
            console.log(req.body.Name);

            const doc1 = UserInfo.findOne({
                connectionID: req.session.username,
                Name: req.body.Name,
                RSVP: 'Yes'
            }, function (err, result) {
                if (err) {
                    console.log(err);
                } else {

                }
            });
            const update1 = {ConnectionType: req.body.ConnectionType};
            doc1.updateOne(update1);

            const doc2 = UserInfo.findOne({
                connectionID: req.session.username,
                Name: req.body.Name,
                RSVP: 'Yes'
            }, function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    //res.send(result);
                }
            });
            const update2 = {Details: req.body.Details};
            doc2.updateOne(update2);

            const doc3 = UserInfo.findOne({
                connectionID: req.session.username,
                Name: req.body.Name,
                RSVP: 'Yes'
            }, function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    //res.send(result);
                }
            });
            const update3 = {Where: req.body.Where};
            doc3.updateOne(update3);

            const doc4 = UserInfo.findOne({
                connectionID: req.session.username,
                Name: req.body.Name,
                RSVP: 'Yes'
            }, function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    //res.send(result);
                }
            });
            const update4 = {When: req.body.When};
            doc4.updateOne(update4);
            var t = 2
            var data = {
                "r": req.session,
                "t": t,
                "result": result
            }
            res.render('connection', {data: data});
        }
        //res.send(result[8].director);

        //console.log(data);

    })

    });

app.get('/connection1', function (req, res) {

    UserInfo.find({ "connectionID" : req.session.username, RSVP: 'yes' }, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            //res.send(result[8].director);
        }

        var y = 1;

    let data = {
        "r": req.session,
        "result": result,
        "y": y
    }
    //console.log(data);
    res.render('connection', {data: data});
    });
});

    app.get('/conn', function (req, res) {

        UserInfo.find({ "connectionID" : req.session.username, RSVP: 'Yes' }, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                //res.send(result[8].director);
            }
            var y = 2;

            let data = {
                "r": req.session,
                "result": result,
                "y": y
            }
            //console.log(data);
            res.render('connection', {data: data});
        });
    });


app.get('/newConnection', function (req, res) {


    let data = {
        "qs": req.query,
        "r": req.session
    }
    res.render('newConnection', {data: data});


});

//app.post(, urlencodedParser, function (req, res){
    app.use(bodyParser.urlencoded({ extended: true}));
    app.post('/newConnection1', [
        check('ConnectionType').isString().withMessage('ConnectionType must be a string.'),
        check('Name').isString().withMessage('Name must be a string.'),
        check('Details').isString().withMessage('Details must be a string.'),
        check('Where').custom((value) => {
            return value.match(/^[A-Za-z ]+$/);
        }).withMessage('Where must be a 2 words, Charlotte NC.'),
        check('When').isAfter('05/09/2021').withMessage('When must be a date after 05/09/2021.')
    ], function (req, res){
    //UserInfo.exists({movie: req.body.movie}, function(err, result) {
        //console.log(req.body.movie + " is already created.")
   // })

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            //console.log(res.status(422).json({ errors: errors.array() }))
            let data = {
                qs: req.query,
                errors: errors.array(),
                "r": req.session
            }
            res.render('newConnection', {data: data});
        } else {

            UserInfo.exists({ "connectionID" : req.session.username, Name: req.body.Name}, function (err, result) {
                if (result === true) {
                    console.log(req.body.Name + " does exist");
                    res.redirect('/')
                }
                if (result === false) {
                    console.log(req.body.Name + " exists");
                    const temp = new UserInfo({
                        connectionID: req.session.username,
                        RSVP: 'Yes',
                        ConnectionType: req.body.ConnectionType,
                        Name: req.body.Name,
                        Details: req.body.Details,
                        Where: req.body.Where,
                        When: req.body.When
                    });
                    temp.save(function (err, temp) {
                        if (err) return console.error(err);
                        console.log(temp);
                    });
                    UserInfo.find(function (err, UsersInfo) {
                        if (err) return console.error(err);
                        console.log(UsersInfo);
                    });
                    console.log(req.body);
                    let c = ConnectionDB();
                    const Connection = require("../Milestone3/Models/connections");
                    let x = req.body;
                    let data = {
                        "c": c,
                        "x": x,
                        "r": req.session
                    }
                    res.render('newConnection1', {data: data});
                }
            })


        }
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
});
