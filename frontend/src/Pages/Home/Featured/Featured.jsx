import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categories } from "../../../Constants/Categories";

const Featured = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6 lg:px-12 text-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
                >
                    Featured Categories
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 mb-12 max-w-xl mx-auto"
                >
                    Explore our top categories and find the products you’ll love at the
                    best prices.
                </motion.p>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <Link
                                to={cat.path}
                                className={`group block rounded-2xl shadow-lg bg-gradient-to-r ${cat.color} text-white p-8 transform hover:scale-105 transition-all duration-300 relative overflow-hidden`}
                            >
                                {/* Icon */}
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6 mx-auto group-hover:bg-white/30 transition">
                                    <cat.icon size={40} />,
                                </div>
                                {/* Name */}
                                <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
                                <p className="text-sm opacity-90 group-hover:opacity-100 transition">
                                    Shop the latest in {cat.name}
                                </p>
                                {/* Hover Shine Effect */}
                                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Featured;
