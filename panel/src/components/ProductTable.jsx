import React from "react";

export default function ProductTable({ products, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price ($)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 ? (
          products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>
                <button onClick={() => onEdit(p)}>Edit</button>
                <button onClick={() => onDelete(p.id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr><td colSpan="3">No products found</td></tr>
        )}
      </tbody>
    </table>
  );
}
