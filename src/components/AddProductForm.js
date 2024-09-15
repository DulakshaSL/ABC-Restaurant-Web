// src/components/AddProductForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './form.css';

const AddProductForm = () => {
  const [product, setProduct] = useState({
    title: '',
    image_path: '',
    price: '',
    description: '',
    quantity: '',
    category: '',
    popular: false,
    eligible: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/products/addproduct', product); // Adjust endpoint as needed
      alert('Product added successfully!');
      setProduct({
        title: '',
        image_path: '',
        price: '',
        description: '',
        quantity: '',
        category: '',
        popular: false,
        eligible: false,
      });
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product. ' + (error.response && error.response.data ? error.response.data.error : error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <h2>Add Product</h2>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Image Path:
        <input
          type="text"
          name="image_path"
          value={product.image_path}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Quantity:
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Popular:
        <input
          type="checkbox"
          name="popular"
          checked={product.popular}
          onChange={handleChange}
        />
      </label>
      <label>
        Eligible:
        <input
          type="checkbox"
          name="eligible"
          checked={product.eligible}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
