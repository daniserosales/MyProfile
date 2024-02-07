
const express = require("express");
const WordController = require("../controllers/words");
const GPTController = require ("../controllers/shortstory")
const router = express.Router();

router.get("/:id", WordController.getWordByUserID);
router.get("/search", WordController.search);
router.put("/:id", WordController.updateWord);
router.get("/", WordController.getAllWords);
router.post("/story", GPTController.generateStory)

module.exports = router
