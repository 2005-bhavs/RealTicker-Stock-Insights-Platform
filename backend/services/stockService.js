const stocks = require("../data/stocks.json");

const getTop10Stocks = () => {
  return stocks
    .sort((a, b) => b.volume - a.volume)
    .slice(0, 10);
};

const getStockHistory = (ticker) => {
  const stock = stocks.find(
    s => s.ticker === ticker
  );

  return stock ? stock.history : null;
};

module.exports = {
  getTop10Stocks,
  getStockHistory
};
