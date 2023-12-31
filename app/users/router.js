var express = require('express');
var router = express.Router();
const { viewSignin, actionSignin, actionLogout } = require("./controllers")

router.get('/', viewSignin);
router.post('/', actionSignin);
router.get('/logout', actionLogout);

module.exports = router;
