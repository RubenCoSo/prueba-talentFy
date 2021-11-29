const express = require("express");
const router = express.Router();
const { getUserData } = require("../controllers/data.controllers.js");

const { isAuthenticated } = require("../middleware/jwt.middleware");

router.get("/:id", getUserData);

module.exports = router;
