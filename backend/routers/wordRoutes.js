
const express = require("express");
const WordController = require("../controllers/words");
const GPTController = require ("../controllers/shortstory")
const GPTControllerAudio = require ("../controllers/shortstoryaudio");
const MP3Controller = require ("../controllers/mp3");

const router = express.Router();


router.get("/:id", WordController.getWordByUserID);

router.get("/search", WordController.search);
router.put("/:id", WordController.updateWord);
router.get("/", WordController.getAllWords);
router.post("/story", GPTController.generateStoryHandler)
router.post("/audio", GPTControllerAudio)



module.exports = router
