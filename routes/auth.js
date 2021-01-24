const express = require("express");
const { protect } = require("../middleware/auth");
const { register, login, getMe, updateMe } = require("../controllers/auth");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getme", protect, getMe);
router.post("/updateme", protect, updateMe);
module.exports = router;
