"use client";
import { useState } from "react";
import FormField from "@/components/forms/contact/FormField";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business_name: "",
    features: "",
    usecase: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          business_name: "",
          features: "",
          usecase: "",
        });
        setLoading(false)
      } else {
        const errorData = await res.json();
        setMessage(`Error: ${errorData.message}`);
      }
    } catch (error) {
      setMessage("Error submitting the form. Please try again.");
    } 
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-t from-blue-800/10 to-purple-900/10 border border-teal-100/10 p-8 w-full max-w-[846px] mx-auto"
    >
      <h3 className="text-3xl md:text-4xl font-bold text-white text-center">
        Let’s Build Your PC
      </h3>
      <p className="mt-2 text-base md:text-lg font-normal text-[#D7D7D7]/80 text-center">
        Fill out the form below, and our team will reach out to discuss your
        requirements.
      </p>

      {/* Form Fields */}
      <div className="mt-6 w-full flex flex-col gap-6">
        <FormField
          label="Name *"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
        />
        <FormField
          label="Email *"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Best email to reach you"
        />
        <FormField
          label="Business Name (Optional)"
          type="text"
          name="business_name"
          value={formData.business_name}
          onChange={handleChange}
          placeholder="Optional field"
        />
        <FormField
          label="Features or Integrations *"
          type="text"
          name="features"
          value={formData.features}
          onChange={handleChange}
          placeholder="List any specific tools or workflows"
        />

        {/* Full-width Use Case textarea */}
        <div className="flex flex-col">
          <label className="text-base md:text-lg text-white mb-2">
            What do you need your AI agent to do? *
          </label>
          <textarea
            name="usecase"
            value={formData.usecase}
            onChange={handleChange}
            placeholder="Describe your use case"
            className="h-40 w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-[#6B7274] outline-none resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="mt-8 sm:mt-6 bg-[#7B8CE5] px-4 sm:px-10 py-2 sm:py-3 text-white font-semibold hover:bg-blue-600 transition rounded-full"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>

        {message && (
          <p
            className={`mt-4 text-center ${
              message.includes("Error") ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
