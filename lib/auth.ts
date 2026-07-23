import type { AuthResponse } from "./api";

const TOKEN_KEY = "devclub_token";
const USER_KEY = "devclub_user";

export interface AuthUser {
  id: number;
  name: string;
  email: string;
}

export function saveAuth(
  auth: AuthResponse,
): void {
  if (typeof window === "undefined") {
    return;
  }

  const user: AuthUser = {
    id: auth.id,
    name: auth.name,
    email: auth.email,
  };

  localStorage.setItem(
    TOKEN_KEY,
    auth.token,
  );

  localStorage.setItem(
    USER_KEY,
    JSON.stringify(user),
  );
}

export function getToken(): string | null {
  if (typeof window === "undefined") {
    return null;
  }

  return localStorage.getItem(TOKEN_KEY);
}

export function getUser(): AuthUser | null {
  if (typeof window === "undefined") {
    return null;
  }

  const user = localStorage.getItem(USER_KEY);

  if (!user) {
    return null;
  }

  try {
    return JSON.parse(user) as AuthUser;
  } catch {
    return null;
  }
}

export function isAuthenticated(): boolean {
  return Boolean(getToken());
}

export function logout(): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}