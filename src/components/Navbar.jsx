function Navbar({ cartCount, onCartClick }) {
    return (
      <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <h1 className="text-xl font-bold">Fake Store</h1>
        <button onClick={onCartClick} className="relative">
          Cart ({cartCount})
        </button>
      </nav>
    );
  }
  
  export default Navbar;
  