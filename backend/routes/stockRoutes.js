const express = require("express");
const router = express.Router();

const stockController = require("../controllers/stockController");

router.get("/top10", stockController.getTop10Stocks);
router.get("/:ticker/history", stockController.getStockHistory);

module.exports = router;
