import "@/styles/globals.css";
import Navbar from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AuthProvider } from "@/context/auth-context"; // ✅ Import the AuthProvider

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      {" "}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}
