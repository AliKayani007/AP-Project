
import { MessageCircle, Globe, Send, Users } from "lucide-react";

const features = [
    {
        icon: <MessageCircle className="w-6 h-6 sm:w-10 sm:h-10 text-white" />,
        title: "24/7 AI Agents",
        description:
            "AI-powered agents handle customer queries about PC.",
    },
    {
        icon: <Globe className="w-6 h-6 sm:w-12 sm:h-12 text-white" />,
        title: "Market Insights",
        description:
            "AI agents that adapt to market and business for customer needs.",
    },
    {
        icon: <Send className="w-6 h-6 sm:w-10 sm:h-10 text-white" />,
        title: "Reports Generator",
        description: "Easy understanding of component condition.",
    },
    {
        icon: <Users className="w-6 h-6 sm:w-10 sm:h-10 text-white" />,
        title: "Market",
        description:
            "AI agents improve over time, learning from past interactions.",
    },
];

export default function IntegrationFeatures() {
    return (
        <section
            id="features"
            className="relative py-16 md:py-24 text-white px-7 sm:px-8 md:px-12 w-full lg:px-20 h-auto overflow-hidden"
        >
            {/* Heading */}
            <div className="text-center flex flex-col items-center justify-center w-full mx-auto">
                <h2 className="text-4xl lg:text-6xl max-w-4xl font-semibold w-full leading-tight">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-200 to-pink-300 text-transparent bg-clip-text">
                    Tailored to Your PC, Just Like a Personal Technician.
                    </span>
                </h2>

                <p className="text-gray-400 max-w-2xl mt-4 lg:mt-8 text-sm sm:text-base text-center">
                Clear Parts learns the details of your system—analyzing your exact CPU, GPU, and hardware setup to deliver personalized insights, upgrades, and reports.
                </p>
            </div>

            {/* Feature Cards */}
            <div className="relative w-full h-auto mt-8 sm:mt-12 flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-5xl px-4 sm:px-0">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 p-4 sm:p-5 rounded-xl shadow-md flex items-center gap-3 sm:gap-4 min-w-[260px] hover:scale-105 transition duration-300 whitespace-nowrap"
                        >
                            {feature.icon}
                            <div>
                                <h4 className="text-base sm:text-lg font-semibold">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-400 text-xs sm:text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
