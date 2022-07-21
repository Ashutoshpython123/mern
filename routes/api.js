const express = require("express");
const router = express();

// register main api points
router.use("/user", require('./user.route'));

module.exports = router;