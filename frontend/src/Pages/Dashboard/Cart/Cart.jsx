import React, { useState } from "react";
import { Trash2, Plus, Minus } from "lucide-react";

const Cart = () => {
    // Dummy cart data
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Wireless Headphones",
            price: 120,
            quantity: 1,
            image:
                "https://dummyimage.com/100x100/2563eb/ffffff&text=🎧",
        },
        {
            id: 2,
            name: "Smart Watch",
            price: 80,
            quantity: 2,
            image:
                "https://dummyimage.com/100x100/facc15/111827&text=⌚",
        },
    ]);

    // Quantity Handlers
    const increaseQty = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQty = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    // Subtotal & Total
    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const shipping = subtotal > 100 ? 0 : 10;
    const total = subtotal + shipping;

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-heading font-bold mb-6">
                Your Cart 🛒
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md border border-gray-200"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 rounded-lg object-cover"
                                />
                                <div className="flex-1">
                                    <h2 className="font-semibold text-dark">
                                        {item.name}
                                    </h2>
                                    <p className="text-gray-500">
                                        ${item.price.toFixed(2)}
                                    </p>
                                    <div className="flex items-center mt-2">
                                        <button
                                            onClick={() => decreaseQty(item.id)}
                                            className="p-1 border rounded-lg hover:bg-gray-100"
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="px-3">{item.quantity}</span>
                                        <button
                                            onClick={() => increaseQty(item.id)}
                                            className="p-1 border rounded-lg hover:bg-gray-100"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </div>
                                <p className="font-semibold text-dark">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">Your cart is empty.</p>
                    )}
                </div>

                {/* Summary */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 h-fit">
                    <h2 className="text-xl font-heading font-semibold mb-4">
                        Order Summary
                    </h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>
                            {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                        </span>
                    </div>
                    <div className="flex justify-between font-bold text-lg border-t pt-2">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <button className="mt-6 w-full bg-accent text-white py-3 rounded-xl font-semibold hover:bg-accent/90 transition">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
