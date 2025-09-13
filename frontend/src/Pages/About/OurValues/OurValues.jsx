import { motion } from "framer-motion";
import { values } from "../../../Constants/OurValues";

const OurValues = () => {
    return (
        <section className="relative py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl font-heading font-bold text-center text-dark mb-12"
                >
                    Our Core Values
                </motion.h2>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="border border-primary/30 rounded-xl p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md hover:shadow-xl transition"
                        >
                            <value.icon
                                size={36}
                                className="mb-4 text-gray-500 transition-colors duration-300 group-hover:text-primary"
                            />
                            <h3 className="text-xl font-heading font-semibold text-dark mb-2">
                                {value.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                {value.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurValues;
