export interface AuthContextType {
  signOut: () => void;
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
