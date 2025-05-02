export default function ChatbotLayout({ children }) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
        <header className="mb-6 border-b border-gray-700 pb-4">
          <h2 className="text-xl font-semibold">🧠 Chatbot Playground</h2>
        </header>
        <main>{children}</main>
      </div>
    );
  }
  