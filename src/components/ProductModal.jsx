import React from 'react';
import '../assets/styles/ProductModal.css';

const ProductModal = ({ product, isOpen, onClose, onPlaceOrder }) => {
  if (!isOpen || !product) return null;

  const handlePlaceOrder = () => {
    onPlaceOrder({
      product,
      userDetails: {
        name: 'Demo User',
        email: 'demo@example.com'
      }
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2>{product.name}</h2>
          <p className="modal-price">₹{product.price}</p>
        </div>

        <div className="modal-body">
          <div className="product-image-container">
            <img src={product.image} alt={product.name} className="product-image" />
          </div>
          
          <div className="product-details">
            <h3>Product Details</h3>
            <p>{product.description}</p>
            
            <div className="product-specs">
              <div className="spec-item">
                <span className="spec-label">Type:</span>
                <span className="spec-value">Digital Subscription</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Duration:</span>
                <span className="spec-value">1 Year</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Auto-renewal:</span>
                <span className="spec-value">Yes</span>
              </div>
            </div>
          </div>

          <div className="user-details">
            <h3>User Information</h3>
            <div className="user-info">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">Demo User</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">demo@example.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="place-order-button" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal; 