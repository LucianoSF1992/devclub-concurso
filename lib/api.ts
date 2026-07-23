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

export interface StudentProfileResponse {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

export interface LessonResponse {
  id: number;
  title: string;
  description: string;
  videoUrl?: string | null;
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
  imageUrl?: string | null;
  level: string;
  durationInHours: number;
  modules: CourseModuleResponse[];
}

export interface EnrolledCourseResponse
  extends CourseDetailsResponse {
  enrolledAt: string;
}

export type MyCourseResponse =
  EnrolledCourseResponse;

export interface CourseListItemResponse {
  id: number;
  title: string;
  description: string;
  slug: string;
  imageUrl?: string | null;
  level: string;
  durationInHours: number;
}

/* ========================================
LESSON PROGRESS
======================================== */

export interface LessonProgressItem {
  id: number;
  title: string;
  moduleId: number;
  moduleTitle: string;
  isCompleted: boolean;
}

export interface CourseProgressResponse {
  courseId: number;
  totalLessons: number;
  completedLessons: number;
  progressPercentage: number;
  lessons: LessonProgressItem[];
}

export interface LessonCompletionResponse {
  lessonId: number;
  isCompleted: boolean;
  completedAt: string | null;
}

export const api = {
  /* ========================================
  AUTH
  ======================================== */

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

  /* ========================================
  STUDENT
  ======================================== */

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

  /* ========================================
  COURSES
  ======================================== */

  getCourses(): Promise<CourseListItemResponse[]> {
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
      `/api/Courses/${slug}`,
      {
        method: "GET",
      },
    );
  },

  /* ========================================
  ENROLLMENTS
  ======================================== */

  enroll(
    courseId: number,
    token: string,
  ): Promise<{
    id: number;
    courseId: number;
    enrolledAt: string;
  }> {
    return request(
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
  ): Promise<EnrolledCourseResponse[]> {
    return request<EnrolledCourseResponse[]>(
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
    courseId: number,
    token: string,
  ): Promise<EnrolledCourseResponse> {
    return request<EnrolledCourseResponse>(
      `/api/Enrollment/my-courses/${courseId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  },

  /* ========================================
  LESSON PROGRESS
  ======================================== */

  getCourseProgress(
    courseId: number,
    token: string,
  ): Promise<CourseProgressResponse> {
    return request<CourseProgressResponse>(
      `/api/LessonProgress/course/${courseId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  },

  completeLesson(
    lessonId: number,
    token: string,
  ): Promise<LessonCompletionResponse> {
    return request<LessonCompletionResponse>(
      `/api/LessonProgress/lesson/${lessonId}/complete`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  },

  uncompleteLesson(
    lessonId: number,
    token: string,
  ): Promise<LessonCompletionResponse> {
    return request<LessonCompletionResponse>(
      `/api/LessonProgress/lesson/${lessonId}/complete`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  },
};
