import BlurredCircle from "../ui/BlurredCircle";

export default function AvailabilitySection() {
    return (
        <section className="py-8 sm:py-12 md:py-32 gap-32 flex items-center justify-center relative">
            <div className="absolute right-0 opacity-90 -z-0">
                <BlurredCircle />
            </div>
            <div className="max-w-screen-xl items-center justify-between z-10 flex flex-col lg:flex-row w-full gap-12 px-7 sm:px-8 md:px-12 lg:px-20">
                <div className="max-w-4xl flex items-center justify-center flex-col text-center md:text-left w-full">
                    <h3 className="text-2xl sm:text-2xl md:text-3xl w-full font-semibold text-center">
                        <span className="bg-gradient-to-r from-blue-300 via-purple-200 to-pink-200 text-transparent bg-clip-text">
                            A Tireless Workforce, Always on Duty.
                        </span>
                    </h3>
                    <p className="text-gray-300 max-w-xl mt-4 text-sm sm:text-base text-center font-light">
                        <span className="font-semibold">Available 24/7,</span> our
                        Al-powered agents work{" "}
                        <span className="font-semibold">around the clock,</span> so you
                        don't have to.{" "}
                        <span className="font-semibold">
                            Automate reports, enhance customer expirience,
                        </span>{" "}
                        and efficienct guidence while{" "}
                        <span className="font-semibold">saving valuable time.</span>{" "}
                    </p>

                    <p className="text-gray-300 max-w-xl text-sm sm:text-base font-light text-center mt-8">
                        Break barriers and scale globally with Al that speaks, understands,
                        and delivers in{" "}
                        <span className="font-semibold">for local markets.</span>{" "}
                    </p>
                    <p className="text-gray-300 max-w-xl text-sm sm:text-base font-light mt-8">
                        {"    "}
                    </p>
                    <h3 className="text-2xl sm:text-2xl md:text-3xl text-center font-semibold">
                        <span className="bg-gradient-to-r from-blue-300 via-purple-200 to-pink-200 text-center text-transparent bg-clip-text">
                        Your PC expert, always ready to help.
                        </span>
                    </h3>
                    <p className="text-gray-300 max-w-xl mt-4 text-sm sm:text-base text-center font-light">
                        Whether <span className="font-semibold">you're building, upgrading, or diagnosing</span> our AI bots are on standby to deliver instant insights and recommendations, any time, day or night.
                    </p>
                </div>

                {/* Right Content */}
                <div className="w-full flex md:items-end md:justify-end gap-2 z-10 md:gap-6 flex-col max-w-fit">
                    <div className="fleex flex-col gap-6 h-full items-center justify-center">
                        <h2 className="text-center text-8xl md:text-[150px] z-10 font-bold bg-gradient-to-r from-purple-500 via-blue-300 to-teal-300 text-transparent bg-clip-text">
                            24/7
                        </h2>
                        <p className="text-center text-lg md:text-2xl mt-4">Availability</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
