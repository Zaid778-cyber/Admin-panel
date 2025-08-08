import React from "react";

export default function OrdersTable({ orders }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Total ($)</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((o) => (
          <tr key={o.id}>
            <td>{o.id}</td>
            <td>{o.customer}</td>
            <td>{o.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
