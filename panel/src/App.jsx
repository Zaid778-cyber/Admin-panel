import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import "./styles.css";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="container">
      <Sidebar onNavigate={setPage} />
      <div className="main">
        {page === "dashboard" && <Dashboard />}
        {page === "products" && <Products />}
        {page === "orders" && <Orders />}
      </div>
    </div>
  );
}
