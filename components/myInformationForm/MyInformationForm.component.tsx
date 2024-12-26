"use client";

import { MyInformationForm } from "@/utils/types";
import React, { useState } from "react";
import Button from "../ui/Button";
import { toast } from "react-toastify";
import axiosInstance from "@/utils/axiosInstance";
import useFormFields from "@/hooks/useMyInformationFields";

const MyInformationForm = () => {
  const defaultForm: MyInformationForm = {
    summary: "",
    headline: "",
    national_id_file: null,
    preferred_job_title: "",
    preferred_sector: "",
    preferred_functional_area: "",
    highest_education: "",
    years_of_experience: "",
    experience_level: "",
    current_monthly_salary: "",
    expected_monthly_salary: "",
    marital_status: "",
    nationality_id: "",
    gender: "",
    residence_status: "",
    national_id_text: "",
    birth_date: "",
    driving_license_type: "",
    health_issue_id: "",
    jobs_interested_in: "",
  };
  const [form, setForm] = useState<MyInformationForm>(defaultForm);
  const formFields = useFormFields();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const handleChange = (name: string, value: any) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("summary", form.summary);
    formData.append("national_id_file", form.national_id_file!);
    formData.append("preferred_job_title", form.preferred_job_title!);
    formData.append("preferred_sector", form.preferred_sector!);
    formData.append(
      "preferred_functional_area",
      form.preferred_functional_area!
    );
    formData.append("highest_education", form.highest_education!);
    formData.append("years_of_experience", form.years_of_experience!);
    formData.append("experience_level", form.experience_level!);
    formData.append("current_monthly_salary", form.current_monthly_salary!);
    formData.append("expected_monthly_salary", form.expected_monthly_salary!);
    formData.append("marital_status", form.marital_status!);
    formData.append("nationality_id", form.nationality_id!);
    formData.append("gender", form.gender!);
    formData.append("residence_status", form.residence_status!);
    formData.append("national_id", form.nationality_id!);
    formData.append("birth_date", form.birth_date!);
    formData.append("driving_license_type", form.driving_license_type!);
    formData.append("health_issue_id", form.health_issue_id!);
    formData.append("jobs_interested_in", form.jobs_interested_in!);

    setIsLoading;

    try {
      const { data } = await axiosInstance.post(
        "/job-seeker/profile/basic-information",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(data.message);
      setForm(defaultForm);
      setError(null);
    } catch (error: any) {
      setError(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="max-w-[700px] w-full p-6 bg-white border border-gray-200 mx-auto my-5">
      <h1 className="text-xl font-bold text-primary-500 mb-7 uppercase">
        My Information
      </h1>

      <form onSubmit={handleSubmit}>
        {/* summary */}
        <div className="mb-4">
          <label
            htmlFor="summary"
            className="text-lg font-extrabold mb-2 block uppercase"
          >
            Summary
          </label>
          <textarea
            id="summary"
            placeholder="Type here"
            className="w-full h-24 p-2 border border-gray-200 rounded-sm resize-none"
          ></textarea>
        </div>

        {/* info */}
        <h3 className="text-lg font-bold mb-3 uppercase">My Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 mb-5">
          {formFields.map((field, i) => {
            const Component = field.component;
            const fieldValue = form[field.name as keyof MyInformationForm];

            return (
              <div
                className={`flex-1 ${
                  i === 0 || i === formFields.length - 1 ? "col-span-2" : ""
                }`}
                key={field.name}
              >
                <Component
                  id={field.name}
                  label={field.label}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={fieldValue as any}
                  onChange={(e: any) =>
                    handleChange(
                      field.name,
                      field.type === "file" ? e.target.files[0] : e.target.value
                    )
                  }
                  options={field.options}
                />
              </div>
            );
          })}
        </div>
        <Button
          label="Save"
          className="ml-auto tracking-widest"
          type="submit"
          disabled={isLoading}
        />
        {error && (
          <p className="text-red-500 text-sm text-center transition-all my-3">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default MyInformationForm;
