import { Package, Truck, CheckCircle, Clock } from "lucide-react";

const orders = [
    {
        id: "ORD-1023",
        product: "Nike Air Max Sneakers",
        date: "2025-09-12",
        status: "Shipped",
        price: "$120.00",
    },
    {
        id: "ORD-1022",
        product: "Apple AirPods Pro",
        date: "2025-09-10",
        status: "Delivered",
        price: "$199.00",
    },
    {
        id: "ORD-1021",
        product: "Adidas Hoodie",
        date: "2025-09-08",
        status: "Processing",
        price: "$65.00",
    },
];

const getStatusBadge = (status) => {
    switch (status) {
        case "Delivered":
            return (
                <span className="flex items-center gap-1 text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs font-medium">
                    <CheckCircle className="w-4 h-4" /> Delivered
                </span>
            );
        case "Shipped":
            return (
                <span className="flex items-center gap-1 text-blue-600 bg-blue-100 px-2 py-1 rounded-full text-xs font-medium">
                    <Truck className="w-4 h-4" /> Shipped
                </span>
            );
        case "Processing":
            return (
                <span className="flex items-center gap-1 text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full text-xs font-medium">
                    <Clock className="w-4 h-4" /> Processing
                </span>
            );
        default:
            return (
                <span className="flex items-center gap-1 text-gray-600 bg-gray-100 px-2 py-1 rounded-full text-xs font-medium">
                    <Package className="w-4 h-4" /> Pending
                </span>
            );
    }
};

const CustomerOrder = () => {
    return (
        <div className="bg-white shadow rounded-xl p-6">
            {/* Header */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">My Orders</h2>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-4 py-3 font-medium">Order ID</th>
                            <th className="px-4 py-3 font-medium">Product</th>
                            <th className="px-4 py-3 font-medium">Date</th>
                            <th className="px-4 py-3 font-medium">Status</th>
                            <th className="px-4 py-3 font-medium text-right">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr
                                key={order.id}
                                className="border-b last:border-0 hover:bg-gray-50 transition"
                            >
                                <td className="px-4 py-3 font-medium text-gray-700">
                                    {order.id}
                                </td>
                                <td className="px-4 py-3">{order.product}</td>
                                <td className="px-4 py-3 text-gray-500">{order.date}</td>
                                <td className="px-4 py-3">{getStatusBadge(order.status)}</td>
                                <td className="px-4 py-3 text-right font-semibold text-gray-800">
                                    {order.price}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerOrder;
