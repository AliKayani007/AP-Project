import { useEffect, useState } from "react";
import BlurredCircle from "@/components/ui/BlurredCircle";
import { useRouter } from "next/router";
import EditProfileForm from "@/components/forms/user/EditProfileForm";
import { useAuth } from "@/context/auth-context";
export default function UserProfilePage() {
  const [showEditForm, setShowEditForm] = useState(false);
  const { user, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="min-h-screen bg-black relative overflow-hidden top-20">
      {/* 💫 Blurred Circles */}
      <div className="absolute left-[-10%] top-[10%] opacity-60">
        <BlurredCircle />
      </div>
      <div className="absolute right-[-10%] bottom-[10%] opacity-60 scale-x-[-1]">
        <BlurredCircle />
      </div>

      {/* 🧊 Center Box */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-6 flex justify-center items-center">
        <main className="w-full max-w-2xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 shadow-xl ring-1 ring-white/10">
          <h1 className="text-3xl font-bold text-white mb-10 text-center drop-shadow">
            User Dashboard
          </h1>

          <ul className="space-y-10 text-center">
            <li>
              <h2 className="text-2xl lg:text-3xl font-medium">
                <a href="/user-profile/favourites">
                  <span className="bg-gradient-to-r from-blue-500 via-purple-200 to-pink-300 text-transparent bg-clip-text">
                    ⭐ Favourite Products
                  </span>
                </a>
              </h2>
            </li>
            <li>
              <h2 className="text-2xl lg:text-3xl font-medium">
                <a href="/user-profile/post-product">
                  <span className="bg-gradient-to-r from-blue-500 via-purple-200 to-pink-300 text-transparent bg-clip-text">
                    📤 Post a Product
                  </span>
                </a>
              </h2>
            </li>
            <li>
              <h2 className="text-2xl lg:text-3xl font-medium">
                <a href="/user-profile/my-products">
                  <span className="bg-gradient-to-r from-blue-500 via-purple-200 to-pink-300 text-transparent bg-clip-text">
                    🛠️ My Products
                  </span>
                </a>
              </h2>
            </li>
          </ul>

          {/* <div className="text-center mt-12">
            <button
              onClick={() => setShowEditForm((prev) => !prev)}
              className="px-6 py-2 rounded bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:brightness-110 transition"
            >
              {showEditForm ? "Close Edit Form" : "Edit Profile"}
            </button>

            {showEditForm && <EditProfileForm />}
          </div> */}
        </main>
      </div>
    </div>
  );
}
