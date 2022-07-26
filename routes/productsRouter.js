const express = require("express");

const router = express.Router();
const path = require("path");

const controller = require("../controllers/productsController.js");


router.get("/create", controller.productsCreate);


module.exports = router;
