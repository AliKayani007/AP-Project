"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MenuIcon, XIcon } from "lucide-react";
import { useAuth } from "@/context/auth-context"; // <-- Correct way
import { supabase } from "@/utils/supabaseClient"; // <-- To call signOut

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth(); 

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.reload(); 
  };

  return (
    <header className="w-screen h-[80px] fixed z-[200] flex items-center justify-center bg-black">
      <div className="w-full max-w-screen-xl mx-auto px-2 md:px-6 py-6 lg:px-0 flex justify-between items-center text-white">
        {/* Logo */}
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="Agent Dispatch Logo"
            className="w-32 h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          <Link href="/user-profile" className="hover:text-gray-400">
            Dashboard
          </Link>
          <Link href="/#agents" className="hover:text-gray-400">
            Agents
          </Link>
          <Link href="/products" className="hover:text-gray-400">
            Market
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact Us
          </Link>

          {!user ? (
            <>
              {/* If NOT logged in */}
              <Link href="/login" className="hover:text-gray-400">
                Log In
              </Link>
              <Link href="/login">
                <Button className="bg-[#7B8CE5] px-6 py-2 rounded-full text-white font-semibold transition-all duration-300 hover:bg-indigo-600 hover:scale-105">
                  Get Started
                </Button>
              </Link>
            </>
          ) : (
            <>
              {/* If logged in */}
              <button onClick={handleSignOut} className="hover:text-gray-400">
                Sign Out
              </button>
              <div className="flex items-center space-x-2">
                <Button className="bg-[#7B8CE5] px-6 py-2 rounded-full text-white font-semibold transition-all duration-300 hover:bg-indigo-600 hover:scale-105">
                  Get Started
                </Button>
                <span className="text-sm font-medium">
                  Hello, {user.user_metadata?.display_name || user.email}
                </span>
              </div>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden block text-white text-2xl focus:outline-none pr-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? (
            <MenuIcon className="w-5 h-5 text-white" />
          ) : (
            <XIcon className="w-5 h-5 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed top-16 left-0 w-full h-screen bg-black bg-opacity-80 backdrop-blur-md text-white flex flex-col items-center py-5 space-y-5 lg:hidden z-50">
          <Link href="/#features" className="text-lg hover:text-gray-400">
            Features
          </Link>
          <Link href="/#agents" className="text-lg hover:text-gray-400">
            Agents
          </Link>
          <Link href="/pricing" className="text-lg hover:text-gray-400">
            Pricing
          </Link>
          <Link href="/contact-us" className="text-lg hover:text-gray-400">
            Contact Us
          </Link>

          {!user ? (
            <>
              <Link href="/login" className="hover:text-gray-400">
                Log In
              </Link>
              <Link href="/login">
                <Button className="bg-indigo-500 px-6 py-3 w-11/12 text-center rounded-full hover:bg-indigo-600 transition">
                  GET STARTED
                </Button>
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={handleSignOut}
                className="hover:text-gray-400 text-lg"
              >
                Sign Out
              </button>
              <div className="text-sm font-medium">
                Hello, {user.user_metadata?.display_name || user.email}
              </div>
            </>
          )}
        </div>
      )}
    </header>
  );
}
