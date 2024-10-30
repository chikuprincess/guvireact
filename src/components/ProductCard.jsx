import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="border p-4 flex flex-col items-center">
      <img src={product.image} alt={product.title} className="w-32 h-32 object-contain mb-4" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-green-600 font-bold">${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

// Define PropTypes for validation
ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;
