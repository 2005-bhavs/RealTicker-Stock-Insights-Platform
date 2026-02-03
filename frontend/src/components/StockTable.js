import { Link } from "react-router-dom";

function StockTable({ stocks }) {

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Ticker</th>
          <th>Company</th>
          <th>Price</th>
          <th>Change %</th>
          <th>Volume</th>
        </tr>
      </thead>

      <tbody>
        {stocks.map(stock => (
          <tr key={stock.ticker}>
            <td>
              <Link to={`/stock/${stock.ticker}`}>
                {stock.ticker}
              </Link>
            </td>
            <td>{stock.company}</td>
            <td>{stock.price}</td>
            <td>{stock.change}</td>
            <td>{stock.volume}</td>
          </tr>
        ))}
      </tbody>

    </table>
  );
}

export default StockTable;
