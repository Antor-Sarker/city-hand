"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);

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
          // should implement log out
          setAccessToken(null);
          throw new Error("auth error");
        }

        const data = await res.json();
        setAccessToken(data.accessToken);
      } catch (error) {
        setAccessToken(null);
        console.log("auth error");
      }
    };
    refreshToken();
  }, []);

  const saveToken = (token) => {
    setAccessToken(token);
  };

  return (
    <AuthContext.Provider value={{ accessToken, saveToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
