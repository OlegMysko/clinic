import { accessTokenService } from "@/services/accessTokenService";
import { authService } from "@/services/authService";
import axios, { AxiosError } from "axios";

export const httpClient = axios.create({
  baseURL:  import.meta.env.VITE_API_URL,
  withCredentials: true,
})

// add `Authorization` header to all requests
httpClient.interceptors.request.use(request => {
  const accessToken = accessTokenService.get()
  if (accessToken) {
  request.headers.Authorization = `Bearer ${accessToken}`
  }
  return request;
})

httpClient.interceptors.response.use(
  res => res.data,
  // retry request after refreshing access token
  async (error: AxiosError) => {
    if (error.response?.status !== 401) {
      throw error;
    }

    const originalRequest = error.config;
    const { accessToken } = await authService.refresh();
    accessTokenService.save(accessToken);
    return httpClient.request(originalRequest!)
  }
)