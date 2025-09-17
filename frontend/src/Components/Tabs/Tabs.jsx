import React, { useState } from "react";

const Tabs = ({ tabs, children }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].value);

    return (
        <div className="w-full">
            {/* Tab buttons */}
            <div className="flex gap-4 border-b border-gray-200 mb-6 overflow-x-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab.value}
                        onClick={() => setActiveTab(tab.value)}
                        className={`px-4 py-2 font-medium rounded-t-md transition-colors ${activeTab === tab.value
                            ? "bg-primary text-white"
                            : "text-gray-600 hover:text-primary"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab content */}
            <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
                {React.Children.map(children, (child) =>
                    child.props.value === activeTab ? child : null
                )}
            </div>
        </div>
    );
};

export default Tabs;