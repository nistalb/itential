const express = require("express");
const router = express.Router();

const db = require("../models");

/* Create routes */

// login
router.get("/login", (req, res) => {
    res.send("Hello World");
});

module.exports = router;