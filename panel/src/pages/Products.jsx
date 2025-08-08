import React, { useState, useEffect } from "react";
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";

export default function Products() {
  const [products, setProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("products")) || [];
  });
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleSave = (product) => {
    if (editingProduct) {
      setProducts(products.map((p) => (p.id === product.id ? product : p)));
      setEditingProduct(null);
    } else {
      setProducts([...products, product]);
    }
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h1>Manage Products</h1>
      <ProductForm onSave={handleSave} editingProduct={editingProduct} />
      <ProductTable
        products={products}
        onEdit={setEditingProduct}
        onDelete={handleDelete}
      />
    </div>
  );
}
