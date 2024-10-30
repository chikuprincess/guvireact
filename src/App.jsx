import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';


function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Fetch products
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // Add item to cart
  const addToCart = (product) => {
    const isItemInCart = cartItems.some(item => item.id === product.id);
    if (isItemInCart) {
      alert('Item already added to the cart');
      return;
    }
    setCartItems([...cartItems, product]);
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <div className="App">
      <Navbar cartCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />
      <ProductList products={products} onAddToCart={addToCart} />
      {isCartOpen && (
        <CartModal
          cartItems={cartItems}
          onClose={() => setIsCartOpen(false)}
          onRemoveFromCart={removeFromCart}
        />
      )}
    </div>
  );
}

export default App;
