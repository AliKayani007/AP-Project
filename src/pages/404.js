import { useRouter } from "next/router";
import BlurredCircle from "@/components/ui/BlurredCircle";
import { Button } from "@/components/ui/Button";
import { ArrowLeftIcon } from "lucide-react";

export default function Custom404() {
  const router = useRouter();

  const handleHomeRedirect = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* 💫 Blurred Circles */}
      <div className="absolute left-[-10%] top-[10%] opacity-60">
        <BlurredCircle />
      </div>
      <div className="absolute right-[-10%] bottom-[10%] opacity-60 scale-x-[-1]">
        <BlurredCircle />
      </div>

      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 shadow-xl ring-1 ring-white/10 text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button
          onClick={handleHomeRedirect}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:brightness-110 transition flex items-center gap-2"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Go Back Home
        </Button>
      </div>
    </div>
  );
}
