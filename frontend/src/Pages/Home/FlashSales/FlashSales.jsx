import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaTag } from "react-icons/fa";
import { flashDeals } from "../../../Constants/FlashDeals";

const FlashSales = () => {
    const [timeLeft, setTimeLeft] = useState({
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        const countdown = () => {
            const now = new Date();
            const endTime = new Date();
            endTime.setHours(endTime.getHours() + 2); // Flash sale ends in 2 hours
            const diff = endTime - now;

            if (diff <= 0) {
                setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
            } else {
                const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
                const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
                const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");
                setTimeLeft({ hours, minutes, seconds });
            }
        };

        const interval = setInterval(countdown, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        Flash Deals
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Hurry up! Limited time offers ending soon.
                    </p>
                    <div className="mt-4 text-xl font-mono text-red-600">
                        {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
                    </div>
                </motion.div>

                {/* Deals Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {flashDeals.map((deal, index) => (
                        <motion.div
                            key={deal.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden group relative"
                        >
                            {/* Discount Badge */}
                            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold">
                                <FaTag />
                                {deal.discount} OFF
                            </div>

                            {/* Product Image */}
                            <Link to={deal.path}>
                                <div className="relative w-full h-64 overflow-hidden">
                                    <img
                                        src={deal.image}
                                        alt={deal.name}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                            </Link>

                            {/* Product Info */}
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {deal.name}
                                </h3>
                                <p className="text-red-600 font-bold text-lg">{deal.price}</p>
                            </div>

                            {/* Add to Cart Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="absolute bottom-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:from-red-600 hover:to-pink-600 transition-all duration-300"
                                aria-label="Add to Cart"
                            >
                                <FaShoppingCart />
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FlashSales;
