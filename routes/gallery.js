const express = require('express');
const router = express.Router();

// Get Gallery
router.get("/", (req, res) => {
    res.render('gallery');
});

module.exports = router;