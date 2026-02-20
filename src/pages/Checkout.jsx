import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    alert("Order placed successfully 🎉");

    setCartItems([]);
    localStorage.removeItem("cartItems");

    navigate("/");
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">Your cart is empty 🛒</h2>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10">

        {/* Order Summary */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>

          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-4">
              <span>
                {item.title} × {item.quantity}
              </span>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}

          <hr className="my-4" />

          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>
        </div>

        {/* Checkout Form */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-bold mb-6">Shipping Details</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handlePlaceOrder();
            }}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Full Name"
              required
              className="border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Email"
              required
              className="border p-3 rounded-lg"
            />

            <input
              type="text"
              placeholder="Address"
              required
              className="border p-3 rounded-lg"
            />

            <button
              type="submit"
              className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Place Order
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
