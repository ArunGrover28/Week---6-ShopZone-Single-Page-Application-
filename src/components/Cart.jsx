import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
export default function Cart() {
    
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalPrice,
  } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <h2 className="text-xl font-semibold">Your cart is empty 🛒</h2>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 bg-white shadow-md rounded-lg p-4"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-cover rounded"
              />

              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-500">${item.price}</p>

                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 font-semibold"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white shadow-md rounded-lg p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2">
            <span>Total Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Total Price</span>
            <span className="font-bold">${totalPrice}</span>
          </div>

          <Link to = "/checkout">
             <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
            Checkout
          </button>
          </Link>

         
        </div>
      </div>
    </section>
  );
}
