const express = require("express");
const { builtinModules } = require("module");

const router = express.Router();

const apiProductsController = require("../../controllers/api/apiProductsController");

router.get("/", apiProductsController.count);
router.get("/product/:id", apiProductsController.detail);
router.post("/product",apiProductsController.create)
router.put("/product/:id", apiProductsController.update);
router.delete("/product/:id",apiProductsController.delete)


module.exports = router;
