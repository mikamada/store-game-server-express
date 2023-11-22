const express = require('express');
const router = express.Router();
const { signup } = require("./controllers");
const multer = require("multer");
const os = require("os");

router.post("/signup", multer({ dest: os.tmpdir() }).single("image"), signup);

module.exports = router