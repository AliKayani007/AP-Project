// app/login/page.js
import React from "react";
import Image from "next/image";
import BlurredEllipse from "@/components/ui/BlurredEllipse";
import LoginForm from "@/components/forms/LoginForm";

export default function Login({ searchParams }) {
    // Convert searchParams to a regular object that can be passed to client components
    const messageParams = {
        success: searchParams?.success || null,
        error: searchParams?.error || null,
        message: searchParams?.message || null
    };

    return (
        <div className="flex items-center justify-center bg-black px-4 py-16">
            <div className="flex flex-col md:flex-row items-center min-h-[60vh] justify-center w-full max-w-screen-xl overflow-hidden bg-gradient-to-t from-teal-800/20 to-purple-900/10 border border-teal-100/10 bg-opacity-10 p-8 rounded-lg">
                {/* Left Section - Robot Illustration */}
                <div className="hidden md:flex flex-col items-center">
                    <div className="relative">
                        <div className="relative w-[300px] lg:w-[610px] mx-auto xl:translate-x-[10%] h-[400px] flex items-center justify-center z-[10]">
                            <iframe src='https://my.spline.design/retrofuturisticcircuitloop-5PQQMg3IIjSZ0na1zTrq7AhZ/' frameborder='0' width='100%' height='100%'></iframe>
                        </div>
                        <div className="absolute -translate-x-[200px] lg:-translate-x-0 -translate-y-[80px] scale-90">
                            <BlurredEllipse />
                        </div>
                    </div>
                </div>

                {/* Right Section - Login Form */}
                <div className="w-full md:w-1/2">
                    <LoginForm message={messageParams} />
                </div>
            </div>
        </div>
    );
}