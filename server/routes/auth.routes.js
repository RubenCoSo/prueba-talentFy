const express = require("express");
const {
  postNewUser,
  checkUserLogin,
} = require("../controllers/auth.controllers");
const router = express.Router();

router.post("/signup", postNewUser);
router.post("/login", checkUserLogin);

module.exports = router;
