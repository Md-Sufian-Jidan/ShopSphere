import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { products } from "../../../Constants/Products";

const BestSellers = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 text-center"
                >
                    Trending Products
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 mb-12 text-center max-w-xl mx-auto"
                >
                    Discover our best sellers loved by our customers.
                </motion.p>

                {/* Swiper Carousel */}
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={product.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden group relative"
                            >
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
                                    <p className="text-primary font-bold text-lg">{product.price}</p>
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default BestSellers;
