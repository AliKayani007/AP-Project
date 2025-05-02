import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQs = [
    {
        question: "How does the AI adapt to my PC needs?",
        answer:
            "The AI adapts by analyzing your need and demand.",
    },
    {
        question: "What tools does your platform use for scans?",
        answer:
            "Our platform uses trusted famous third party tools like cinebench,crystalmark for scans.",
    },
    {
        question: "Can I customize my PC?",
        answer:
            "Yes, you can customize your PC through the platform's AI-driven features.",
    },
    {
        question: "How do I get started with Clear Parts?",
        answer:
            "Click on 'Get Started,' log in, and you'r ready to go!",
    },
    {
        question: "What kind of support do you offer?",
        answer:
            "Scanning, Suggestions and Guidence!",
    },
];
export default function FAQSection() {
    const [faqOpen, setFaqOpen] = useState(null);

    return (
        <section className="py-12 px-7 sm:px-8 md:px-12 lg:px-20 bg-black text-white relative">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-10 z-10">
                <div className="md:w-1/2">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                        Questions & Answers.
                    </h3>
                    <p className="mt-2 text-gray-400 text-sm sm:text-base">
                        Learn more about Clear Parts
                    </p>
                </div>
                <div className="md:w-1/2 space-y-3 sm:space-y-4 duration-200 ease-in-out transition-all">
                    {FAQs.map((faq, index) => (
                        <div key={index} className="bg-gray-900 rounded-lg">
                            <button
                                className="w-full flex justify-between items-center p-4 text-left"
                                onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                            >
                                <span className="text-sm sm:text-base">{faq.question}</span>
                                {faqOpen === index ? (
                                    <ChevronUp className="text-gray-400 w-5 h-5" />
                                ) : (
                                    <ChevronDown className="text-gray-400 w-5 h-5" />
                                )}
                            </button>
                            {faqOpen === index && (
                                <p className="p-4 text-gray-300 text-sm sm:text-base">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
