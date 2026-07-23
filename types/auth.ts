export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  id: number;
  name: string;
  email: string;
  token: string;
}

export interface StudentProfile {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}