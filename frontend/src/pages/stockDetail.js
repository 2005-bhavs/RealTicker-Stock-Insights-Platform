import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStockHistory } from "../services/api";
import StockChart from "../components/StockChart";

function StockDetail() {

  const { ticker } = useParams();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getStockHistory(ticker)
      .then(res => setHistory(res.data))
      .catch(err => console.log(err));
  }, [ticker]);

  return (
    <div>
      <h2>{ticker} Stock History</h2>
      <StockChart data={history} />
    </div>
  );
}

export default StockDetail;
