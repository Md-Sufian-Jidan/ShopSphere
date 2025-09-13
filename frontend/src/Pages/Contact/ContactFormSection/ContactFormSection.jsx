import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as z from "zod";

const ContactFormSection = () => {
    const initialValues = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    const validationSchema = z.object({
        name: z.string().min(2, "Name is required"),
        email: z.string().email("Invalid email"),
        subject: z.string().min(2, "Subject is required"),
        message: z.string().min(5, "Message is required"),
    });

    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm();
        alert("Message sent!");
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Contact Form */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                >
                    <h2 className="text-3xl font-heading font-bold text-dark mb-4">
                        Send Us a Message
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Have questions, feedback, or want to collaborate? Fill out the form below and we’ll get back to you promptly.
                    </p>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="flex flex-col gap-4">
                                <Field
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="rounded-xl border border-primary/30 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none transition"
                                />
                                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />

                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="rounded-xl border border-primary/30 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none transition"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

                                <Field
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    className="rounded-xl border border-primary/30 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none transition"
                                />
                                <ErrorMessage name="subject" component="div" className="text-red-500 text-sm" />

                                <Field
                                    as="textarea"
                                    name="message"
                                    placeholder="Your Message"
                                    rows="5"
                                    className="rounded-xl border border-primary/30 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none transition resize-none"
                                />
                                <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent/90 transition mt-2 shadow-lg"
                                >
                                    Send Message
                                </motion.button>
                            </Form>
                        )}
                    </Formik>
                </motion.div>

                {/* Google Map */}
                <motion.div
                    className="relative overflow-hidden rounded-xl shadow-xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 pointer-events-none rounded-xl"></div>

                    <iframe
                        title="ShopSphere Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0198047843956!2d-122.41941518468116!3d37.77492977975991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b7f62f0a9%3A0x4a9c3796f6b8f5cf!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1694520000000!5m2!1sen!2sus"
                        className="w-full h-full min-h-[480px] rounded-xl border-0"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactFormSection;
