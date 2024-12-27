"use server";

import { FormErrors } from "@/utils/types";
import { z } from "zod";

const myInformationSchema = z.object({
  headline: z.string().min(5, "Headline is too short"),
  preferred_job_title: z.string().min(3, "Preferred Job Title is too short"),
  summary: z.string().min(5, "Preferred Sector is too short"),
});

export const saveMyInformation = async (preveSate: any, formData: any) => {
  const data = Object.fromEntries(formData.entries());

  const validation = myInformationSchema.safeParse(data);

  if (!validation.success) {
    return validation.error.issues.reduce((acc: FormErrors, curr: any) => {
      acc[curr.path[0]] = curr.message;
      return acc;
    }, {});
  } else {
    return {
      success: true,
      data: data,
    };
  }
};
