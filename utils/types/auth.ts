export interface AuthContextType {
  signOut: () => void;
  jobTitlesGroup: any[];
  sectorsGroup: any[];
  functionalAreasGroup: any[];
  educationsGroup: any[];
  experienceLevelsGroup: any[];
  maritalStatusesGroup: any[];
  nationalitiesGroup: any[];
  gendersGroup: any[];
  residenceStatusesGroup: any[];
  healthIssuesGroup: any[];
  drivingLicenseTypesGroup: any[];
  jobsInterestedInGroup: any[];
}

export interface ProviderProps {
  children: React.ReactNode;
}

export interface SignUpForm {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface LoginForm {
  email: string;
  password: string;
}
