import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StockList from "./pages/stockList";
import StockDetail from "./pages/stockDetail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StockList />} />
        <Route path="/stock/:ticker" element={<StockDetail />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
