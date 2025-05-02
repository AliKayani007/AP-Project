import { Loader2Icon } from "lucide-react";

export default function LoadingSpinner() {
    return (
        <div className="py-32 flex items-center justify-center">
            <Loader2Icon className="w-12 h-12 text-white animate-spin" />
        </div>
    );
}