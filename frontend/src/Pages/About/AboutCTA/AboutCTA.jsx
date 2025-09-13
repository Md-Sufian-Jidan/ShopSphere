import { motion } from "framer-motion";

const AboutCTA = () => {
    return (
        <section className="relative py-20 px-6">
            {/* Subtle animated glow */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary to-accent blur-3xl opacity-20"
                animate={{ opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="container mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-gradient-to-r from-primary to-purple-600 text-white py-12 px-6 text-center rounded-2xl shadow-xl max-w-3xl mx-auto"
                >
                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
                        Join ShopSphere Today 🚀
                    </h2>

                    {/* Paragraph */}
                    <p className="text-lg sm:text-xl font-body mb-8 text-light/90">
                        Discover exclusive deals and shop smarter with us.
                    </p>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-accent text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-accent/90 transition"
                    >
                        Get Started
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutCTA;
