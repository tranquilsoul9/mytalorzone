import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomePage.css'; // Importing the new CSS file for styling

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(''); // Track the selected category

  // Fetch all products
  const fetchProducts = () => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };

  // Fetch products by category
  const fetchProductsByCategory = (category) => {
    axios.get(`http://localhost:5000/api/products?category=${category}`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products by category:', error);
      });
  };
 // Fetch all products when the component mounts or when category changes
  useEffect(() => {
    if (category === '') {
      fetchProducts(); // Fetch all products if no category is selected
    } else {
      fetchProductsByCategory(category); // Fetch products based on category
    }
  }, [category]); // Dependency array ensures fetching happens when category changes


  // Trigger category filter when a category is clicked
  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  return (
    <div>
      {/* Top Navbar */}
      <div className="top-navbar">
        <div className="search-container">
          <input type="text" placeholder="Search products..." />
        </div>
        <h1 className="brand-name">MYTALORZONE</h1>
        <div className="user-actions">
          <a href="/cart">Cart</a>
          <a href="/complaints">Complaints</a>
          <a href="/login">Profile</a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-navbar">
        <button onClick={() => handleCategoryClick('Best Sellers')}>Bestseller</button>
        <button onClick={() => handleCategoryClick('Ethnic Wear')}>Ethnic Wear</button>
        <button onClick={() => handleCategoryClick('Tops & Shirts')}>Tops & Shirts</button>
        <button onClick={() => handleCategoryClick('Winter Wear')}>Winter Wear</button>
      </div>

      {/* Bestsellers Section */}
      <div className="bestsellers">
        <h2>{category ? `${category} Products` : 'All Products'}</h2>
        <div className="product-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="product-item">
                 <img src={`http://localhost:5000/images/${product.image}`} alt={product.name} />

                <p>{product.name}</p>
                <p>Price: ₹{product.price}</p>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
