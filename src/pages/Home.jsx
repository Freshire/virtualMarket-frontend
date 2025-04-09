import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductModal from '../components/ProductModal';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import '../assets/styles/Home.css';

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Updated product data with reliable images
  const products = [
    {
      id: 1,
      name: 'Canva Premium',
      price: 1299,
      image: 'https://saasyto.com/wp-content/uploads/2024/08/canva-edu-pro-subscription.png',
      description: 'Access to premium templates, photos, and design tools'
    },
    {
      id: 2,
      name: 'Envato Premium',
      price: 2499,
      image: 'https://www.envato.com/static/media/elements.670875e1.png',
      description: 'Unlimited downloads of premium templates and resources'
    },
    {
      id: 3,
      name: 'ChatGPT 4',
      price: 1999,
      image: 'https://blog.routinehub.co/content/images/2023/02/openAI-chat-gpt-1.jpg',
      description: 'Advanced AI assistant with premium features and capabilities'
    }
  ];

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const showSuccessMessage = (orderId) => {
    Swal.fire({
      title: 'Payment Successful!',
      text: `Your order has been placed successfully. Order ID: ${orderId}`,
      icon: 'success',
      confirmButtonColor: '#f39c12',
      confirmButtonText: 'OK',
      timer: 5000,
      timerProgressBar: true,
      showCloseButton: true,
      customClass: {
        popup: 'swal2-popup-custom',
        title: 'swal2-title-custom',
        content: 'swal2-content-custom'
      }
    });
  };

  const showErrorMessage = (message) => {
    Swal.fire({
      title: 'Payment Failed',
      text: message || 'Please try again later.',
      icon: 'error',
      confirmButtonColor: '#e74c3c',
      confirmButtonText: 'OK',
      showCloseButton: true,
      customClass: {
        popup: 'swal2-popup-custom',
        title: 'swal2-title-custom',
        content: 'swal2-content-custom'
      }
    });
  };

  const handlePlaceOrder = async (orderDetails) => {
    try {
      // Show payment options modal
      const { value: paymentMethod } = await Swal.fire({
        title: 'Select Payment Method',
        input: 'select',
        inputOptions: {
          'card': 'Credit/Debit Card',
          'upi': 'UPI',
          'netbanking': 'Net Banking'
        },
        inputPlaceholder: 'Select a payment method',
        showCancelButton: true,
        confirmButtonColor: '#f39c12',
        cancelButtonColor: '#e74c3c',
        customClass: {
          popup: 'swal2-popup-custom',
          title: 'swal2-title-custom',
          content: 'swal2-content-custom'
        }
      });

      if (!paymentMethod) {
        throw new Error('Payment method not selected');
      }

      // Show payment processing
      Swal.fire({
        title: 'Processing Payment...',
        html: 'Please wait while we process your payment',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulate successful payment
      const orderId = `ORD${Date.now()}`;
      showSuccessMessage(orderId);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Payment error:', error);
      showErrorMessage(error.message || 'Payment failed. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div className="home">
        <div className="products-container">
          <h2 className="products-title">Featured Products</h2>
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">{product.price}</p>
                  <button 
                    className="buy-now-button"
                    onClick={() => handleBuyNow(product)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onPlaceOrder={handlePlaceOrder}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
