import TabContent from "../../../Components/TabContent/TabContent";
import Tabs from "../../../Components/Tabs/Tabs";

// Admin Settings Page
const AdminSettings = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Admin Settings ⚙️
            </h1>

            <Tabs
                tabs={[
                    { value: "general", label: "General" },
                    { value: "security", label: "User & Security" },
                    { value: "payment", label: "Payment" },
                    { value: "shipping", label: "Shipping" },
                    { value: "notifications", label: "Notifications" },
                    { value: "appearance", label: "Appearance" },
                    { value: "integrations", label: "Integrations" },
                ]}
            >
                {/* General Settings */}
                <TabContent value="general">
                    <h2 className="text-xl font-semibold mb-4">General Settings</h2>
                    <form className="grid gap-4">
                        <input
                            type="text"
                            placeholder="Store Name"
                            className="border rounded-lg px-4 py-2"
                        />
                        <textarea
                            placeholder="Store Description"
                            className="border rounded-lg px-4 py-2"
                        />
                        <input
                            type="email"
                            placeholder="Contact Email"
                            className="border rounded-lg px-4 py-2"
                        />
                        <input
                            type="tel"
                            placeholder="Contact Phone"
                            className="border rounded-lg px-4 py-2"
                        />
                    </form>
                </TabContent>

                {/* User & Security Settings */}
                <TabContent value="security">
                    <h2 className="text-xl font-semibold mb-4">User & Security</h2>
                    <div className="space-y-3">
                        <button className="px-4 py-2 bg-primary text-white rounded-lg">
                            Change Password
                        </button>
                        <div>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="form-checkbox" />
                                Enable 2FA (Two-Factor Authentication)
                            </label>
                        </div>
                        <div className="text-sm text-gray-600">
                            Role Management: Admin, Staff, Support
                        </div>
                    </div>
                </TabContent>

                {/* Payment Settings */}
                <TabContent value="payment">
                    <h2 className="text-xl font-semibold mb-4">Payment Settings</h2>
                    <select className="border rounded-lg px-4 py-2">
                        <option>USD</option>
                        <option>EUR</option>
                        <option>INR</option>
                    </select>
                    <div className="mt-4 space-y-2">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" /> Stripe
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" /> PayPal
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" /> Cash on Delivery
                        </label>
                    </div>
                </TabContent>

                {/* Shipping Settings */}
                <TabContent value="shipping">
                    <h2 className="text-xl font-semibold mb-4">Shipping Settings</h2>
                    <input
                        type="number"
                        placeholder="Free Shipping Threshold ($)"
                        className="border rounded-lg px-4 py-2"
                    />
                    <div className="mt-4 space-y-2">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" /> Standard
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" /> Express
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" /> Overnight
                        </label>
                    </div>
                </TabContent>

                {/* Notifications */}
                <TabContent value="notifications">
                    <h2 className="text-xl font-semibold mb-4">Notifications & Emails</h2>
                    <label className="flex items-center gap-2 mb-2">
                        <input type="checkbox" /> Low Stock Alert
                    </label>
                    <textarea
                        placeholder="Order Confirmation Email Template"
                        className="border rounded-lg px-4 py-2 w-full"
                    />
                </TabContent>

                {/* Appearance */}
                <TabContent value="appearance">
                    <h2 className="text-xl font-semibold mb-4">Appearance Settings</h2>
                    <label className="flex items-center gap-2 mb-2">
                        <input type="checkbox" /> Enable Dark Mode
                    </label>
                    <select className="border rounded-lg px-4 py-2">
                        <option>Grid Layout</option>
                        <option>Carousel</option>
                        <option>Minimal</option>
                    </select>
                </TabContent>

                {/* Integrations */}
                <TabContent value="integrations">
                    <h2 className="text-xl font-semibold mb-4">Integrations</h2>
                    <input
                        type="text"
                        placeholder="Google Analytics ID"
                        className="border rounded-lg px-4 py-2 mb-2"
                    />
                    <input
                        type="text"
                        placeholder="Stripe API Key"
                        className="border rounded-lg px-4 py-2 mb-2"
                    />
                    <input
                        type="text"
                        placeholder="PayPal API Key"
                        className="border rounded-lg px-4 py-2 mb-2"
                    />
                </TabContent>
            </Tabs>
        </div>
    );
};

export default AdminSettings;
