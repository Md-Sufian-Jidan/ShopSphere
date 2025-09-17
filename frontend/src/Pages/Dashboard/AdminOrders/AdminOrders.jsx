import { useState } from "react";
import { Search, Eye, Edit, Trash, CheckCircle, Truck } from "lucide-react";

const sampleOrders = [
    {
        id: "ORD-1001",
        customer: "John Doe",
        products: "2x iPhone 14, 1x AirPods",
        amount: "$1,450",
        status: "Pending",
        date: "2025-09-10",
    },
    {
        id: "ORD-1002",
        customer: "Jane Smith",
        products: "1x MacBook Pro",
        amount: "$2,300",
        status: "Shipped",
        date: "2025-09-11",
    },
    {
        id: "ORD-1003",
        customer: "Alex Brown",
        products: "3x T-shirt, 1x Hoodie",
        amount: "$120",
        status: "Delivered",
        date: "2025-09-12",
    },
];

const statusColors = {
    Pending: "bg-yellow-100 text-yellow-700",
    Shipped: "bg-blue-100 text-blue-700",
    Delivered: "bg-green-100 text-green-700",
    Cancelled: "bg-red-100 text-red-700",
};

const AdminOrders = () => {
    const [orders, setOrders] = useState(sampleOrders);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    const filteredOrders = orders.filter((order) => {
        const matchesSearch =
            order.customer.toLowerCase().includes(search.toLowerCase()) ||
            order.id.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === "All" || order.status === filter;
        return matchesSearch && matchesFilter;
    });

    const updateStatus = (id, newStatus) => {
        setOrders((prev) =>
            prev.map((order) =>
                order.id === id ? { ...order, status: newStatus } : order
            )
        );
    };

    const deleteOrder = (id) => {
        setOrders((prev) => prev.filter((order) => order.id !== id));
    };

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Manage Orders</h1>

                {/* Search & Filter */}
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <div className="relative">
                        <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by ID or Customer"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                    </div>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
                    >
                        <option>All</option>
                        <option>Pending</option>
                        <option>Shipped</option>
                        <option>Delivered</option>
                        <option>Cancelled</option>
                    </select>
                </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white shadow rounded-xl overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-4 py-3">Order ID</th>
                            <th className="px-4 py-3">Customer</th>
                            <th className="px-4 py-3">Products</th>
                            <th className="px-4 py-3">Amount</th>
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.length > 0 ? (
                            filteredOrders.map((order) => (
                                <tr
                                    key={order.id}
                                    className="border-b last:border-0 hover:bg-gray-50"
                                >
                                    <td className="px-4 py-3 font-medium">{order.id}</td>
                                    <td className="px-4 py-3">{order.customer}</td>
                                    <td className="px-4 py-3">{order.products}</td>
                                    <td className="px-4 py-3">{order.amount}</td>
                                    <td className="px-4 py-3">{order.date}</td>
                                    <td className="px-4 py-3">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[order.status]
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 flex items-center justify-center gap-2">
                                        <button className="p-2 hover:bg-gray-100 rounded-full">
                                            <Eye className="w-5 h-5 text-gray-600" />
                                        </button>
                                        <button className="p-2 hover:bg-gray-100 rounded-full">
                                            <Edit className="w-5 h-5 text-blue-600" />
                                        </button>
                                        {order.status !== "Shipped" && (
                                            <button
                                                className="p-2 hover:bg-gray-100 rounded-full"
                                                onClick={() => updateStatus(order.id, "Shipped")}
                                            >
                                                <Truck className="w-5 h-5 text-indigo-600" />
                                            </button>
                                        )}
                                        {order.status !== "Delivered" && (
                                            <button
                                                className="p-2 hover:bg-gray-100 rounded-full"
                                                onClick={() => updateStatus(order.id, "Delivered")}
                                            >
                                                <CheckCircle className="w-5 h-5 text-green-600" />
                                            </button>
                                        )}
                                        <button
                                            className="p-2 hover:bg-gray-100 rounded-full"
                                            onClick={() => deleteOrder(order.id)}
                                        >
                                            <Trash className="w-5 h-5 text-red-600" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="7"
                                    className="text-center text-gray-500 py-6"
                                >
                                    No orders found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminOrders;
