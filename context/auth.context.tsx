"use client";

import axiosInstance from "@/utils/axiosInstance";
import { AuthContextType, ProviderProps } from "@/utils/types/auth";
import Cookies from "universal-cookie";
import { createContext, useEffect, useState } from "react";
import { getAllTermsByGroup } from "@/utils";

const initialState: AuthContextType = {
  signOut: () => {},
  jobTitlesGroup: [],
  sectorsGroup: [],
  functionalAreasGroup: [],
  educationsGroup: [],
  experienceLevelsGroup: [],
  maritalStatusesGroup: [],
  nationalitiesGroup: [],
  gendersGroup: [],
  residenceStatusesGroup: [],
  healthIssuesGroup: [],
  drivingLicenseTypesGroup: [],
  jobsInterestedInGroup: [],
};

export const AuthContext = createContext(initialState);

export const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
  const [jobTitlesGroup, setJobTitlesGroup] = useState<any[]>([]);
  const [sectorsGroup, setSectorsGroup] = useState<any[]>([]);
  const [functionalAreasGroup, setFunctionalAreasGroup] = useState<any[]>([]);
  const [educationsGroup, setEducationsGroup] = useState<any[]>([]);
  const [experienceLevelsGroup, setExperienceLevelsGroup] = useState<any[]>([]);
  const [maritalStatusesGroup, setMaritalStatusesGroup] = useState<any[]>([]);
  const [nationalitiesGroup, setNationalitiesGroup] = useState<any[]>([]);
  const [gendersGroup, setGendersGroup] = useState<any[]>([]);
  const [residenceStatusesGroup, setResidenceStatusesGroup] = useState<any[]>(
    []
  );
  const [healthIssuesGroup, setHealthIssuesGroup] = useState<any[]>([]);
  const [drivingLicenseTypesGroup, setDrivingLicenseTypesGroup] = useState<
    any[]
  >([]);
  const [jobsInterestedInGroup, setJobsInterestedInGroup] = useState<any[]>([]);

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

  // get all terms by group
  useEffect(() => {
    // get all terms by job title
    getAllTermsByGroup("job_title").then((data: any[]) => {
      setJobTitlesGroup(
        data.map((item: any) => ({ value: item?.id, name: item?.name?.en }))
      );
    });

    // get all terms by sector
    getAllTermsByGroup("sector").then((data: any[]) => {
      setSectorsGroup(
        data.map((item: any) => ({ value: item?.id, name: item?.name?.en }))
      );
    });
    // get all terms by functional area
    getAllTermsByGroup("functional_area").then((data: any[]) => {
      setFunctionalAreasGroup(
        data.map((item: any) => ({ value: item?.id, name: item?.name?.en }))
      );
    });
    // get all terms by education
    getAllTermsByGroup("educations").then((data: any[]) => {
      setEducationsGroup(
        data.map((item: any) => ({ value: item?.id, name: item?.name?.en }))
      );
    });
    // get all terms by experience level
    getAllTermsByGroup("experience_level").then((data: any[]) => {
      setExperienceLevelsGroup(
        data.map((item: any) => ({ value: item?.id, name: item?.name?.en }))
      );
    });
    // get all terms by marital status
    getAllTermsByGroup("marital_status").then((data: any[]) => {
      setMaritalStatusesGroup(
        data.map((item: any) => ({ value: item?.id, name: item?.name?.en }))
      );
    });
    // get all terms by nationality
    getAllTermsByGroup("nationality").then((data: any[]) => {
      setNationalitiesGroup(
        data.map((item: any) => ({ value: item?.id, name: item?.name?.en }))
      );
    });
    // get all terms by gender
    getAllTermsByGroup("gender").then((data: any[]) => {
      setGendersGroup(
        data.map((item: any) => ({ value: item?.id, name: item?.name?.en }))
      );
    });
    // get all terms by residence status
    getAllTermsByGroup("residence_status").then((data: any[]) => {
      setResidenceStatusesGroup(
        data.map((item: any) => ({ value: item?.id, name: item?.name?.en }))
      );
    });
    // get all terms by health issue
    getAllTermsByGroup("health_issue").then((data: any[]) => {
      setHealthIssuesGroup(
        data.map((item: any) => ({ value: item?.id, name: item?.name?.en }))
      );
    });
    // get all terms by driving license type
    getAllTermsByGroup("driving_license_type").then((data: any[]) => {
      setDrivingLicenseTypesGroup(
        data.map((item: any) => ({ value: item?.id, name: item?.name?.en }))
      );
    });
    // get all terms by jobs interested in
    getAllTermsByGroup("jobs").then((data: any[]) => {
      setJobsInterestedInGroup(
        data.map((item: any) => ({ value: item?.id, name: item?.name?.en }))
      );
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signOut,
        jobTitlesGroup,
        sectorsGroup,
        functionalAreasGroup,
        educationsGroup,
        experienceLevelsGroup,
        maritalStatusesGroup,
        nationalitiesGroup,
        gendersGroup,
        residenceStatusesGroup,
        healthIssuesGroup,
        drivingLicenseTypesGroup,
        jobsInterestedInGroup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
