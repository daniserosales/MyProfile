const express = require("express");
const ShortStoryController = require("../controllers/openAi");
const router = express.Router();

router.post("/shortstory", ShortStoryController);


module.exports = router;
