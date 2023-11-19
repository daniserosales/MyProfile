const express = require("express");
const AudioController = require("../controllers/chatGPT");
const router = express.Router();

router.get("/", AudioController.generateSpeechAndStream)

module.exports = router;
