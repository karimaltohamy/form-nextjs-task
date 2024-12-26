import FileBase from "@/components/ui/FileBase";
import InputBase from "@/components/ui/InputBase";
import SelectBase from "@/components/ui/SelectBase";
import AuthContext from "@/context/auth.context";
import { useContext } from "react";

const useFormFields = () => {
  const {
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
  } = useContext(AuthContext);

  const formFields = [
    {
      label: "Headline",
      name: "headline",
      type: "text",
      placeholder: "IT Project Manager | PMP",
      component: InputBase,
    },
    {
      label: "Preferred Job Title(e.g. Sales Manager)",
      name: "preferred_job_title",
      type: "select",
      options: jobTitlesGroup,
      component: SelectBase,
    },
    {
      label: "Preferred Sector",
      name: "preferred_sector",
      type: "select",
      options: sectorsGroup,
      component: SelectBase,
    },
    {
      label: "Preferred Functional Area",
      name: "preferred_functional_area",
      type: "select",
      options: functionalAreasGroup,
      component: SelectBase,
    },
    {
      label: "Highest Education",
      name: "highest_education",
      type: "select",
      options: educationsGroup,
      component: SelectBase,
    },
    {
      label: "Years of Experience",
      name: "years_of_experience",
      type: "text",
      placeholder: "0",
      component: InputBase,
    },
    {
      label: "Experience Level",
      name: "experience_level",
      type: "select",
      options: experienceLevelsGroup,
      component: SelectBase,
    },
    {
      label: "Current Monthly Salary",
      name: "current_monthly_salary",
      type: "text",
      placeholder: "0",
      component: InputBase,
    },
    {
      label: "Expected Monthly Salary",
      name: "expected_monthly_salary",
      type: "text",
      placeholder: "0",
      component: InputBase,
    },
    {
      label: "Marital Status",
      name: "marital_status",
      type: "select",
      options: maritalStatusesGroup,
      component: SelectBase,
    },
    {
      label: "Nationality",
      name: "nationality_id",
      type: "select",
      options: nationalitiesGroup,
      component: SelectBase,
    },
    {
      label: "Gender",
      name: "gender",
      type: "select",
      options: gendersGroup,
      component: SelectBase,
    },
    {
      label: "Residence Status",
      name: "residence_status",
      type: "select",
      options: residenceStatusesGroup,
      component: SelectBase,
    },
    {
      label: "National ID",
      name: "national_id_text",
      type: "text",
      placeholder: "0",
      component: InputBase,
    },
    {
      label: "Age",
      name: "birth_date",
      type: "date",
      component: InputBase,
    },
    {
      label: "Health Issue",
      name: "health_issue_id",
      type: "select",
      options: healthIssuesGroup,
      component: SelectBase,
    },
    {
      label: "Driving License Type",
      name: "driving_license_type",
      type: "select",
      options: drivingLicenseTypesGroup,
      component: SelectBase,
    },
    {
      label: "Jobs Interested In",
      name: "jobs_interested_in",
      type: "select",
      options: jobsInterestedInGroup,
      component: SelectBase,
    },
    {
      label: "National ID File",
      name: "national_id_file",
      type: "file",
      component: FileBase,
    },
  ];

  return formFields;
};

export default useFormFields;
