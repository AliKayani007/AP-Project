"use client";

import { Button } from "@/components/ui/Button"; // No need for 'type'
import { useFormStatus } from "react-dom";

export function SubmitButton({
    children,
    pendingText = "Submitting...",
    ...props
}) {
    const { pending } = useFormStatus(); // React's form status hook

    return (
        <Button type="submit" aria-disabled={pending} {...props}>
            {pending ? pendingText : children}
        </Button>
    );
}
