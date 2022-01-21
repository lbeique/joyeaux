const express = require('express');
const router = express.Router();

// Get Online Ordering
router.get("/", (req, res) => {
    res.render('onlineOrdering');
});

module.exports = router;