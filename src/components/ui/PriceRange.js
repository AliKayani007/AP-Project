import { useState, useEffect } from "react";

export default function PriceRange({ value, onChange, max = 500000 }) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (e) => {
    setLocalValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <span className="text-gray-400 text-sm">$0</span>
        <span className="text-gray-400 text-sm">
          ${Number(localValue).toLocaleString()}
        </span>
        <span className="text-gray-400 text-sm">
          ${Number(max).toLocaleString()}
        </span>
      </div>
      <input
        type="range"
        min="0"
        max={max}
        value={localValue}
        onChange={handleChange}
        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
      />
    </div>
  );
}
