import { useState } from "react";
import { Search, Trash, Ban, CheckCircle, Star } from "lucide-react";

const sampleCustomers = [
    {
        id: "C-1001",
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://i.pravatar.cc/60?img=1",
        role: "Customer",
        status: "Active",
        joined: "2023-08-12",
        orders: 12,
        vip: true,
    },
    {
        id: "C-1002",
        name: "Jane Smith",
        email: "jane@example.com",
        avatar: "https://i.pravatar.cc/60?img=2",
        role: "Customer",
        status: "Blocked",
        joined: "2023-09-05",
        orders: 3,
        vip: false,
    },
];

const statusColors = {
    Active: "bg-green-100 text-green-700",
    Blocked: "bg-red-100 text-red-700",
};

const AdminCustomers = () => {
    const [customers, setCustomers] = useState(sampleCustomers);
    const [search, setSearch] = useState("");

    // Filter by name/email
    const filteredCustomers = customers.filter(
        (c) =>
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.email.toLowerCase().includes(search.toLowerCase())
    );

    // Toggle Block/Unblock
    const toggleBlock = (id) => {
        setCustomers((prev) =>
            prev.map((c) =>
                c.id === id
                    ? { ...c, status: c.status === "Active" ? "Blocked" : "Active" }
                    : c
            )
        );
    };

    // Toggle VIP
    const toggleVIP = (id) => {
        setCustomers((prev) =>
            prev.map((c) =>
                c.id === id ? { ...c, vip: !c.vip } : c
            )
        );
    };

    // Delete customer
    const deleteCustomer = (id) => {
        setCustomers((prev) => prev.filter((c) => c.id !== id));
    };

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Manage Customers</h1>

                {/* Search */}
                <div className="relative w-full sm:w-80">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by name or email"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none w-full"
                    />
                </div>
            </div>

            {/* Customers Table */}
            <div className="bg-white shadow rounded-xl overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-4 py-3">Avatar</th>
                            <th className="px-4 py-3">ID</th>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Email</th>
                            <th className="px-4 py-3">Role</th>
                            <th className="px-4 py-3">Orders</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">VIP</th>
                            <th className="px-4 py-3">Joined</th>
                            <th className="px-4 py-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCustomers.length > 0 ? (
                            filteredCustomers.map((c) => (
                                <tr
                                    key={c.id}
                                    className="border-b last:border-0 hover:bg-gray-50"
                                >
                                    <td className="px-4 py-3">
                                        <img
                                            src={c.avatar}
                                            alt={c.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                    </td>
                                    <td className="px-4 py-3 font-medium">{c.id}</td>
                                    <td className="px-4 py-3">{c.name}</td>
                                    <td className="px-4 py-3">{c.email}</td>
                                    <td className="px-4 py-3">{c.role}</td>
                                    <td className="px-4 py-3">{c.orders}</td>
                                    <td className="px-4 py-3">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[c.status]
                                                }`}
                                        >
                                            {c.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        {c.vip ? (
                                            <span className="text-yellow-500 font-semibold">⭐ VIP</span>
                                        ) : (
                                            <span className="text-gray-400">—</span>
                                        )}
                                    </td>
                                    <td className="px-4 py-3">{c.joined}</td>
                                    <td className="px-4 py-3 flex items-center justify-center gap-2">
                                        {/* Block/Unblock */}
                                        <button
                                            onClick={() => toggleBlock(c.id)}
                                            className="p-2 hover:bg-gray-100 rounded-full"
                                        >
                                            {c.status === "Active" ? (
                                                <Ban className="w-5 h-5 text-red-600" />
                                            ) : (
                                                <CheckCircle className="w-5 h-5 text-green-600" />
                                            )}
                                        </button>

                                        {/* Toggle VIP */}
                                        <button
                                            onClick={() => toggleVIP(c.id)}
                                            className="p-2 hover:bg-gray-100 rounded-full"
                                        >
                                            <Star
                                                className={`w-5 h-5 ${c.vip ? "text-yellow-500" : "text-gray-400"
                                                    }`}
                                            />
                                        </button>

                                        {/* Delete */}
                                        <button
                                            onClick={() => deleteCustomer(c.id)}
                                            className="p-2 hover:bg-gray-100 rounded-full"
                                        >
                                            <Trash className="w-5 h-5 text-red-600" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="10"
                                    className="text-center text-gray-500 py-6"
                                >
                                    No customers found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminCustomers;
