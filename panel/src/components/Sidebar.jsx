import React from "react";

export default function Sidebar({ onNavigate }) {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li onClick={() => onNavigate("dashboard")}>Dashboard</li>
        <li onClick={() => onNavigate("products")}>Products</li>
        <li onClick={() => onNavigate("orders")}>Orders</li>
      </ul>
    </div>
  );
}
