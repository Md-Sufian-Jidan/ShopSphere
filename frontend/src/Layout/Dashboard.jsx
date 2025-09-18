import { useState } from "react";
import { Bell, Menu, Search, User, Home, Package, ShoppingCart, Users, Settings, LogOut } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useAuth from "../Hooks/useAuth";

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const role = "user";
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    const navLinks = role === "admin"
        ? [
            { name: "Dashboard", to: "admin", icon: Home },
            { name: "Manage Customers", to: "manage-customers", icon: Users },
            { name: "Products", to: "admin-products", icon: Package },
            { name: "Approve Orders", to: "admin-orders", icon: Package },
            { name: "Settings", to: "admin-settings", icon: Settings },
            { name: "Cart", to: "cart", icon: ShoppingCart },
            { name: "Edit Profile", to: "profile", icon: User },
        ]
        : [
            { name: "Edit Profile", to: "profile", icon: User },
            { name: "My Orders", to: "customer-order", icon: Package },
            { name: "Dashboard", to: "customer-dashboard", icon: Home },
            { name: "Cart", to: "cart", icon: ShoppingCart },
        ];

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-light font-body">
            {/* Mobile Header */}
            <div className="md:hidden bg-white shadow-md px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-xl font-heading text-primary">ShopSphere</Link>
                <button onClick={() => setSidebarOpen(true)} className="text-primary">
                    <Menu size={24} />
                </button>
            </div>

            {/* Sidebar */}
            <AnimatePresence>
                {(sidebarOpen || (typeof window !== "undefined" && window.innerWidth >= 768)) && (
                    <motion.aside
                        initial={{ x: -250 }}
                        animate={{ x: 0 }}
                        exit={{ x: -300 }}
                        transition={{ duration: 0.3 }}
                        className="w-64 bg-white shadow-lg md:static fixed z-50 top-0 left-0 h-[100vh] p-6 rounded-r-2xl"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <Link to="/" className="text-2xl font-heading text-primary block">ShopSphere</Link>
                            <button onClick={() => setSidebarOpen(false)} className="md:hidden text-gray-500 hover:text-primary">
                                ✕
                            </button>
                        </div>

                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link) => {
                                const IconComponent = link.icon;
                                return (
                                    <NavLink
                                        key={link.to}
                                        to={link.to}
                                        className={({ isActive }) =>
                                            `flex items-center gap-3 px-4 py-2 rounded-2xl transition-colors duration-200 text-sm ${isActive
                                                ? "bg-accent/10 text-primary font-semibold"
                                                : "text-dark/70 hover:bg-light hover:text-primary"}`
                                        }
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <IconComponent className="w-5 h-5" />
                                        <span>{link.name}</span>
                                    </NavLink>
                                );
                            })}
                        </nav>

                        <button
                            onClick={handleLogout}
                            className="mt-8 flex items-center gap-2 text-sm text-rose-600 hover:text-primary transition"
                        >
                            <LogOut size={18} /> Logout
                        </button>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="hidden md:flex items-center justify-between px-6 py-4 bg-white border-b shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="relative w-64">
                            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full pl-10 pr-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative text-gray-600 hover:text-primary">
                            <Bell className="w-6 h-6" />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full"></span>
                        </button>

                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                                <User className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-medium text-dark">John Doe</span>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 p-6 overflow-y-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="rounded-2xl bg-white shadow p-4 md:p-6"
                    >
                        <Outlet />
                    </motion.div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;