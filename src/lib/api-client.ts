import { AxiosError, AxiosResponse } from 'axios';
import { AXIOS_CONFIG } from '@/config/axios';
import { IApiResponse } from '@/types/api-types';
import { toast } from 'sonner';

export class ApiError extends Error {
  constructor(
    public message: string,
    public status: number,
    public errors?: Record<string, string>,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export class ApiClient {
  private static async request<T>(
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    url: string,
    data?: any,
    params?: object,
    headers?: Record<string, string>
  ): Promise<IApiResponse<T>> {
    const headersLists = {
      ...(AXIOS_CONFIG.defaults.headers as Record<string, string>),
      ...headers,
    };
    try {
      const response: AxiosResponse = await AXIOS_CONFIG({
        method,
        url,
        data,
        params,
        headers: headersLists,
      });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const apiError = new ApiError(
          error.response?.data?.message || 'An unexpected error occurred',
          error.response?.status || 500,
          error.response?.data?.errors,
          error.response?.data?.code
        );

        switch (apiError.status) {
          case 401:
            toast.error('Session expired. Please sign in again.');
            // window.location.href = '/auth/signin';
            break;
          case 403:
            toast.error('You do not have permission to perform this action');
            break;
          case 404:
            toast.error('Resource not found');
            break;
          case 422:
            toast.error(apiError.message || 'Validation failed');
            if (apiError.errors) {
              Object.values(apiError.errors).forEach(error => {
                toast.error(error);
              });
            }
            break;
          default:
            toast.error(apiError.message);
            break;
        }

        throw apiError;
      }
      toast.error('An unexpected error occurred');
      throw error;
    }
  }

  static async get<T>(
    url: string,
    params?: object,
    headers?: Record<string, string>
  ): Promise<IApiResponse<T>> {
    return this.request<T>('get', url, undefined, params, headers);
  }

  static async post<T>(
    url: string,
    data?: any,
    headers?: Record<string, string>
  ): Promise<IApiResponse<T>> {
    return this.request<T>('post', url, data, undefined, headers);
  }

  static async put<T>(
    url: string,
    data?: any,
    headers?: Record<string, string>
  ): Promise<IApiResponse<T>> {
    return this.request<T>('put', url, data, undefined, headers);
  }

  static async delete<T>(
    url: string,
    headers?: Record<string, string>
  ): Promise<IApiResponse<T>> {
    return this.request<T>('delete', url, undefined, undefined, headers);
  }
}
