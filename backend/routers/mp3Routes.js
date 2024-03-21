const express = require("express");

const MP3Controller = require ("../controllers/mp3");
const router = express.Router();

router.get("/", MP3Controller.getAllMP3)
router.get("/audio", MP3Controller.getMP3ByName)

module.exports = router
