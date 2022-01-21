const express = require('express');
const router = express.Router();

// Get About Us
router.get("/", (req, res) => {
    res.render('aboutUs');
});

module.exports = router;