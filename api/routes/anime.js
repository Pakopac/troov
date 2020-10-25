const express = require("express");
const router = express.Router();
const animeController = require("../controllers/animeController");

router.post("/anime/add", animeController.add);

module.exports = router;