const express = require('express');
const router = express.Router();

// Get Menu
router.get("/", (req, res) => {
    res.render('menu');
});

module.exports = router;