import React, { useContext } from "react";
import { cartContext } from "../context/shoppingCart";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

const Cart = () => {
  const { cart, deleteFromCart, clearCart } = useContext(cartContext);
  // ^ add removeFromCart & clearCart in your context for full functionality

  // Calculate total
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <section className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
          <Link to="/" className="hover:underline flex items-center gap-1">
            <ArrowLeft size={16} />
            Home
          </Link>
          <span>/</span>
          <span className="font-semibold text-gray-800">Cart</span>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h2>

        {cart.length === 0 ? (
          <div className="bg-white p-10 rounded-xl shadow text-center">
            <p className="text-gray-600">Your cart is empty.</p>
            <Link
              to="/products"
              className="inline-block mt-4 px-6 py-2 bg-primary text-black rounded-lg hover:bg-primary/90 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow flex gap-4 p-4 items-center"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-24 w-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-primary font-bold">
                        ${item.price}
                      </span>
                      <button
                        onClick={() => deleteFromCart(item.id)}
                        className="text-red-500 text-sm hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart summary */}
            <div className="bg-white rounded-xl shadow p-6 h-fit">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Summary
              </h3>
              <div className="flex justify-between mb-2 text-gray-600">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4 text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold text-gray-800 text-lg">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full mt-6 px-6 py-3 bg-black cursor-pointer text-white rounded-lg hover:bg-black/50 transition">
                Proceed to Checkout
              </button>
              <button
                onClick={clearCart}
                className="cursor-pointer w-full mt-3 px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-sm"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
