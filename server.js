 /* == External Modules == */
 const express = require("express");
 const session = require("express-session");
 const MongoStore = require("connect-mongo");
 const bodyParser = require("body-parser");

/* == Internal Modules == */ 
const controllers = require("./controllers");

/* == Instanced Modules == */
const app = express();
require("dotenv").config();

/* == Configuration == */
const PORT = process.env.PORT;



/* == Middleware == */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());



// session
app.use(
    session({
        store: MongoStore.create({
            mongoUrl: "mongodb://localhost:27017/itentialdb"
        }),
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    })
);

// logger
app.use(function(req,res,next){
    console.log(req.session);
    next();
});

// user authentication middleware
app.use(function(req,res,next){
     app.locals.user = req.session.currentUser;
     next();
});

const authRequired = require("./middleware/authRequired");

// user controller
app.use("/user", controllers.user);

// soda controller
app.use("/soda", controllers.soda)

// admin
// NOTE add authrequired back in
app.use("/admin", controllers.admin)

/* == Server Listener == */
app.listen(PORT)