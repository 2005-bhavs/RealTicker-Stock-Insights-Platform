import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

function StockChart({ data }) {

  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="price" />
    </LineChart>
  );
}

export default StockChart;
