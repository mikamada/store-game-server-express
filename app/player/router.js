const express = require('express');
const router = express.Router();
const { landingPage, detailPage } = require("./controllers");

router.get("/landingpage", landingPage);
router.get("/:id/detail", detailPage);

module.exports = router