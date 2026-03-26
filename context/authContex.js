"use client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const refreshToken = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/refreshToken`,
          {
            method: "POST",
            credentials: "include",
          },
        );

        if (!res.ok) {
          setUserData(null);
          throw new Error("auth error");
        }

        const data = await res.json();
        setUserData(data);
      } catch (error) {
        setUserData(null);
        console.log("auth error");
      }
    };
    refreshToken();
  }, []);

  const saveUserData = (data) => {
    setUserData(data);
  };

  const logOut = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/logout`,
        {
          method: "POST",
          credentials: "include",
        },
      );

      if (!res.ok) {
        throw new Error("auth error");
      }
      setUserData(null);
      router.push("/login");
    } catch (error) {
      console.log("auth error");
    }
  };

  return (
    <AuthContext.Provider value={{ userData, saveUserData, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useUserData = () => useContext(AuthContext);
