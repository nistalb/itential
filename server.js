 /* == External Modules == */
 const express = require("express");
 
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
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// soda controller
app.use("/soda", controllers.soda);

// vending machine controller
app.use("/vend", controllers.vend);

/* == Server Listener == */
app.listen(PORT, function() {
    console.log('app listening on port ' + PORT);
});