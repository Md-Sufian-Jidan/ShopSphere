import { motion } from "framer-motion";
import {
    FaShoppingBag,
    FaTruck,
    FaShieldAlt,
    FaClock
} from "react-icons/fa";

const Common = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const features = [
        { Icon: FaTruck, title: "Free Delivery", desc: "On orders over $50" },
        { Icon: FaShieldAlt, title: "Secure Payment", desc: "100% protected" },
        { Icon: FaClock, title: "24/7 Support", desc: "Always here to help" },
        { Icon: FaShoppingBag, title: "Easy Returns", desc: "30-day guarantee" }
    ];

    return (
        <div>
            {/* Features Section */}
            <motion.section
                className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 py-16 mt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="text-center group"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <feature.Icon className="text-white text-xl" />
                                </div>
                                <h3 className="font-heading font-semibold text-dark mb-2">{feature.title}</h3>
                                <p className="font-body text-gray-600 text-sm">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default Common;