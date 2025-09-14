import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const CustomerDashboard = ({ data }) => {
    // Example data if not provided
    const purchasesData = data?.purchases || [
        { month: "Jan", total: 120 },
        { month: "Feb", total: 200 },
        { month: "Mar", total: 150 },
        { month: "Apr", total: 300 },
        { month: "May", total: 250 },
    ];

    const orders = data?.orders || [
        { id: "1001", item: "Laptop", status: "Delivered", cost: 1200 },
        { id: "1002", item: "Headphones", status: "Shipped", cost: 150 },
        { id: "1003", item: "Mouse", status: "Pending", cost: 50 },
    ];

    const totalSpent = orders.reduce((sum, o) => sum + o.cost, 0);

    return (
        <div className="p-6 space-y-6">
            {/* Overview cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                    <h3 className="text-gray-500 text-sm">Total Orders</h3>
                    <p className="text-2xl font-bold text-primary">{orders.length}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                    <h3 className="text-gray-500 text-sm">Total Purchases</h3>
                    <p className="text-2xl font-bold text-primary">{purchasesData.reduce((sum, p) => sum + p.total, 0)}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                    <h3 className="text-gray-500 text-sm">Total Spent</h3>
                    <p className="text-2xl font-bold text-primary">${totalSpent}</p>
                </div>
            </div>

            {/* Purchases chart */}
            <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-lg font-semibold text-dark mb-4">Monthly Purchases</h3>
                <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={purchasesData}>
                        <CartesianGrid stroke="#f0f0f0" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="total" stroke="#2563EB" strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Orders table */}
            <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
                <h3 className="text-lg font-semibold text-dark mb-4">Recent Orders</h3>
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="py-2 px-4 text-gray-500">Order ID</th>
                            <th className="py-2 px-4 text-gray-500">Item</th>
                            <th className="py-2 px-4 text-gray-500">Status</th>
                            <th className="py-2 px-4 text-gray-500">Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                                <td className="py-2 px-4">{order.id}</td>
                                <td className="py-2 px-4">{order.item}</td>
                                <td className="py-2 px-4">{order.status}</td>
                                <td className="py-2 px-4">${order.cost}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerDashboard;
