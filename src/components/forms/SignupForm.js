"use client";

import { useState } from "react";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormMessage } from "@/components/forms/forms-message"; 

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({}); 

  const handleSignUp = async (e) => {
    e.preventDefault();
    setMessage({}); 

    if (!email || !username || !password) {
      setMessage({ error: "All fields are required!" }); 
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, username }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({
          success:
            data.message ||
            "Account created successfully! Click the link in your inbox.",
        }); 
      } else {
        setMessage({
          error: data.error || "Sign up failed. Please try again.",
        });
      }
    } catch (error) {
      console.log(error.message);
      setMessage({ error: "An unexpected error occurred. Please try again." }); // ✅ error
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-white text-center mb-4">
        Create an account
      </h2>

      <form
        className="flex flex-col gap-4 text-gray-200"
        onSubmit={handleSignUp}
      >
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          placeholder="you@example.com"
          required
          className="w-full p-3 bg-gray-900 text-white rounded-md border border-gray-800 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Label htmlFor="username">Username</Label>
        <Input
          name="username"
          placeholder="Agent"
          required
          className="w-full p-3 bg-gray-900 text-white rounded-md border border-gray-800 focus:outline-none"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          placeholder="Your password"
          minLength={6}
          required
          className="w-full p-3 bg-gray-900 text-white rounded-md border border-gray-800 focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <SubmitButton
          pendingText="Signing up..."
          className="w-full p-3 bg-[#7B8CE5] text-white rounded-md border border-gray-800 focus:outline-none"
        >
          Sign Up
        </SubmitButton>

        {/* ✅ Correct way to show FormMessage */}
        {(message.success || message.error || message.message) && (
          <FormMessage message={message} />
        )}
      </form>
    </>
  );
};

export default SignupForm;
