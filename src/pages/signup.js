import SignupForm from "@/components/forms/SignupForm"; // Import the SignupForm component
import Image from "next/image";
import Link from "next/link";
import BlurredEllipse from "@/components/ui/BlurredEllipse";

const Signup = () => {
    return (
        <div className="flex items-center justify-center bg-black px-4 py-16">
            <div className="flex w-full max-w-screen-xl min-h-[60vh] flex-col md:flex-row rounded-lg overflow-hidden bg-gradient-to-t from-teal-800/20 to-purple-900/10 border border-teal-100/10 bg-opacity-10 items-center justify-center gap-10 p-6">
                {/* Left Section - Robot Illustration */}
                <div className="hidden md:flex flex-col items-center">
                    <div className="relative -translate-x-10">
                        <div className="relative w-[300px] lg:w-[610px] mx-auto xl:translate-x-[10%] h-[400px] flex items-center justify-center z-[10]">
                            <iframe src='https://my.spline.design/retrofuturisticcircuitloop-5PQQMg3IIjSZ0na1zTrq7AhZ/' frameborder='0' width='100%' height='100%'></iframe>
                        </div>
                        <div className="absolute -translate-x-[200px] lg:-translate-x-0 -translate-y-[80px] scale-90">
                            <BlurredEllipse />
                        </div>
                    </div>
                </div>

                {/* Right Section - Sign Up Form */}
                <div className="w-full md:w-1/2 max-w-md p-6 bg-opacity-10">
                   
                    <SignupForm />
                    
                </div>
            </div>
        </div>
    );
};

export default Signup;
