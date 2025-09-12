import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "@headlessui/react";
import useAuth from "../../Hooks/useAuth";
import LoginModal from "../Modals/LoginModal";
import RegisterModal from "../Modals/RegisterModal";
import { FaBars, FaTimes, FaUser, FaSignOutAlt, FaUserPlus, FaSignInAlt, FaChevronDown } from "react-icons/fa";
import { navLinks } from "../../Constants/NavLinks";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { user, logout } = useAuth();
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    // Close mobile menu on escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden'; // Prevent scroll
            return () => {
                document.removeEventListener('keydown', handleEscape);
                document.body.style.overflow = 'unset';
            };
        }
    }, [isOpen]);

    const slideVariants = {
        hidden: {
            x: "100%",
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        }
    };

    const staggerChildren = {
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <>
            <motion.nav
                className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled
                    ? 'backdrop-blur-xl bg-white/80 shadow-lg border-b border-white/20'
                    : 'backdrop-blur-md bg-white/30 shadow-md'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
                <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/"
                            className="text-2xl sm:text-3xl font-heading font-bold bg-gradient-to-r from-primary via-purple-600 to-secondary bg-clip-text text-transparent hover:from-purple-600 hover:to-primary transition-all duration-300"
                        >
                            ShopSphere
                        </Link>
                    </motion.div>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-8">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                            >
                                <Link
                                    to={link.path}
                                    className="relative font-body font-medium text-dark hover:text-primary transition-all duration-300 group px-2 py-1"
                                >
                                    {link.name}
                                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </Link>
                            </motion.div>
                        ))}

                        {/* User Section */}
                        {user ? (
                            <Menu as="div" className="relative">
                                <Menu.Button className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 rounded-full px-4 py-2 transition-all duration-300 border border-blue-200/50 group">
                                    <div className="relative">
                                        <img
                                            src={user.photoURL}
                                            className="w-8 h-8 rounded-full ring-2 ring-white shadow-md"
                                            alt="Profile"
                                        />
                                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                    </div>
                                    <span className="font-body font-medium text-dark max-w-24 truncate">{user.displayName}</span>
                                    <FaChevronDown className="text-gray-500 group-hover:text-primary transition-colors duration-200 text-xs" />
                                </Menu.Button>

                                <AnimatePresence>
                                    <Menu.Items
                                        as={motion.div}
                                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                        className="absolute right-0 mt-3 w-48 bg-white/95 backdrop-blur-xl shadow-xl rounded-2xl py-2 border border-gray-200/50 overflow-hidden"
                                    >
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/profile"
                                                    className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-all duration-200 ${active
                                                        ? "bg-gradient-to-r from-primary to-purple-600 text-white"
                                                        : "text-dark hover:bg-gray-50"
                                                        }`}
                                                >
                                                    <FaUser className="text-current" />
                                                    <span>Profile</span>
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <div className="border-t border-gray-200/50 my-1"></div>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    onClick={logout}
                                                    className={`w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-all duration-200 ${active
                                                        ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                                                        : "text-red-600 hover:bg-red-50"
                                                        }`}
                                                >
                                                    <FaSignOutAlt className="text-current" />
                                                    <span>Logout</span>
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </AnimatePresence>
                            </Menu>
                        ) : (
                            <div className="flex items-center space-x-3">
                                <motion.button
                                    onClick={() => setShowLogin(true)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center space-x-2 font-body font-medium px-4 py-2 text-primary hover:text-purple-600 transition-all duration-300 rounded-lg hover:bg-blue-50"
                                >
                                    <FaSignInAlt />
                                    <span>Login</span>
                                </motion.button>
                                <motion.button
                                    onClick={() => setShowRegister(true)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center space-x-2 font-body font-medium px-6 py-2.5 bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 shadow-lg shadow-blue-200/50 hover:shadow-blue-300/50"
                                >
                                    <FaUserPlus />
                                    <span>Sign Up</span>
                                </motion.button>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="lg:hidden p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 text-dark hover:from-blue-100 hover:to-purple-100 transition-all duration-300 border border-blue-200/50"
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={isOpen ? 'close' : 'open'}
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                            </motion.div>
                        </AnimatePresence>
                    </motion.button>
                </div>

                {/* Mobile Slide-in Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsOpen(false)}
                                className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                            />

                            {/* Mobile Menu */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={slideVariants}
                                className="lg:hidden fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl shadow-2xl z-50 flex flex-col"
                            >
                                <div className="p-6 flex-1 flex flex-col">
                                    {/* Close Button */}
                                    <div className="flex justify-between items-center mb-8">
                                        <h3 className="text-xl font-heading font-bold text-dark">Menu</h3>
                                        <motion.button
                                            onClick={() => setIsOpen(false)}
                                            whileHover={{ scale: 1.1, rotate: 90 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-2 rounded-full bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600 transition-all duration-200"
                                        >
                                            <FaTimes />
                                        </motion.button>
                                    </div>

                                    {/* Navigation Links */}
                                    <motion.div
                                        variants={staggerChildren}
                                        className="space-y-2 mb-6 flex-1"
                                    >
                                        {navLinks.map((link) => (
                                            <motion.div key={link.name} variants={childVariants}>
                                                <Link
                                                    to={link.path}
                                                    className="block font-body font-medium text-dark hover:text-primary transition-all duration-300 p-3 rounded-xl hover:bg-blue-50 group"
                                                    onClick={handleLinkClick}
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <span>{link.name}</span>
                                                        <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </motion.div>

                                    {/* Auth Buttons */}
                                    <motion.div variants={childVariants} className="space-y-3">
                                        {user ? (
                                            <>
                                                <Link
                                                    to="/profile"
                                                    className="flex items-center space-x-3 font-body font-medium text-dark hover:text-primary transition-all duration-300 p-3 rounded-xl hover:bg-blue-50 w-full"
                                                    onClick={handleLinkClick}
                                                >
                                                    <FaUser />
                                                    <span>Profile</span>
                                                </Link>
                                                <button
                                                    onClick={() => {
                                                        logout();
                                                        setIsOpen(false);
                                                    }}
                                                    className="flex items-center space-x-3 font-body font-medium text-red-600 hover:text-red-700 transition-all duration-300 p-3 rounded-xl hover:bg-red-50 w-full"
                                                >
                                                    <FaSignOutAlt />
                                                    <span>Logout</span>
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <motion.button
                                                    onClick={() => {
                                                        setShowLogin(true);
                                                        setIsOpen(false);
                                                    }}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="flex items-center justify-center space-x-3 font-body font-medium px-6 py-3 text-primary hover:text-purple-600 transition-all duration-300 rounded-xl hover:bg-blue-50 w-full border border-primary/20"
                                                >
                                                    <FaSignInAlt />
                                                    <span>Login</span>
                                                </motion.button>
                                                <motion.button
                                                    onClick={() => {
                                                        setShowRegister(true);
                                                        setIsOpen(false);
                                                    }}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="flex items-center justify-center space-x-3 font-body font-medium px-6 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-xl hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 shadow-lg shadow-blue-200/50 w-full"
                                                >
                                                    <FaUserPlus />
                                                    <span>Sign Up</span>
                                                </motion.button>
                                            </>
                                        )}
                                    </motion.div>
                                </div>
                            </motion.div>

                        </>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Modals */}
            <LoginModal
                isOpen={showLogin}
                onClose={() => setShowLogin(false)}
                onSwitchToRegister={() => {
                    setShowLogin(false);
                    setShowRegister(true);
                }}
            />

            <RegisterModal
                isOpen={showRegister}
                onClose={() => setShowRegister(false)}
                onSwitchToLogin={() => {
                    setShowRegister(false);
                    setShowLogin(true);
                }}
            />
        </>
    );
};

export default Navbar;