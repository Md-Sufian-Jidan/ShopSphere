import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaArrowUp,
    FaHeart,
    FaShoppingBag,
    FaTruck,
    FaShieldAlt,
    FaClock
} from "react-icons/fa";
import { navLinks } from "../../Constants/NavLinks";
import { useState, useEffect } from "react";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show scroll to top button when user scrolls down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

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

    const socialIcons = [
        { Icon: FaFacebook, url: "https://facebook.com", color: "hover:text-blue-500" },
        { Icon: FaTwitter, url: "https://twitter.com", color: "hover:text-blue-400" },
        { Icon: FaInstagram, url: "https://instagram.com", color: "hover:text-pink-500" },
        { Icon: FaLinkedin, url: "https://linkedin.com", color: "hover:text-blue-600" }
    ];

    return (
        <>
            {/* Main Footer */}
            <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-light overflow-hidden">

                <div className="relative z-10">

                    {/* Main Footer Content */}
                    <motion.div
                        className="py-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        <div className="container mx-auto px-4 sm:px-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                                {/* Company Info */}
                                <motion.div variants={itemVariants} className="lg:col-span-1">
                                    <div className="mb-6">
                                        <h2 className="text-3xl font-heading font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent mb-4">
                                            ShopSphere
                                        </h2>
                                        <p className="font-body text-gray-300 leading-relaxed mb-6">
                                            Your premier destination for quality products, exceptional service, and unbeatable prices. Join millions of satisfied customers worldwide.
                                        </p>

                                        {/* Contact Info */}
                                        <div className="space-y-3 text-sm">
                                            <div className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors duration-300">
                                                <FaMapMarkerAlt className="text-primary flex-shrink-0" />
                                                <span>123 Commerce Street, Dhaka, Bangladesh</span>
                                            </div>
                                            <div className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors duration-300">
                                                <FaPhone className="text-primary flex-shrink-0" />
                                                <span>+880 123 456 789</span>
                                            </div>
                                            <div className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors duration-300">
                                                <FaEnvelope className="text-primary flex-shrink-0" />
                                                <span>info@shopsphere.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Quick Links */}
                                <motion.div variants={itemVariants}>
                                    <h3 className="text-xl font-heading font-semibold mb-6 text-white">Quick Links</h3>
                                    <ul className="space-y-3 font-body">
                                        {navLinks.map((link) => (
                                            <li key={link.name}>
                                                <Link
                                                    to={link.path}
                                                    className="text-gray-300 hover:text-primary transition-all duration-300 flex items-center group"
                                                >
                                                    <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></span>
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* Customer Service */}
                                <motion.div variants={itemVariants}>
                                    <h3 className="text-xl font-heading font-semibold mb-6 text-white">Customer Service</h3>
                                    <ul className="space-y-3 font-body">
                                        {[
                                            'Help Center',
                                            'Track Your Order',
                                            'Shipping Info',
                                            'Returns & Exchanges',
                                            'Size Guide',
                                            'Gift Cards'
                                        ].map((item) => (
                                            <li key={item}>
                                                <Link
                                                    to="#"
                                                    className="text-gray-300 hover:text-primary transition-all duration-300 flex items-center group"
                                                >
                                                    <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></span>
                                                    {item}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* Social Media & Map */}
                                <motion.div variants={itemVariants}>
                                    <h3 className="text-xl font-heading font-semibold mb-6 text-white">Connect With Us</h3>

                                    {/* Social Icons */}
                                    <div className="flex space-x-4 mb-6">
                                        {socialIcons.map(({ Icon, url, color }, index) => (
                                            <motion.a
                                                key={index}
                                                href={url}
                                                target="_blank"
                                                rel="noreferrer"
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={`w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full flex items-center justify-center text-gray-300 ${color} transition-all duration-300 shadow-lg hover:shadow-primary/25`}
                                            >
                                                <Icon size={20} />
                                            </motion.a>
                                        ))}
                                    </div>

                                    {/* Map */}
                                    <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-600/50">
                                        <iframe
                                            title="ShopSphere Location"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.185325841904!2d90.41251831543146!3d23.81033199225814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b6b6e7f1a9%3A0x76b5ad233b0b9a3!2sDhaka!5e0!3m2!1sen!2sbd!4v1695123456789"
                                            width="100%"
                                            height="200"
                                            allowFullScreen=""
                                            loading="lazy"
                                            className="w-full filter brightness-75 hover:brightness-100 transition-all duration-300"
                                        ></iframe>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Footer */}
                    <motion.div
                        className="border-t border-gray-700/50 py-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={itemVariants}
                    >
                        <div className="container mx-auto px-4 sm:px-6">
                            <div className="flex flex-col lg:flex-row lg:justify-between items-center space-y-4 lg:space-y-0">
                                {/* Legal Links */}
                                <div className="flex flex-wrap justify-center lg:justify-start space-x-6 text-sm font-body">
                                    {[
                                        { text: 'Privacy Policy', path: '/privacy-policy' },
                                        { text: 'Terms & Conditions', path: '/terms' },
                                        { text: 'Cookie Policy', path: '/cookies' },
                                        { text: 'Accessibility', path: '/accessibility' }
                                    ].map((link) => (
                                        <Link
                                            key={link.text}
                                            to={link.path}
                                            className="text-gray-400 hover:text-primary transition-colors duration-300"
                                        >
                                            {link.text}
                                        </Link>
                                    ))}
                                </div>

                                {/* Copyright */}
                                <div className="text-center lg:text-right">
                                    <p className="text-gray-400 text-sm font-body flex items-center justify-center lg:justify-end">
                                        © {new Date().getFullYear()} ShopSphere. Made with
                                        <FaHeart className="text-red-500 mx-1 animate-pulse" />
                                        by <span className="text-primary font-semibold ml-1">Md Abu Sufian</span>. All rights reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </footer>

            {/* Scroll to Top Button */}
            <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isVisible ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300"
                style={{ display: isVisible ? 'flex' : 'none' }}
            >
                <FaArrowUp />
            </motion.button>
        </>
    );
};

export default Footer;