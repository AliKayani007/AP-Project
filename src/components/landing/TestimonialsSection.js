"use client";
import { useState } from "react";

const BlurredCircle = () => {
    return (
        <svg
            width="647"
            height="1295"
            viewBox="0 0 647 1295"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
        >
            <g filter="url(#filter0_f_8_1191)">
                <circle
                    cx="647.5"
                    cy="647.5"
                    r="447.5"
                    fill="url(#paint0_radial_8_1191)"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_8_1191"
                    x="0"
                    y="0"
                    width="1295"
                    height="1295"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="100"
                        result="effect1_foregroundBlur_8_1191"
                    />
                </filter>
                <radialGradient
                    id="paint0_radial_8_1191"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(647.5 647.5) rotate(90) scale(447.5)"
                >
                    <stop stopColor="#1B255E" />
                    <stop offset="1" stopColor="#1B255E" stopOpacity="0" />
                </radialGradient>
            </defs>
        </svg>
    );
};

export default function TestimonialSection({testimonials}) {

    return (
        <section className="to-black w-full flex items-center justify-center text-white px-6 py-8 sm:py-12 md:py-32 relative">
            <div className="absolute right-0 opacity-90 -z-0">
                <BlurredCircle />
            </div>
            <div className="bg-gradient-to-b from-gray-900 to-black px-4 sm:px-8 md:px-12 lg:px-20 rounded-2xl py-10 max-w-screen-xl z-10">
                <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 md:mb-12">
                    Trusted by{" "}
                    <span className="bg-gradient-to-r from-purple-500 via-blue-300/80 to-teal-300/70 text-transparent bg-clip-text">
                        World Class
                    </span>{" "}
                    Companies
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-2 sm:mt-10 max-w-4xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-black p-4 sm:p-6 rounded-lg shadow-lg"
                        >
                            <div className="flex flex-row gap-1 items-center">
                                {Array.from({ length: 5 }).map((_, starIndex) => (
                                    <div key={starIndex}>⭐️</div>
                                ))}
                            </div>
                            <p className="text-gray-400 mt-2 text-xs sm:text-sm">
                                "{testimonial.review}"
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                                <div>
                                    <p className="font-semibold text-sm sm:text-base">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-gray-500 text-xs sm:text-sm">
                                        {testimonial.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
