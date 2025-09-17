import { useState } from "react";
import { Search, Plus, Edit, Trash, Eye, EyeOff, Star } from "lucide-react";

const sampleProducts = [
    {
        id: "P-1001",
        name: "iPhone 14 Pro",
        category: "Electronics",
        price: 999,
        stock: 20,
        status: "Visible",
        image: "https://via.placeholder.com/60",
        featured: true,
    },
    {
        id: "P-1002",
        name: "Nike Air Max",
        category: "Fashion",
        price: 120,
        stock: 50,
        status: "Hidden",
        image: "https://via.placeholder.com/60",
        featured: false,
    },
];

const statusColors = {
    Visible: "bg-green-100 text-green-700",
    Hidden: "bg-gray-200 text-gray-600",
};

const AdminProducts = () => {
    const [products, setProducts] = useState(sampleProducts);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    // Filter logic
    const filteredProducts = products.filter((p) => {
        const matchesSearch =
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.id.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === "All" || p.status === filter;
        return matchesSearch && matchesFilter;
    });

    // Toggle visibility
    const toggleVisibility = (id) => {
        setProducts((prev) =>
            prev.map((p) =>
                p.id === id
                    ? { ...p, status: p.status === "Visible" ? "Hidden" : "Visible" }
                    : p
            )
        );
    };

    // Toggle featured
    const toggleFeatured = (id) => {
        setProducts((prev) =>
            prev.map((p) =>
                p.id === id ? { ...p, featured: !p.featured } : p
            )
        );
    };

    // Delete product
    const deleteProduct = (id) => {
        setProducts((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Manage Products</h1>

                {/* Search + Filter */}
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <div className="relative">
                        <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by ID or Name"
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
                        <option>Visible</option>
                        <option>Hidden</option>
                    </select>
                </div>

                {/* Add Product Button */}
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition">
                    <Plus className="w-5 h-5" />
                    Add Product
                </button>
            </div>

            {/* Products Table */}
            <div className="bg-white shadow rounded-xl overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-4 py-3">Image</th>
                            <th className="px-4 py-3">ID</th>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Category</th>
                            <th className="px-4 py-3">Price</th>
                            <th className="px-4 py-3">Stock</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Featured</th>
                            <th className="px-4 py-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((p) => (
                                <tr
                                    key={p.id}
                                    className="border-b last:border-0 hover:bg-gray-50"
                                >
                                    <td className="px-4 py-3">
                                        <img
                                            src={p.image}
                                            alt={p.name}
                                            className="w-12 h-12 rounded-lg object-cover"
                                        />
                                    </td>
                                    <td className="px-4 py-3 font-medium">{p.id}</td>
                                    <td className="px-4 py-3">{p.name}</td>
                                    <td className="px-4 py-3">{p.category}</td>
                                    <td className="px-4 py-3">${p.price}</td>
                                    <td className="px-4 py-3">{p.stock}</td>
                                    <td className="px-4 py-3">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[p.status]
                                                }`}
                                        >
                                            {p.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        {p.featured ? (
                                            <span className="text-yellow-500 font-semibold">
                                                ⭐ Featured
                                            </span>
                                        ) : (
                                            <span className="text-gray-400">—</span>
                                        )}
                                    </td>
                                    <td className="px-4 py-3 flex items-center justify-center gap-2">
                                        <button className="p-2 hover:bg-gray-100 rounded-full">
                                            <Edit className="w-5 h-5 text-blue-600" />
                                        </button>
                                        <button
                                            onClick={() => toggleVisibility(p.id)}
                                            className="p-2 hover:bg-gray-100 rounded-full"
                                        >
                                            {p.status === "Visible" ? (
                                                <EyeOff className="w-5 h-5 text-gray-600" />
                                            ) : (
                                                <Eye className="w-5 h-5 text-gray-600" />
                                            )}
                                        </button>
                                        <button
                                            onClick={() => toggleFeatured(p.id)}
                                            className="p-2 hover:bg-gray-100 rounded-full"
                                        >
                                            <Star
                                                className={`w-5 h-5 ${p.featured ? "text-yellow-500" : "text-gray-400"
                                                    }`}
                                            />
                                        </button>
                                        <button
                                            onClick={() => deleteProduct(p.id)}
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
                                    colSpan="9"
                                    className="text-center text-gray-500 py-6"
                                >
                                    No products found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminProducts;
