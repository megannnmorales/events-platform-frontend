import { readToken } from "../utils/getLocalStorage";

const BASE_URL = import.meta.env.VITE_API_URL;

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export const apiGet = async <T>(
  path: string,
  signal?: AbortSignal,
): Promise<T> => {
  const token = readToken();

  const response = await fetch(`${BASE_URL}${path}`, {
    signal,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  if (!response.ok) {
    throw new ApiError(
      `Request failed with status ${response.status}`,
      response.status,
    );
  }
  return (await response.json()) as T;
};

export const apiPost = async <T>(path: string, body: unknown): Promise<T> => {
  const response = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new ApiError(
      `Request failed with status ${response.status}`,
      response.status,
    );
  }

  return (await response.json()) as T;
};

export const apiDelete = async (
  path: string,
  signal?: AbortSignal,
): Promise<void> => {
  const token = readToken();

  const response = await fetch(`${BASE_URL}${path}`, {
    method: "DELETE",
    signal,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  if (!response.ok) {
    throw new ApiError(
      `Request failed with status ${response.status}`,
      response.status,
    );
  }
};
