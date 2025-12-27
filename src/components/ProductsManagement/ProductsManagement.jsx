import { useState } from "react";
import ProductsForm from "./ProductsForm";
import ProductsTable from "./ProductsTable";

const ProductsManagement = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    const product = [...products, newProduct];
    setProducts(product);
  };

  return (
    <div>
      <h1>Product Management</h1>
      <ProductsForm handleAddProduct={handleAddProduct} />
      <ProductsTable products={products} />
    </div>
  );
};

export default ProductsManagement;
