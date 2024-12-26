"use client";

import React, { useContext } from "react";
import logo from "../../public/images/logo-neom-en-spaced.webp";
import Image from "next/image";
import { IoLogOutOutline } from "react-icons/io5";
import Button from "../ui/Button";
import AuthContext from "@/context/auth.context";
import { useRouter } from "next/navigation";

const Header = () => {
  const { signOut } = useContext(AuthContext);
  const router = useRouter();

  const handleSignOut = () => {
    signOut();

    router.push("/auth/login");
  };

  return (
    <header className="pt-4 border-b border-gray-200">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="image">
            <Image src={logo} alt="logo" width={70} height={70} />
          </div>

          <Button
            label="Logout"
            icon={<IoLogOutOutline size={20} />}
            status="unsuccessful"
            className="!px-4 !text-[13px]"
            onClick={handleSignOut}
            type="button"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
