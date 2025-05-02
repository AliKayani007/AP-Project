"use client";
import { supabase } from "@/utils/supabaseClient"; // ✅ your client

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Needed for redirect
import { FormMessage } from "./forms-message";
import { SubmitButton } from "./submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter(); // ✅ Initialize router
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({});

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage({});

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        const { session } = data.data;
        await supabase.auth.setSession(session);
        setMessage({ success: "Login successful! Redirecting..." });
        setTimeout(() => {
          router.push("/");
        }, 1500);
      } else {
        setMessage({ error: data.error || "Login failed. Please try again." });
      }
    } catch (error) {
      console.log(error.message);
      setMessage({ error: "An unexpected error occurred. Please try again." });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold text-white mb-4 text-center">
        Login to your account
      </h2>
      <p className="text-gray-400 text-sm mb-6 text-center">
        New User?{" "}
        <Link href="/signup" className="text-blue-400 hover:underline">
          Sign Up Here
        </Link>
      </p>

      <div className="relative flex items-center my-6">
        <div className="flex-grow border-t border-gray-600"></div>
        <span className="mx-3 text-gray-400 text-sm">Login with Email</span>
        <div className="flex-grow border-t border-gray-600"></div>
      </div>

      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 mt-4 text-gray-200"
      >
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          placeholder="you@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)} // ✅ control input
        />
        <div className="flex justify-between items-center text-gray-200">
          <Label htmlFor="password">Password</Label>
          <Link
            href="/forgot-password"
            className="text-xs underline text-blue-400 hover:text-blue-600 transition-colors"
          >
            Forgot Password?
          </Link>
        </div>
        <Input
          type="password"
          name="password"
          placeholder="Your password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton className="bg-[#7B8CE5] hover:bg-[#5a6ec5] transition-colors">
          Sign in
        </SubmitButton>
        {message && <FormMessage message={message} />}
      </form>
    </div>
  );
}
