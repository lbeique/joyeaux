const express = require('express');
const router = express.Router();

// Get Reviews
router.get("/", (req, res) => {
    res.render('reviews');
});

module.exports = router;