import { useRouter } from "next/router";
import { useAuth } from "@/context/auth-context";

export const useRequireAuth = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      
      router.push("/login");
    }
  }, [user, loading, router]);


  return { user, loading };
};
