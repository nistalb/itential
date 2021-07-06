const express = require("express");
const router = express.Router();

const db = require("../models");

/* Create routes */

// index
router.get("/", (req, res, next) => {
    
    db.Soda.find({name: "Pop"})
    .then(data => res.json(data))
    .catch(next) 
});

// new
router.get("/new", (req, res) => {
    res.render("soda/new.ejs");     
 });

// create
router.post("/", async (req, res) => {
    try {
        await db.Soda.create(req.body);
        return res.redirect("/soda");
    } catch (err) {
        return res.send(err);
    };
})

module.exports = router;