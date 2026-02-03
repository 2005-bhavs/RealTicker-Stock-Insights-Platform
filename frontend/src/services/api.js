import axios from "axios";

const BASE_URL = "http://localhost:5000/api/stocks";

export const getTopStocks = () => {
  return axios.get(`${BASE_URL}/top10`);
};

export const getStockHistory = (ticker) => {
  return axios.get(`${BASE_URL}/${ticker}/history`);
};
