function CartModal({ cartItems, onClose, onRemoveFromCart }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white w-3/4 md:w-1/2 lg:w-1/3 p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center mb-4">
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p>${item.price}</p>
                  </div>
                  <button
                    onClick={() => onRemoveFromCart(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    );
  }
  
  export default CartModal;
  