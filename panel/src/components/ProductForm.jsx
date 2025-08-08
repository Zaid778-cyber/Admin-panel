import React, { useState, useEffect } from "react";

export default function ProductForm({ onSave, editingProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setPrice(editingProduct.price);
    }
  }, [editingProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return;
    onSave({ id: editingProduct?.id || Date.now(), name, price });
    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">{editingProduct ? "Update" : "Add"}</button>
    </form>
  );
}
