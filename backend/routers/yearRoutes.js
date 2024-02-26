const RandomController = require('../controllers/yearwords')
const express = require("express");
const router = express.Router();


router.get("/:label", RandomController.getRandom)

module.exports = router;
