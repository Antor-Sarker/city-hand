"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);

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
          // should implement log out and not redirect log in
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

  return (
    <AuthContext.Provider value={{ userData,saveUserData }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useUserData = () => useContext(AuthContext);
