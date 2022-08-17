const express = require("express");
const { get } = require("mongoose");
const router = express.Router();
const { registerUser, loginUser, getUser } = require('../controllers/userController');

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", getUser);

module.exports = router
