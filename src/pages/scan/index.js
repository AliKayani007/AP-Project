import { useState } from "react";
import { useRouter } from "next/router";
import BlurredCircle from "@/components/ui/BlurredCircle"; // Ensure you have the BlurredCircle component
import Link from "next/link";

export default function Scan() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    // Function to handle the download of third-party app for scanning
    const handleScanOption = async (scanType) => {
        setLoading(true);
        
        // Simulate the download and scan process (replace with actual logic)
        setTimeout(() => {
            // After the scan is done, navigate to the results page
            router.push(`/scan/results?type=${scanType}`);
        }, 2000);  // Simulate 2 seconds of download time
    };

    return (
        <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-black/90 via-black/0 to-black/90 text-white relative">
            {/* Blurred circles on sides */}
            <div className="absolute left-0 opacity-80">
                <BlurredCircle />
            </div>
            <div className="absolute right-0 opacity-80 scale-x-[-1]">
                <BlurredCircle />
            </div>

            {/* Content */}
            <div className="w-full max-w-screen-xl mx-auto z-50 mt-20 px-6">
                {/* Instructions */}
                <div className="mb-8 text-white">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-4">
                        Scan Your PC and Get Instant Insights
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Choose a scan option below to analyze your system. Each scan option will guide you through downloading the necessary software to run diagnostics and generate detailed reports.
                    </p>
                </div>

                {/* Transparent Box with Options */}
                <div className="bg-black/40 backdrop-blur-md p-8 rounded-xl shadow-lg">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-semibold text-white mb-4">Select a Scan Option</h3>
                        <p className="text-base text-gray-400">Click on an option to begin scanning your system.</p>
                    </div>

                    {/* Scan Options with Descriptions */}
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <div className="text-center">
                            <button
                                onClick={() => handleScanOption("cpu")}
                                className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-500 transform hover:scale-105"
                            >
                                Scan CPU
                            </button>
                            <p className="text-gray-400 mt-2 text-sm">This will use XYZ software to check your CPU health and performance.</p>
                        </div>

                        <div className="text-center">
                            <button
                                onClick={() => handleScanOption("gpu")}
                                className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-500 transform hover:scale-105"
                            >
                                Scan GPU
                            </button>
                            <p className="text-gray-400 mt-2 text-sm">This will use ABC tool to analyze your GPU performance and stability.</p>
                        </div>

                        <div className="text-center">
                            <button
                                onClick={() => handleScanOption("storage")}
                                className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-500 transform hover:scale-105"
                            >
                                Scan Storage
                            </button>
                            <p className="text-gray-400 mt-2 text-sm">Check your storage device’s health and available space with this scan.</p>
                        </div>

                        <div className="text-center">
                            <button
                                onClick={() => handleScanOption("battery")}
                                className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-500 transform hover:scale-105"
                            >
                                Scan Battery
                            </button>
                            <p className="text-gray-400 mt-2 text-sm">Analyze battery health and charging cycles for optimal performance.</p>
                        </div>
                    </div>
                </div>

                {loading && (
                    <p className="mt-6 text-lg text-gray-400">Downloading and scanning...</p>
                )}
            </div>
        </section>
    );
}
