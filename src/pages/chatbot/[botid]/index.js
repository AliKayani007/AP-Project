"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlurredCircle from "@/components/ui/BlurredCircle";

export default function ChatbotPage() {
  const [prompt, setPrompt] = useState(""); // User input
  const [messages, setMessages] = useState([]); // Store all messages (user + bot)
  const [loading, setLoading] = useState(false); // Loading state

  const chatbotId = "sample-chatbot-id"; // Placeholder

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    // Add user's message to the messages state
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: prompt, isUser: true },
    ]);

    setLoading(true);

    try {
      // Call your Express backend (not FastAPI directly)
      const res = await fetch("/api/pcbuild", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: prompt }),
      });

      const data = await res.json();
      console.log("🧪 Response from Express API:", data);

      // Safely access products
      const productList = data?.products || data?.data?.products || [];

      if (!Array.isArray(productList)) {
        throw new Error("Products is not an array");
      }

      // Add bot's message (products list or generic response)
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: (
            <div className="flex flex-row gap-4 overflow-x-auto py-2">
              {productList.map((product, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-48 bg-teal-700/30 p-4 rounded-lg shadow-md border border-teal-100/20"
                >
                  <p className="text-white">
                    <strong>{product.title}</strong>
                  </p>
                  <p className="text-gray-300">Price: {product.price}</p>
                  <p className="text-gray-300">Category: {product.category}</p>
                  <img
                    src={product.image_url}
                    alt={product.title}
                    className="w-24 h-24 object-cover mt-2 rounded-md"
                  />
                  <Link
                    href={product.product_url}
                    target="_blank"
                    className="text-teal-400 mt-2 hover:underline"
                  >
                    View Product
                  </Link>
                </div>
              ))}
            </div>
          ),
          isUser: false,
        },
      ]);
    } catch (err) {
      console.error("Failed to fetch products:", err);
      alert("Something went wrong while fetching products.");
    }

    setLoading(false);
  };

  return (
    <div className="w-full flex items-center gap-6 sm:p-6 flex-col relative md:mt-20">
      <div className="max-w-screen-xl w-full flex flex-col gap-2 z-50">
        <div className="flex flex-col items-center justify-center gap-4 text-white z-[100] mt-30">
          <div className="max-w-full flex flex-col items-center justify-center text-center z-[100]">
            <h2 className="text-4xl lg:text-6xl font-semibold w-full leading-tight">
              <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-200/40 text-transparent bg-clip-text">
                Test!
              </span>{" "}
              Your Agent
            </h2>
            <p className="text-gray-400 mt-10 text-sm sm:text-base max-w-4xl">
              Test the agent using the provided window and ask relevant
              questions based on the document.
            </p>
          </div>
        </div>

        {/* Static Chat UI */}
        <div className="flex-1 flex flex-col gap-4 mt-30 bg-gradient-to-t z-50 relative max-h-[600px] from-blue-800/20 to-purple-900/10 border border-teal-100/10 rounded-lg shadow-lg p-4 min-h-[600px] overflow-x-auto">
          {/* Map through messages and display */}
          {messages.map((message, idx) => (
            <ChatBubble key={idx} text={message.text} isUser={message.isUser} />
          ))}

          {/* Typing indicator */}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-teal-700/40 text-gray-800 p-3 rounded-lg rounded-bl-none">
                <div className="flex items-center gap-2">
                  <TypingDot delay="0" />
                  <TypingDot delay="100" />
                  <TypingDot delay="200" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Static input + link button */}
        <form
          className="flex items-center gap-4 mt-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-3 border text-white border-teal-700/30 rounded-lg bg-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-700/40"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            className="p-3 bg-[#7B8CE5] text-white rounded-lg hover:bg-blue-700/40 transition"
            disabled={loading}
          >
            {loading ? "Generating..." : "Send"}
          </button>
        </form>
      </div>

      {/* Background Effects */}
      <div className="absolute left-0 opacity-[0.5] -z-10">
        <BlurredCircle />
      </div>
      <div className="absolute right-0 opacity-[0.5] scale-x-[-1] -z-10">
        <BlurredCircle />
      </div>
    </div>
  );
}

function ChatBubble({ text, isUser }) {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] p-3 rounded-lg text-sm ${
          isUser
            ? "bg-blue-700/40 text-white rounded-br-none"
            : "bg-teal-700/20 text-gray-200 rounded-bl-none"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

function TypingDot({ delay }) {
  return (
    <div
      className={`w-2 h-2 bg-blue-700 rounded-full animate-bounce`}
      style={{ animationDelay: `${delay}ms` }}
    />
  );
}
