"use client";

import { MyInformationForm } from "@/utils/types";
import React, { startTransition, useActionState } from "react";
import Button from "../ui/Button";
import useFormFields from "@/hooks/useMyInformationFields";
import { useFormState } from "react-dom";
import { saveMyInformation } from "@/serverActions/myInformationActions";

const initialState: any = {};

const MyInformationForm = () => {
  const formFields = useFormFields();
  const [formState, formAction] = useFormState(saveMyInformation, initialState);

  return (
    <form
      action={formAction}
      className="max-w-[700px] w-full p-6 bg-white border border-gray-200 mx-auto my-5"
    >
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
          name="summary"
          placeholder="Type here"
          className="w-full h-24 p-2 border border-gray-200 rounded-sm resize-none"
        ></textarea>
        {formState?.summary && (
          <p className="text-red-500 text-[13px] mt-2">{formState?.summary}</p>
        )}
      </div>

      {/* info */}
      <h3 className="text-lg font-bold mb-3 uppercase">My Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 mb-5">
        {formFields.map((field, i) => {
          const Component = field.component;

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
                options={field.options}
                errMes={formState?.[field.name]}
              />
            </div>
          );
        })}
      </div>
      <Button label="Save" className="ml-auto tracking-widest" type="submit" />
    </form>
  );
};

export default MyInformationForm;
