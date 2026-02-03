const stockService = require("../services/stockService");

const getTop10Stocks = (req, res) => {
  const stocks = stockService.getTop10Stocks();
  res.json(stocks);
};

const getStockHistory = (req, res) => {
  const ticker = req.params.ticker;

  const history = stockService.getStockHistory(ticker);

  if (!history) {
    return res.status(404).json({ message: "Stock not found" });
  }

  res.json(history);
};

module.exports = {
  getTop10Stocks,
  getStockHistory
};
