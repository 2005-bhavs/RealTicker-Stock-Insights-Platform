import { Link } from "react-router-dom";

function StockTable({ stocks }) {
  //main table styles//

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontFamily: "arial, sans-serif"
  };
// table header (th)styles
  const thStyle = {
    padding: "12px",
    backgroundColor: "black",
    color: "white",
    border: "1px solid white",
    textAlign: "left"
  };
// table data(td)styles//
  const tdStyle = {
    padding: "10px",
    border: "1px solid white"
  };
//link / price styles//
  const linkStyle = {
    color: "blue",
    fontWeight: "600",
    textDecoration: "none"
  };

  return (
    <table border="1" style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Ticker</th>
          <th style={thStyle}>Company</th>
          <th style={thStyle}>Price</th>
          <th style={thStyle}>Change %</th>
          <th style={thStyle}>Volume</th>
        </tr>
      </thead>

      <tbody>
        {stocks.map(stock => (
          <tr key={stock.ticker}>
            <td style={tdStyle}>
              <Link
                to={`/stock/${stock.ticker}`}   
                style={linkStyle}
              >
                {stock.ticker}
              </Link>
            </td>
            <td style={tdStyle}>{stock.company}</td>
            <td style={tdStyle}>{stock.price}</td>
            <td style={tdStyle}>{stock.change}</td>
            <td style={tdStyle}>{stock.volume}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StockTable;
