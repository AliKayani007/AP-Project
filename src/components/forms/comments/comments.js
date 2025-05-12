"use client";
import { useState } from "react";
import { useAuth } from "@/context/auth-context";

const CommentsForm = ({ pid }) => {
  const { user } = useAuth(); // Must contain user.id (uuid from Supabase)
  const [formData, setFormData] = useState({
    name: "",
    review: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!user?.id || !pid) {
      setMessage("User not logged in or product ID missing.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uid: user.id,
          pid,
          name: formData.name,
          review: formData.review,
        }),
      });

      if (res.ok) {
        setMessage("Comment submitted successfully!");
        setFormData({ name: "", review: "" });
      } else {
        const errorData = await res.json();
        setMessage("Error: " + errorData.message);
      }
    } catch (error) {
      setMessage("Error submitting the comment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/10 border border-white/20 p-6 rounded-xl max-w-xl mx-auto mt-10"
    >
      <h2 className="text-xl font-semibold text-white mb-4 text-center">
        Leave a Comment
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full mb-4 px-4 py-2 rounded bg-white/20 text-white placeholder-gray-300 outline-none"
      />

      <textarea
        name="review"
        placeholder="Your Review"
        value={formData.review}
        onChange={handleChange}
        required
        className="w-full mb-4 px-4 py-2 h-32 rounded bg-white/20 text-white placeholder-gray-300 outline-none resize-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
      >
        {loading ? "Submitting..." : "Submit Review"}
      </button>

      {message && (
        <p
          className={`mt-4 text-center ${
            message.includes("Error") ? "text-red-400" : "text-green-400"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
};

export default CommentsForm;