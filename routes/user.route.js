const router = require("express").Router();
const {createUser, getUser} = require("../controllers/user.controller");

router.post("/create", [createUser]);
router.get('/list', getUser);

module.exports = router;

