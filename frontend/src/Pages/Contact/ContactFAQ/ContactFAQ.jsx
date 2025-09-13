import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

const faqData = [
    { question: "How do I track my order?", answer: "You can track your order using the tracking link sent to your email after purchase." },
    { question: "What is your return policy?", answer: "We offer a 30-day return policy on most products. Some exclusions may apply." },
    { question: "Do you offer international shipping?", answer: "Yes! We ship to over 50 countries worldwide. Shipping fees vary." },
    { question: "How can I contact support?", answer: "Reach us via the contact form, email support@shopsphere.com, or call +1 234 567 890." },
];

const ContactFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative py-16 px-6 lg:px-20 bg-gray-50">
            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto mb-12">
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark mb-8 text-center">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/80 backdrop-blur-md border border-primary/20 rounded-xl p-4 cursor-pointer shadow hover:shadow-lg transition"
                            onClick={() => toggleFAQ(index)}
                            layout
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-heading text-dark font-semibold">{item.question}</h3>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <HiChevronDown size={20} className="text-primary" />
                                </motion.div>
                            </div>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.p
                                        className="mt-2 text-gray-600"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {item.answer}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Closing CTA */}
            <div className="relative bg-gradient-to-r from-primary to-purple-600 text-white py-12 px-6 rounded-2xl shadow-xl text-center overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent blur-3xl opacity-20 pointer-events-none"></div>

                <h3 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
                    We’re Here to Help 🚀
                </h3>
                <p className="text-gray-100 mb-6">
                    Discover exclusive deals and shop smarter with us.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent/90 transition shadow-lg"
                >
                    Get Support
                </motion.button>
            </div>
        </section>
    );
};

export default ContactFAQ;
