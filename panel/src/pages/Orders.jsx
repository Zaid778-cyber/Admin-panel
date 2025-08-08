import React from "react";
import OrdersTable from "../components/OrdersTable";

export default function Orders() {
  const mockOrders = [
    { id: "ORD001", customer: "John Doe", total: 150 },
    { id: "ORD002", customer: "Jane Smith", total: 200 },
  ];

  return (
    <div>
      <h1>Orders</h1>
      <OrdersTable orders={mockOrders} />
    </div>
  );
}
