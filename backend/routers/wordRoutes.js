
const express = require("express");
const WordController = require("../controllers/words");
const router = express.Router();

router.get("/:id", WordController.getWordByUserID);
router.get("/search", WordController.search);
router.put("/:id", WordController.updateWord);
router.get("/", WordController.getAllWords);

module.exports = router
