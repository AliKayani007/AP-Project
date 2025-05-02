import { useRouter } from "next/router";
import BlurredCircle from "@/components/ui/BlurredCircle";
import ContactForm from "@/components/forms/contact/ContactForm";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center bg-black px-4 py-10 relative">
      <div className="absolute left-0 opacity-[0.8]">
        <BlurredCircle />
      </div>
      <div className="absolute right-0 opacity-[0.8] scale-x-[-1]">
        <BlurredCircle />
      </div>
      <div className="w-full max-w-screen-xl mx-auto z-50 mt-20">
        {/* Main Content */}
        <div className="text-center flex items-center justify-center w-full flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-normal text-white">
            Custom - Tailored to Your Needs
          </h2>
          <p className="mt-2 text-base md:text-lg font-normal text-[#ADADAD] max-w-3xl text-center">
          Need a PC built specifically for your use case? Tell us what you need, and we’ll provide you assistance in designing to fit your exact workflow.
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
