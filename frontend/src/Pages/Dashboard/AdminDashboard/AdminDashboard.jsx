import { Users, Package, DollarSign, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const stats = [
    { title: "Total Users", value: "12,450", icon: Users, color: "bg-blue-100 text-blue-600" },
    { title: "Orders", value: "8,230", icon: Package, color: "bg-green-100 text-green-600" },
    { title: "Revenue", value: "$95,320", icon: DollarSign, color: "bg-yellow-100 text-yellow-600" },
    { title: "Growth", value: "+12%", icon: TrendingUp, color: "bg-purple-100 text-purple-600" },
];

const salesData = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3200 },
    { month: "Mar", sales: 5400 },
    { month: "Apr", sales: 4800 },
    { month: "May", sales: 6100 },
    { month: "Jun", sales: 7200 },
];

const recentOrders = [
    { id: "ORD-1001", customer: "John Doe", amount: "$120", status: "Delivered" },
    { id: "ORD-1002", customer: "Jane Smith", amount: "$80", status: "Shipped" },
    { id: "ORD-1003", customer: "Alex Brown", amount: "$250", status: "Processing" },
];

const AdminDashboard = () => {
    return (
        <div className="p-6 space-y-8">
            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-4 p-6 bg-white shadow rounded-xl hover:shadow-lg transition"
                    >
                        <div className={`p-3 rounded-full ${stat.color}`}>
                            <stat.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-500">{stat.title}</h3>
                            <p className="text-lg font-semibold">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sales Chart */}
            <div className="bg-white shadow rounded-xl p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Sales Overview</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={salesData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="sales" fill="#2563eb" radius={[6, 6, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Recent Orders */}
            <div className="bg-white shadow rounded-xl p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border-collapse">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="px-4 py-3 font-medium">Order ID</th>
                                <th className="px-4 py-3 font-medium">Customer</th>
                                <th className="px-4 py-3 font-medium">Amount</th>
                                <th className="px-4 py-3 font-medium">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map((order) => (
                                <tr key={order.id} className="border-b last:border-0 hover:bg-gray-50">
                                    <td className="px-4 py-3">{order.id}</td>
                                    <td className="px-4 py-3">{order.customer}</td>
                                    <td className="px-4 py-3">{order.amount}</td>
                                    <td className="px-4 py-3">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${order.status === "Delivered"
                                                    ? "bg-green-100 text-green-600"
                                                    : order.status === "Shipped"
                                                        ? "bg-blue-100 text-blue-600"
                                                        : "bg-yellow-100 text-yellow-600"
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
