import { motion } from "framer-motion";

const NewsLetter = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="relative overflow-hidden py-20 bg-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary to-purple-600 rounded-full -translate-x-48 -translate-y-48"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary to-accent rounded-full translate-x-48 translate-y-48"></div>
            </div>

            {/* Newsletter Section */}
            <motion.div
                className="relative container mx-auto px-6 sm:px-8 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.h2
                    className="text-3xl sm:text-4xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
                    variants={itemVariants}
                >
                    Stay Updated with ShopSphere
                </motion.h2>

                <motion.p
                    className="font-body text-gray-600 mb-8 max-w-lg mx-auto"
                    variants={itemVariants}
                >
                    Subscribe to our newsletter and be the first to know about new arrivals,
                    exclusive deals, and special offers.
                </motion.p>

                <motion.form
                    className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3"
                    variants={itemVariants}
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Thank you for subscribing! 🎉");
                    }}
                >
                    <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    />
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-xl font-semibold hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 shadow-md"
                    >
                        Subscribe
                    </motion.button>
                </motion.form>
            </motion.div>
        </section>
    );
};

export default NewsLetter;
