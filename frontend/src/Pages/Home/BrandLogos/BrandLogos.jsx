import { motion } from "framer-motion";
import { brands } from "../../../Constants/BrandLogos";

const BrandLogos = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-extrabold text-gray-900">
                        Trusted by Top Brands
                    </h2>
                    <p className="text-gray-600 mt-2">
                        We partner with leading global brands to bring you the best products.
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-wrap justify-center items-center gap-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.15 } },
                    }}
                >
                    {brands.map((brand) => (
                        <motion.div
                            key={brand.id}
                            className="w-32 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="max-h-12 object-contain"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default BrandLogos;
