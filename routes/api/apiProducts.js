const express = require('express');
const { builtinModules } = require('module');

const router = express.Router();

const apiProductsController = require ('../../controllers/api/apiProductsController')


router.get("/", apiProductsController.count);
router.get("/:id", apiProductsController.detail);

module.exports = router;

