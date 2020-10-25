const express = require("express");
const router = express.Router();
const animeController = require("../controllers/animeController");

router.post("/anime/add", animeController.add);
router.post("/anime/modify", animeController.modify);
router.post("/anime/delete", animeController.delete);

module.exports = router;