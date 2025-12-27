const ProductsForm = () => {
  const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const quantity = e.target.quantity.value;
    const price = e.target.price.value;
    const newProduct = { name, quantity, price };
    console.log(newProduct);
  };
  return (
    <form onSubmit={handleProductSubmit}>
      <input type="text" name="name" placeholder="Product Name" />
      <br />
      <input type="text" name="quantity" placeholder="Product Quantity" />
      <br />
      <input type="text" name="price" placeholder="Product Price" />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ProductsForm;
