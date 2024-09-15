const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET popular products (limit to 3)
router.get('/products/popular', async (req, res) => {
  try {
    const products = await Product.find({ popular: true }).limit(3);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  
});


// GET popular products (limit to 3)
router.get('/products/popular-beverages', async (req, res) => {
  try {
    const products = await Product.find({ category: "Beverages", popular: true }).limit(3);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  
});



// GET dishes 
router.get('/products/dishes', async (req, res) => {
  try {
    const products = await Product.find({ category: "Dishes"});
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  
});

// GET Discount Product
router.get('/products/offered', async (req, res) => {
  try {
    // Modify the query to include eligible: true
    const products = await Product.find({ category: "Dishes", eligible: true });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// GET beverages
router.get('/products/beverages', async (req, res) => {
  try {
    const products = await Product.find({ category: "Beverages"});
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  
});


// Get product details by ID
router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});



// Get similar products by category
router.get('/similar/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      console.log('Product not found with ID:', req.params.id);
      return res.status(404).json({ message: 'Product not found' });
    }

    // Fetching similar products in the same category
    const similarProducts = await Product.find({
      category: product.category,
      _id: { $ne: product._id }, // Exclude the current product
    }).limit(3);

    console.log('Similar products found:', similarProducts);

    res.json(similarProducts);
  } catch (error) {
    console.error('Error fetching similar products:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});



// Search route
router.get('/search', async (req, res) => {
  const searchQuery = req.query.q || ''; // Using 'q' for the query parameter

  if (!searchQuery) {
    return res.status(400).json({ message: 'Search query is required' });
  }

  try {
    // Create a case-insensitive regular expression for the 'title' field
    const regex = new RegExp(searchQuery, 'i');
    const products = await Product.find({ title: { $regex: regex } }); // Search the 'title' field

    res.json(products);
  } catch (error) {
    console.error('Error fetching search results:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});



// Route to handle adding a new product
router.post('/products/addproduct', async (req, res) => {
  const {
    title,
    image_path,
    price,
    description,
    quantity,
    category,
    popular,
    eligible
  } = req.body;

  try {
    // Create a new product instance with the provided data
    const newProduct = new Product({
      title,
      image_path,
      price,
      description,
      quantity,
      category,
      popular,
      eligible
    });

    // Save the new product to the database
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully!', product: newProduct });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Failed to add product. Please try again.' });
  }
});



module.exports = router;
