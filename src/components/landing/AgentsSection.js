import Link from "next/link";
import GradientText from "../ui/GradientText";
import BlurredCircleLeft from "../ui/BlurredCircleLeft";
import GlowEffect from "../ui/GlowEffect";

export default function AgentsSection() {
    const agents = [
        {
            id: "1",
            name: "Nova - AI Assistant",
            role: "AI Assistant",
            description:
                "Key Features:\n" +
                "• Matches components based on real specs\n" +
                "• Helps avoid bottlenecks and compatibility issues\n" +
                "• Saves time when upgrading or building\n" +
                "CTA (optional): [Try Compatibility Bot]",
            image: "images/Sophia.png",
            glowColor: "#68E4FF",
        },
        {
            id: "2",
            name: "Lumi - Sales Strategist",
            role: "Sales Strategist",
            description:
                "Key Features:\n" +
                "• Hardware health scoring\n" +
                "• Alerts for overheating, aging parts, etc.\n" +
                "• Personalized recommendations to improve performance\n" +
                "CTA: [Scan My PC]",
            image: "images/Phone.png",
            glowColor: "#DC75F5",
        },
        {
            id: "3",
            name: "Neon - eCommerce Expert",
            role: "eCommerce Expert",
            description:
                "Key Features:\n" +
                "• Real-time market-based pricing\n" +
                "• Upgrade suggestions for your goals\n" +
                "• Cost vs. performance breakdown\n" +
                "CTA: [Estimate Value]",
            image: "images/Business.png",
            glowColor: "#68E4FF",
        },
    ];

    return (
        <>
            <section className="py-8 mt-32 md:mt-8 sm:mt-0 sm:py-12 flex z-50 items-center justify-center md:py-32">
                <div className="max-w-screen-xl px-7 sm:px-8 md:px-12 lg:px-20 w-full flex flex-col items-center justify-center gap-12">
                    <h1 className="text-2xl md:text-4xl text-center lg:text-3xl max-w-[750px] font-medium">
                        The Next Generation of AI Workforce, Tailored to Your business.
                        Transforming Work into Effortless Efficiency.
                    </h1>
                    <div className="w-[40%] lg:mt-4 h-[1px] bg-gradient-to-r from-purple-400 via-blue-500 to-green-300"></div>
                </div>
            </section>

            <section
                id="agents"
                className="py-0 sm:py-12 flex items-center justify-center md:py-0 relative lg:mb-8"
            >
                <div className="absolute left-0 opacity-90">
                    <BlurredCircleLeft />
                </div>

                <div className="bg-black flex-col max-w-screen-xl w-full flex justify-center items-center">
                    <h2 className="text-4xl text-center lg:text-6xl font-semibold w-full leading-tight">
                        <GradientText>Our Agents</GradientText>
                    </h2>
                    <div className="relative flex items-center justify-center mt-8 md:mt-32 md:mb-32">
                        <div className="relative flex o w-full flex-col items-center justify-center">
                            <div className="flex flex-col lg:flex-row gap-6 transition-transform duration-500">
                                {agents.map((agent, i) => (
                                    <div
                                        key={agent.name}
                                        className={`relative w-[350px] lg:w-[360px] p-6 rounded-xl shadow-lg ${i === 0 ? "lg:-translate-x-8" : ""
                                            } ${i === 1
                                                ? "lg:scale-[1.2] lg:z-10 lg:shadow-3xl lg:shadow-blue-700/20 lg:w-[350px]"
                                                : "w-[320]"
                                            } ${i === 2 ? "lg:translate-x-8" : ""}`}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t rounded-xl from-blue-800/20 to-purple-900/10 border border-teal-100/10"></div>
                                        <div className="relative flex flex-col justify-between h-full z-10">
                                            <div className="relative mt-12">
                                                <img
                                                    src={agent.image}
                                                    alt={agent.name}
                                                    className="mx-auto h-48 z-[100]"
                                                />
                                                <div className="absolute top-0 left-0 -z-[10] opacity-70 scale-125 translate-x-4 -translate-y-2">
                                                    <GlowEffect color={agent.glowColor} />
                                                </div>
                                            </div>
                                            <h4 className="text-xl font-semibold text-white mt-16">
                                                {agent.name}
                                            </h4>
                                            <p className="text-white font-medium mt-4">
                                                {agent.role}
                                            </p>
                                            <p className="text-gray-400 text-md mt-6">
                                                {agent.description}
                                            </p>

                                            <p className="text-4xl text-white mt-8">
                                                ${agent.price}{" "}
                                                <span className="text-xl text-gray-500">/ month</span>
                                            </p>
                                            {agent.id === "1" ? (
                                                <Link href="/sign-in">
                                                    <p className="bg-[#7b8de570] text-center w-full px-6 py-2 rounded-lg mt-6 text-white transition-all duration-300 hover:bg-indigo-600 hover:scale-105">
                                                        Get the Agent
                                                    </p>
                                                </Link>
                                            ) : (
                                                <button className="bg-[#7b8de570] self-end w-full px-6 py-2 rounded-lg mt-6 text-white transition-all duration-300 hover:bg-indigo-600 hover:scale-105">
                                                    Coming Soon
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
