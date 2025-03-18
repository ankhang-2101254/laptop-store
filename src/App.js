import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import AuthPage from "./pages/AuthPage";
import Login from "./components/Login";
import Register from "./components/Register";
import CartPage from "./components/CartPage";
import WarehouseUI from "./components/WarehouseUI";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/warehouseui" element={<WarehouseUI />} />
      </Routes>
    </Router>
  );
}

export default App;
