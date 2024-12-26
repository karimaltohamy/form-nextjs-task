"use client";

import React, { useState } from "react";
import InputBase from "../ui/InputBase";
import { IoMailOutline } from "react-icons/io5";
import Button from "../ui/Button";
import { SignUpForm } from "@/utils/types/auth";
import axiosInstance from "@/utils/axiosInstance";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const defaultForm: SignUpForm = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };
  const [form, setForm] = useState<SignUpForm>(defaultForm);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.password !== form.password_confirmation) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      const { data } = await axiosInstance.post("/job-seeker/register", form);
      toast.success(data.message);
      setForm(defaultForm);
      setError(null);
      router.push("/auth/login");
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
        Sign Up
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 mb-5">
        <div className="input_container">
          <InputBase
            label="First Name"
            name="first_name"
            type="text"
            placeholder="John"
            required
            value={form.first_name}
            onChange={(e) => setForm({ ...form, first_name: e.target.value })}
          />
        </div>
        <div className="input_container">
          <InputBase
            label="Last Name"
            name="last_name"
            type="text"
            placeholder="Doe"
            required
            value={form.last_name}
            onChange={(e) => setForm({ ...form, last_name: e.target.value })}
          />
        </div>
        <div className="input_container col-span-2">
          <InputBase
            label="Email Address"
            name="email"
            type="email"
            placeholder="info@example.com"
            required
            icon={<IoMailOutline size={20} className="text-gray-400" />}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="input_container">
          <InputBase
            label="Password"
            name="password"
            type="password"
            placeholder="********"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <div className="input_container">
          <InputBase
            label="Confirm Password"
            name="confirm_password"
            type="password"
            placeholder="********"
            required
            value={form.password_confirmation}
            onChange={(e) =>
              setForm({ ...form, password_confirmation: e.target.value })
            }
          />
        </div>
      </div>
      <Button
        label={isLoading ? "Loading..." : "Sign Up"}
        className="mx-auto tracking-widest"
        type="submit"
        disabled={isLoading}
      />
      {error && (
        <p className="text-red-500 text-sm text-center transition-all">
          {error}
        </p>
      )}
    </form>
  );
};

export default SignUpForm;
