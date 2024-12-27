"use client";

import axiosInstance from "@/utils/axiosInstance";
import { AuthContextType, ProviderProps } from "@/utils/types/auth";
import Cookies from "universal-cookie";
import { createContext } from "react";

const initialState: AuthContextType = {
  signOut: () => {},
};

export const AuthContext = createContext(initialState);

export const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
  // handle sign out
  const signOut = async () => {
    const res = await axiosInstance.post("/auth/logout");

    console.log(res, "res");
    const cookies = new Cookies(null, {
      path: "/",
    });

    const allCookies = cookies.getAll();
    cookies.remove("token");

    Object.keys(allCookies).forEach((cookieName) => {
      cookies.remove(cookieName);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
