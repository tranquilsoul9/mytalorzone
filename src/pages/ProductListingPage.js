import React, { useEffect, useState } from 'react';

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/products') // Or the correct API URL
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data); // Check if data is logged correctly
        setProducts(data);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);
  

  return (
    <div>
      <h1>Our Products</h1>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-item">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default ProductListingPage;
