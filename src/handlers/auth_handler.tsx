import { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useLocation, useNavigate } from "react-router";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase_config";


import type { User } from "@/types";
import { Loaderpage } from "@/routes/loader-page";

const AuthHandler = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storeUserData = async () => {
      if (isSignedIn && user) {
        setLoading(true);
        try {
          const userSnap = await getDoc(doc(db, "users", user.id));

          if (!userSnap.exists()) {
            const userData: User = {
              id: user.id,
              name: user.fullName || user.firstName || "Anonymous",
              email: user.primaryEmailAddress?.emailAddress || "",
              imageUrl: user.imageUrl,
              createdAt: serverTimestamp(),
              updateAt: serverTimestamp(),
            };

            await setDoc(doc(db, "users", user.id), userData);
          }
        } catch (error) {
          console.log("Error on storing user data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    storeUserData();
  }, [isSignedIn, user, pathname, navigate]);

  if (loading) {
    return <Loaderpage/>;
  }

  return null;
};

export default AuthHandler;