const express = require("express");
const getCardsLength = require("../controllers/Length");
const router = require("express").Router();

router.get("/card", getCardsLength);

module.exports = router;
