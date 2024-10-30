export interface User {
  id: string;
  email: string;
  name: string;
  role?: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface ErrorResponse {
  message: string;
  status?: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthContextType {
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface Event {
  start: Date;
  end: Date;
  title: string;
}
