import Link from "next/link";
import GradientText from "../ui/GradientText";
import BlurredCircle from "@/components/ui/BlurredCircle"; // Assuming the component is available

export default function HeroSection() {
    return (
        <section className="flex flex-col md:flex-row h-[40vh] lg:h-[80vh] mt-32 lg:mt-4 items-center justify-between relative w-full bg-[url('/images/bg.jpeg')] bg-cover bg-[position:-0%]">
            {/* Blurred Circle - Left */}
            <div className="absolute left-0 opacity-[0.8] z-10">
                <BlurredCircle />
            </div>

            {/* Blurred Circle - Right */}
            <div className="absolute right-0 opacity-[0.8] scale-x-[-1] z-10">
                <BlurredCircle />
            </div>

            <div className="bg-gradient-to-b from-black/90 via-black/0 to-black/90 absolute w-full h-full z-0"></div>
            <div className="bg-gradient-to-r from-black/80 via-black/0 to-black/80 absolute w-full h-full z-0"></div>

            <div className="max-w-screen-xl flex flex-row z-[10] items-center justify-between w-full px-7 sm:px-12 py-8 sm:py-12 md:py-16 mx-auto">
                {/* Text Section - Left Side */}
                <div className="max-w-xl text-left bg-gradient-to-r from-black/20 via-black/0 to-black/10 backdrop-blur-lg p-8 lg:p-12 rounded-xl border border-blue-400/20">
                    <h2 className="text-3xl lg:text-5xl font-semibold w-full leading-tight">
                        <GradientText>Scan. Analyze. Optimize.</GradientText>
                    </h2>
                    <h3 className="text-2xl lg:text-4xl font-semibold w-full leading-tight text-white mt-2">
                        Your PC's Health, Decoded by AI
                    </h3>
                    <p className="text-gray-400 mt-6 text-sm sm:text-base mb-8">
                        Get detailed health reports of your CPU and GPU in seconds.
                        Powered by intelligent diagnostics and real-time analysis.
                    </p>
                    <Link
                        href="/login"
                        className="mt-8 bg-[#7B8CE5] px-4 sm:px-6 py-2 sm:py-3 text-white font-semibold hover:bg-blue-600 transition rounded-full"
                    >
                        START →
                    </Link>
                </div>

                {/* Image Section - Right Side */}
                <div className="hidden md:flex items-center justify-center">
                    <div className="relative w-64 lg:w-80 h-64 lg:h-80">
                        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js"></script>
                        <spline-viewer url="https://prod.spline.design/PC9oBOwOaGpJzB0b/scene.splinecode"></spline-viewer>
                    </div>
                </div>
            </div>
        </section>
    );
}
