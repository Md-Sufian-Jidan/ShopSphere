import { motion } from "framer-motion";
import { contactInfo } from "../../../Constants/ContactInfo";

const ContactInfo = () => {

    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {contactInfo.map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="bg-white/80 backdrop-blur-md border border-primary/20 rounded-xl p-6 shadow transition-all hover:shadow-lg"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 text-gray-500 hover:text-primary transition-colors">

                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-heading font-semibold text-dark mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 font-body">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ContactInfo;
