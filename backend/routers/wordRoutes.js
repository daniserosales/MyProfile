
const express = require("express");
const WordController = require("../controllers/words");
const GPTController = require ("../controllers/chatGPT")
const router = express.Router();

router.get("/:id", WordController.getWordByUserID);
router.get("/search", WordController.search);
router.put("/:id", WordController.updateWord);
router.get("/", WordController.getAllWords);
router.get("/test", GPTController.generateSpeechAndStream)

module.exports = router
