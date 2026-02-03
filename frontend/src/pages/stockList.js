import { useEffect, useState } from "react";
import { getTopStocks } from "../services/api";
import StockTable from "../components/StockTable";
import Loading from "../components/Loading";


function StockList() {

  const [stocks, setStocks] = useState([]);


  useEffect(() => {
    getTopStocks()
      .then(res => setStocks(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Top 10 Stocks</h2>
      <StockTable stocks={stocks} />
    </div>
  );
}

export default StockList;
