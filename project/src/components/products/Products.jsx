import React from 'react';
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import "./Products.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/Cartslice';

const Products = ({ items, heading }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Updated function to send data to MongoDB & Redux
  const handleAddToCart = async (item) => {
    console.log("Clicked Add to Cart:", item); // ✅ Debugging Step

    try {
      const response = await fetch("http://localhost:8080/auth/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product: item.title, // Ensure this matches your backend schema
          price: item.price,
          quantity: 1, // Default quantity is 1
          image: item.img,
        }),
      });

      const data = await response.json();
      console.log("Response from backend:", data); // ✅ Debugging Step

      if (response.ok) {
        dispatch(addToCart(item)); // ✅ Update Redux only if MongoDB saves data
        alert("Product added to cart successfully!");
      } else {
        alert("Failed to add product: " + data.error);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Something went wrong!");
    }
  };

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <h1 className="heading">{heading}</h1>
      <div className="products-container">
        {items.map((item) => (
          <div key={item.id} className='product-container'>
            <img src={item.img} alt="" className='product-image' />
            <div className="product-desc">
              <h3>{item.title}</h3>
              <span>${item.price}</span>
            </div>
            <div className='product-info'>
              <button className='icon' onClick={() => handleAddToCart(item)}>
                <CiShoppingCart /> Add To Cart
              </button>
              <button className="icon" onClick={() => handleViewDetails(item.id)}>
                <CiSearch /> View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
