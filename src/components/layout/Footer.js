import Link from "next/link";

export default function Footer() {
    return (
        <footer className=" bg-black text-gray-300 text-base">
            <div className=" p-10 mx-auto max-w-screen-xl flex flex-wrap flex-row items-center justify-between gap-8">
                <div className=" w-fit">
                    <h4 className="text-white font-bold mb-3 text-lg">Company</h4>
                    <ul className="space-y-2 text-base">
                        <li>
                            {" "}
                            <Link href="/#about">About</Link>
                        </li>
                        <li>
                            {" "}
                            <Link href="/#features">Features</Link>
                        </li>
                        <li>
                            {" "}
                            <Link href="/pricing">Pricing</Link>
                        </li>
                        <li>
                            {" "}
                            <Link href="/pricing">Agents</Link>
                        </li>
                    </ul>
                </div>
                {/* <div className="w-fit">
          <h4 className="text-white font-bold mb-3 text-lg ">Resources</h4>
          <ul className="space-y-2 text-base">
            <li>Case Studies</li>
            <li>Webinars</li>
            <li>Developer</li>
            <li>Documentation</li>
          </ul>
        </div> */}
                <div className="w-fit">
                    <h4 className="text-white font-bold mb-3 text-lg">App</h4>
                    <ul className="space-y-2 text-base">
                        <li>
                            {" "}
                            <Link href="/sign-in">Sign In</Link>
                        </li>
                        <li>
                            {" "}
                            <Link href="/sign-up">Sign Up</Link>
                        </li>
                        <li>
                            {" "}
                            <Link href="/contact-us">Contact us</Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>

                {/* Email Subscription Section */}
             
            </div>

        </footer>
    );
}
