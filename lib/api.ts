const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://localhost:5113";

interface ApiError {
  message?: string;
}

async function request<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(
    `${API_URL}${endpoint}`,
    {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    },
  );

  if (!response.ok) {
    let errorMessage =
      "Ocorreu um erro ao realizar a requisição.";

    try {
      const error =
        (await response.json()) as ApiError;

      if (error.message) {
        errorMessage = error.message;
      }
    } catch {
      // Mantém a mensagem padrão caso a API
      // não retorne um JSON válido.
    }

    throw new Error(errorMessage);

  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

// ==========================================
// AUTH
// ==========================================

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

// ==========================================
// STUDENT
// ==========================================

export interface StudentProfileResponse {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

// ==========================================
// COURSES
// ==========================================

export interface CourseListItemResponse {
  id: number;
  title: string;
  description: string;
  slug: string;
  imageUrl: string | null;
  level: string;
  durationInHours: number;
}

export interface LessonResponse {
  id: number;
  title: string;
  description: string;
  videoUrl: string | null;
  durationInMinutes: number;
  order: number;
}

export interface CourseModuleResponse {
  id: number;
  title: string;
  order: number;
  lessons: LessonResponse[];
}

export interface CourseDetailsResponse {
  id: number;
  title: string;
  description: string;
  slug: string;
  imageUrl: string | null;
  level: string;
  durationInHours: number;
  modules: CourseModuleResponse[];
}

// ==========================================
// ENROLLMENTS
// ==========================================

export interface EnrollmentResponse {
  id: number;
  courseId: number;
  enrolledAt: string;
}

export interface MyCourseResponse {
  id: number;
  title: string;
  description: string;
  slug: string;
  imageUrl: string | null;
  level: string;
  durationInHours: number;
  enrolledAt: string;
}

export interface MyCourseDetailsResponse {
  id: number;
  title: string;
  description: string;
  slug: string;
  imageUrl: string | null;
  level: string;
  durationInHours: number;
  enrolledAt: string;
  modules: CourseModuleResponse[];
}

// ==========================================
// API
// ==========================================

export const api = {
  // ----------------------------------------
  // AUTH
  // ----------------------------------------

  login(
    data: LoginRequest,
  ): Promise<AuthResponse> {
    return request<AuthResponse>(
      "/api/Auth/login",
      {
        method: "POST",
        body: JSON.stringify(data),
      },
    );
  },

  register(
    data: RegisterRequest,
  ): Promise<AuthResponse> {
    return request<AuthResponse>(
      "/api/Auth/register",
      {
        method: "POST",
        body: JSON.stringify(data),
      },
    );
  },

  // ----------------------------------------
  // STUDENT
  // ----------------------------------------

  getStudentProfile(
    token: string,
  ): Promise<StudentProfileResponse> {
    return request<StudentProfileResponse>(
      "/api/Student/me",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  },

  // ----------------------------------------
  // COURSES
  // ----------------------------------------

  getCourses(): Promise<
    CourseListItemResponse[]

  > {
    return request<CourseListItemResponse[]>(
      "/api/Courses",
      {
        method: "GET",
      },
    );
  },

  getCourseBySlug(
    slug: string,
  ): Promise<CourseDetailsResponse> {
    return request<CourseDetailsResponse>(
      `/api/Courses/${encodeURIComponent(slug)}`,
      {
        method: "GET",
      },
    );
  },

  // ----------------------------------------
  // ENROLLMENTS
  // ----------------------------------------

  enroll(
    token: string,
    courseId: number,
  ): Promise<EnrollmentResponse> {
    return request<EnrollmentResponse>(
      `/api/Enrollment/${courseId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  },

  getMyCourses(
    token: string,
  ): Promise<MyCourseResponse[]> {
    return request<MyCourseResponse[]>(
      "/api/Enrollment/my-courses",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  },

  getMyCourse(
    token: string,
    courseId: number,
  ): Promise<MyCourseDetailsResponse> {
    return request<MyCourseDetailsResponse>(
      `/api/Enrollment/my-courses/${courseId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  },
};
