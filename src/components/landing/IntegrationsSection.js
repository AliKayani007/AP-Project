// IntegrationSection.jsx
"use client";
import { useState } from "react";
import BlurredCircleLeft from "../ui/BlurredCircleLeft";

export default function IntegrationSection() {
    const integrationTools = [
        { name: "Whatsapp", logo: "images/whatsapp.png" },
        { name: "Instagram", logo: "images/instagram.png" },
        { name: "Shopify", logo: "images/shopify.png" },
        { name: "Wix", logo: "images/wix.png" },
        { name: "telegram", logo: "images/telegram.png" },
        { name: "wordpress", logo: "images/wordpress (1).png" },
        { name: "Facebook", logo: "images/communication.png" },
        { name: "Webflow", logo: "images/Webflow.svg" },
    ];

    return (
        <section className="text-white py-16 md:py-32 flex items-center justify-center w-full relative">
            <div className="absolute left-0 opacity-90 -z-0">
                <BlurredCircleLeft />
            </div>
            <div className="max-w-screen-xl px-7 sm:px-8 md:px-12 lg:px-20 w-full z-10">
                <div className="text-center md:text-left items-center justify-center flex flex-col w-full mx-auto">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl text-center max-w-3xl">
                    Seamlessly compare prices from different sites in one go.
                    </h3>
                    <p className="text-gray-400 mt-4 md:mt-6 text-center text-sm sm:text-base max-w-2xl">
                    Get smart price comparisons on your desire component by comparing in the market rate.
                    </p>
                </div>

                {/* Grid Layout for Logos */}
                <div className="grid grid-cols-2 sm:grid-cols-3 bg-gradient-to-tr from-purple-400/30 via-blue-600/40 to-teal-300/20 p-[1px] md:grid-cols-4 gap-[1px] w-full mt-8 sm:mt-16 mx-auto">
                    {integrationTools.map((tool) => (
                        <div
                            key={tool.name}
                            className="p-4 sm:p-6 bg-black flex items-center flex-col gap-3 justify-center"
                        >
                            <img
                                src={tool.logo}
                                alt={tool.name}
                                className="size-6 sm:size-8 md:size-16 rounded-lg"
                            />
                            <span className="tracking-wide">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
