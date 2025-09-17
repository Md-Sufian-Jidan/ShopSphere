import { useState } from "react";
import { Bell, Menu, Search, User } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const role = 'admin';
    // Define navigation links based on role
    const navLinks = role === "admin"
        ? [
            { name: "Dashboard", href: "/dashboard/admin" },
            { name: "Orders", href: "/dashboard/admin-orders" },
            { name: "Products", href: "/dashboard/admin-products" },
            { name: "Customers", href: "/dashboard/admin-customers" },
            { name: "Settings", href: "/dashboard/admin-settings" },
            { name: "Cart", href: "/dashboard/cart" },
        ]
        : [
            { name: "Dashboard", href: "/dashboard/customer-dashboard" },
            { name: "My Orders", href: "/dashboard/customer-order" },
            { name: "Profile", href: "/dashboard/profile" },
            { name: "Cart", href: "/dashboard/cart" },
        ];

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white border-r border-gray-200 shadow-lg transition-transform duration-300 lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <Link to={'/'} className="text-xl font-bold text-primary">ShopSphere</Link>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden text-gray-500 hover:text-primary"
                    >
                        ✕
                    </button>
                </div>

                <nav className="px-4 py-6 space-y-4">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="block text-gray-700 hover:text-primary">
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex flex-1 flex-col">
                {/* Header */}
                <header className="flex items-center justify-between px-6 py-4 bg-white border-b shadow-sm">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden text-gray-600 hover:text-primary"
                        >
                            <Menu className="w-6 h-6" />
                        </button>

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
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>

                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                                <User className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-medium text-gray-700">John Doe</span>
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-6 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
