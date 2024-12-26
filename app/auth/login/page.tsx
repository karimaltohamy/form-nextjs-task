import LoginForm from "@/components/loginForm/LoginForm.component";
import { GetServerSideProps } from "next";
import React from "react";
import Cookies from "universal-cookie";

const page = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-primary-50">
      <LoginForm />
    </div>
  );
};

export default page;
