import { motion } from "framer-motion";

const MissionVision = () => {
    return (
        <section className="relative py-20">
            <div className="container mx-auto px-6 py-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white dark:bg-gray-900">
                {/* Left Column - Text */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Mission */}
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                        Our Mission
                    </h2>
                    <p className="font-body text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                        At <span className="font-semibold text-primary">ShopSphere</span>, our mission is
                        to connect people with products that truly enhance their lives. We
                        are committed to making online shopping seamless, affordable, and
                        enjoyable for everyone, everywhere.
                    </p>

                    {/* Vision */}
                    <h3 className="text-2xl font-semibold text-primary mb-3">Our Vision</h3>
                    <p className="font-body text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        We envision a world where shopping is not limited by location or
                        access. Our goal is to become a trusted global marketplace where
                        customers can explore, discover, and enjoy the best deals while
                        building lasting connections with brands.
                    </p>
                </motion.div>

                {/* Right Column - Image */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <img
                        src="https://images.unsplash.com/photo-1515165562835-c4c3b2f3b5b4?auto=format&fit=crop&w=1000&q=80"
                        alt="ShopSphere Mission"
                        className="rounded-xl shadow-lg border border-primary/20 transform transition-transform duration-500 hover:scale-105"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default MissionVision;
