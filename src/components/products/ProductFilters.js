import React from "react";

const ProductFilters = ({ filters, setFilters }) => {
    const conditions = ["All", "New", "Refurbished", "Used"];
    const types = ["All", "Audio", "Peripheral"];

    return (
        <div className="mb-8 p-6 bg-gray-900 rounded-lg border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Search by name */}
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Search</label>
                    <input
                        type="text"
                        placeholder="Product name..."
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={filters.search}
                        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                    />
                </div>

                {/* Filter by price */}
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Max Price</label>
                    <div className="flex items-center">
                        <span className="mr-2 text-gray-400">$0</span>
                        <input
                            type="range"
                            min="0"
                            max="500"
                            step="10"
                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            value={filters.maxPrice}
                            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                        />
                        <span className="ml-2 text-white">${filters.maxPrice}</span>
                    </div>
                </div>

                {/* Filter by condition */}
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Condition</label>
                    <select
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={filters.condition}
                        onChange={(e) => setFilters({ ...filters, condition: e.target.value })}
                    >
                        {conditions.map((cond) => (
                            <option key={cond} value={cond}>{cond}</option>
                        ))}
                    </select>
                </div>

                {/* Filter by type */}
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Type</label>
                    <select
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={filters.type}
                        onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                    >
                        {types.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ProductFilters;
