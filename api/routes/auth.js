const { register, login, logout } =  require("../controllers/auth.js");
const express = require("express");

const router = express.Router();


router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);


module.exports = router;