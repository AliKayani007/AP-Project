import React, { useState } from "react";

export default function EditProfileForm() {
    const [formData, setFormData] = useState({
        name: "",
        city: "",
        number: "",
        email: "",
        image: "", // Base64 data URL for the uploaded image
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0]; // Get the first file
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prev) => ({ ...prev, image: reader.result }));
            };
            reader.readAsDataURL(file); // Read file as base64 data URL
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // API call, Supabase update, etc.
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6 mt-8 bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg text-white"
        >
            <div className="flex flex-col items-center">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white/20 shadow-md mb-4">
                    <img
                        src={formData.image || "https://via.placeholder.com/150"}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full p-2 rounded bg-white/10 text-white placeholder:text-gray-400 focus:outline-none"
                />
            </div>

            <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-white/10 text-white placeholder:text-gray-400 focus:outline-none"
            />
            <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-3 rounded bg-white/10 text-white placeholder:text-gray-400 focus:outline-none"
            />
            <input
                type="text"
                name="number"
                placeholder="Phone Number"
                value={formData.number}
                onChange={handleChange}
                className="w-full p-3 rounded bg-white/10 text-white placeholder:text-gray-400 focus:outline-none"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-white/10 text-white placeholder:text-gray-400 focus:outline-none"
            />

            <button
                type="submit"
                className="w-full py-3 rounded bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:brightness-110 transition-all"
            >
                Save Changes
            </button>
        </form>
    );
}
