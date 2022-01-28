const express = require('express');
const router = express.Router();

// Get Index
router.get("/", (req, res) => {
    res.render('index');
});

router.get("/index", (req, res) => {
    res.render('index');
});

module.exports = router;