import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { newProducts } from "../../../Constants/NewArrivals";

const NewArrivals = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        New Arrivals
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Discover the latest products added to our store.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {newProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden group relative"
                        >
                            {/* New Badge */}
                            <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                                <FaStar />
                                New
                            </div>

                            {/* Product Image */}
                            <Link to={product.path}>
                                <div className="relative w-full h-64 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                            </Link>

                            {/* Product Info */}
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {product.name}
                                </h3>
                                <p className="text-gray-800 font-bold text-lg">{product.price}</p>
                            </div>

                            {/* Add to Cart Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
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

export default NewArrivals;
