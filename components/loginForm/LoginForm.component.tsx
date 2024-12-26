"use client";

import React, { useState } from "react";
import InputBase from "../ui/InputBase";
import Link from "next/link";
import Button from "../ui/Button";
import { IoMailOutline, IoPersonOutline } from "react-icons/io5";
import { LoginForm } from "@/utils/types/auth";
import axiosInstance from "@/utils/axiosInstance";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";

const LoginForm = () => {
  const defaultForm: LoginForm = {
    email: "",
    password: "",
  };
  const [form, setForm] = useState<LoginForm>(defaultForm);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const router = useRouter();
  const cookies = new Cookies();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const { data } = await axiosInstance.post("/auth/login", form);
      cookies.set("token", data.data.access_token, {
        path: "/",
        expires: new Date(data.data.expires_at),
        maxAge: 7 * 24 * 60 * 60,
        sameSite: "strict",
      });

      toast.success(data.message);
      setForm(defaultForm);
      setError(null);
      router.push("/");
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="max-w-[600px] w-full p-6 bg-white border border-gray-200"
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl font-bold text-primary-500 mb-4 uppercase">
        Login
      </h3>

      <InputBase
        label="Email Address"
        name="email"
        type="email"
        placeholder="info@example.com"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
        icon={<IoMailOutline size={20} className="text-gray-400" />}
      />
      <InputBase
        label="Password"
        name="password"
        type="password"
        placeholder="********"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
      />
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <input type="checkbox" name="remember_me" id="remember_me" />
          <label htmlFor="remember_me" className="text-primary-500">
            Remember me
          </label>
        </div>

        <p className="text-center text-sm text-primary-500">
          <Link href={"/forgot-password"}>Forgot password?</Link>
        </p>
      </div>

      <Button
        label={isLoading ? "Loading..." : "Login"}
        className="mx-auto tracking-widest"
        type="submit"
        disabled={isLoading}
      />

      {error && (
        <p className="text-red-500 text-sm text-center transition-all my-3">
          {error}
        </p>
      )}
      <div className="flex items-center gap-2 mt-5">
        <hr className="flex-1" />
        <span className="text-primary-500 text-sm">Don't have an account?</span>
        <hr className="flex-1" />
      </div>

      <Link
        href={"/auth/sign-up"}
        className="p-5 bg-primary-50 border border-gray-200 flex flex-col items-center justify-center mt-5"
      >
        <IoPersonOutline size={30} className="text-primary-500" />
        <h4
          className={
            "text-primary-500 text-center mt-2 uppercase tracking-widest"
          }
        >
          Job Seeker
        </h4>
      </Link>
    </form>
  );
};

export default LoginForm;
