import { LayoutGridIcon } from "lucide-react";

export default function PageHeader({ title }) {
    return (
        <div className="flex justify-between items-center w-full mt-8 mb-12">
            <h1 className="text-3xl font-semibold text-white flex items-center gap-2">
                <LayoutGridIcon className="w-6 h-6" />
                {title}
            </h1>
        </div>
    );
}

