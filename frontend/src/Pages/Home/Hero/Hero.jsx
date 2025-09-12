import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative w-full h-[90vh] flex items-center justify-center overflow-x-hidden my-20">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://i.ibb.co/8KnxF0L/ecommerce-hero.jpg"
                    alt="Hero Banner"
                    className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center max-w-3xl px-4"
            >
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                    Discover the Best Deals on{" "}
                    <span className="text-primary">Fashion & Electronics</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-200">
                    ShopSphere brings you exclusive discounts and latest arrivals from top brands.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/shop"
                        className="bg-primary text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-accent transition transform hover:scale-105"
                    >
                        Shop Now
                    </Link>
                    <Link
                        to="/categories"
                        className="bg-white text-gray-800 px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-100 transition transform hover:scale-105"
                    >
                        Explore Categories
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
