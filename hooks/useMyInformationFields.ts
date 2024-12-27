import FileBase from "@/components/ui/FileBase";
import InputBase from "@/components/ui/InputBase";
import SelectBase from "@/components/ui/SelectBase";

const useFormFields = () => {
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
      options: [
        {
          name: "test1",
          value: "test1",
        },
      ],
      component: SelectBase,
    },
    // {
    //   label: "Preferred Sector",
    //   name: "preferred_sector",
    //   type: "select",
    //   options: [
    //     {
    //       name: "test sector",
    //       value: "test sector",
    //     },
    //   ],
    //   component: SelectBase,
    // },
    // {
    //   label: "Preferred Functional Area",
    //   name: "preferred_functional_area",
    //   type: "select",
    //   options: [
    //     {
    //       name: "test area",
    //       value: "test area",
    //     },
    //   ],
    //   component: SelectBase,
    // },
    // {
    //   label: "Highest Education",
    //   name: "highest_education",
    //   type: "select",
    //   options: [
    //     {
    //       name: "test education",
    //       value: "test education",
    //     },
    //   ],
    //   component: SelectBase,
    // },
    // {
    //   label: "Years of Experience",
    //   name: "years_of_experience",
    //   type: "text",
    //   placeholder: "0",
    //   component: InputBase,
    // },
    // {
    //   label: "Experience Level",
    //   name: "experience_level",
    //   type: "select",
    //   options: [
    //     {
    //       name: "test experience",
    //       value: "test experience",
    //     },
    //   ],
    //   component: SelectBase,
    // },
    // {
    //   label: "Current Monthly Salary",
    //   name: "current_monthly_salary",
    //   type: "text",
    //   placeholder: "0",
    //   component: InputBase,
    // },
    // {
    //   label: "Expected Monthly Salary",
    //   name: "expected_monthly_salary",
    //   type: "text",
    //   placeholder: "0",
    //   component: InputBase,
    // },
    // {
    //   label: "Marital Status",
    //   name: "marital_status",
    //   type: "select",
    //   options: [
    //     {
    //       name: "test marital status",
    //       value: "test marital status",
    //     },
    //   ],
    //   component: SelectBase,
    // },
    // {
    //   label: "Nationality",
    //   name: "nationality_id",
    //   type: "select",
    //   options: [
    //     {
    //       name: "test nationality",
    //       value: "test nationality",
    //     },
    //   ],
    //   component: SelectBase,
    // },
    // {
    //   label: "Gender",
    //   name: "gender",
    //   type: "select",
    //   options: [
    //     {
    //       name: "test gender",
    //       value: "test gender",
    //     },
    //   ],
    //   component: SelectBase,
    // },
    // {
    //   label: "Residence Status",
    //   name: "residence_status",
    //   type: "select",
    //   options: [
    //     {
    //       name: "test residence status",
    //       value: "test residence status",
    //     },
    //   ],
    //   component: SelectBase,
    // },
    // {
    //   label: "National ID",
    //   name: "national_id_text",
    //   type: "text",
    //   placeholder: "0",
    //   component: InputBase,
    // },
    // {
    //   label: "Age",
    //   name: "birth_date",
    //   type: "date",
    //   component: InputBase,
    // },
    // {
    //   label: "Health Issue",
    //   name: "health_issue_id",
    //   type: "select",
    //   options: [
    //     {
    //       name: "test health issue",
    //       value: "test health issue",
    //     },
    //   ],
    //   component: SelectBase,
    // },
    // {
    //   label: "Driving License Type",
    //   name: "driving_license_type",
    //   type: "select",
    //   options: [
    //     {
    //       name: "test driving license type",
    //       value: "test driving license type",
    //     },
    //   ],
    //   component: SelectBase,
    // },
    // {
    //   label: "Jobs Interested In",
    //   name: "jobs_interested_in",
    //   type: "select",
    //   options: [
    //     {
    //       name: "test jobs interested in",
    //       value: "test jobs interested in",
    //     },
    //   ],
    //   component: SelectBase,
    // },
    // {
    //   label: "National ID File",
    //   name: "national_id_file",
    //   type: "file",
    //   component: FileBase,
    // },
  ];

  return formFields;
};

export default useFormFields;
