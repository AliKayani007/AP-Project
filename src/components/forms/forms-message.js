// components/forms/forms-message.js
"use client";

export function FormMessage({ message = {} }) {
  if (!message || (!message.success && !message.error && !message.message)) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2 w-full max-w-md text-sm">
      {message?.success && (
        <div className="text-white border-l-2 border-white px-4">
          {message.success}
        </div>
      )}
      {message?.error && (
        <div className="text-white border-l-2 border-white px-4">
          {message.error}
        </div>
      )}
      {message?.message && (
        <div className="text-white border-l-2 border-white px-4">
          {message.message}
        </div>
      )}
    </div>
  );
}
