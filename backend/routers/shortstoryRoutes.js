const express = require("express");
const ShortStoryController = require("../controllers/openAI");
const router = express.Router();

router.post("/shortstory", ShortStoryController);


module.exports = router;
