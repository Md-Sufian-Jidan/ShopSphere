import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { testimonials } from "../../../Constants/Testimonials";

const Testimonials = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        What Our Customers Say
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Real reviews from happy shoppers.
                    </p>
                </motion.div>

                {/* Testimonials Carousel */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center text-center relative"
                        >
                            {/* Customer Photo */}
                            <img
                                src={testimonial.photo}
                                alt={testimonial.name}
                                className="w-20 h-20 rounded-full object-cover shadow-md mb-4"
                            />

                            {/* Star Rating */}
                            <div className="flex items-center justify-center mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Comment */}
                            <p className="text-gray-700 italic mb-4">"{testimonial.comment}"</p>

                            {/* Customer Name */}
                            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
