const ProductsTable = ({ products }) => {
  return (
    <div>
      <h1>Products: {products?.length}</h1>
      <table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>No</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product?.name}</td>
              <td>{product?.quantity}</td>
              <td>{product?.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
