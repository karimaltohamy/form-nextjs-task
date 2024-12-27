export interface MyInformationForm {
  summary: string;
  headline: string;
  national_id_file: File | null;
  preferred_job_title: string;
  preferred_sector: string;
  preferred_functional_area: string;
  highest_education: string;
  years_of_experience: string;
  experience_level: string;
  current_monthly_salary: string;
  expected_monthly_salary: string;
  marital_status: string;
  nationality_id: string;
  gender: string;
  residence_status: string;
  national_id_text: string;
  birth_date: string;
  driving_license_type: string;
  health_issue_id: string;
  jobs_interested_in: string;
}

export interface FormErrors {
  [key: string]: string;
}
