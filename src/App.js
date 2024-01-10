import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { Header, Buy, Sell, Account, Swap } from "./components/index";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Swap />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
