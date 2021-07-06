 /* == External Modules == */
 const express = require("express");
 const methodOverride = require("method-override");
 const session = require("express-session");
 const MongoStore = require("connect-mongo");

/* == Internal Modules == */ 
const controllers = require("./controllers");

/* == Instanced Modules == */
const app = express();
require("dotenv").config();

/* == Configuration == */
const PORT = process.env.PORT;

/* == Middleware == */
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

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

// machine controller
app.use("/", controllers.machine);

// user controller
app.use("/user", controllers.user);

// soda controller
app.use("/soda", authRequired, controllers.soda)

/* == Server Listener == */
app.listen(PORT)