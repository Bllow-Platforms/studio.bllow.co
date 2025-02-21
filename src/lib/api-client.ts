import { AxiosError, AxiosResponse } from 'axios';
import { AXIOS_CONFIG } from '@/config/axios';
import { IApiError, IApiResponse } from '@/interface/api.interface';
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
    params?: object
  ): Promise<IApiResponse<T>> {
    try {
      const response: AxiosResponse = await AXIOS_CONFIG({
        method,
        url,
        data,
        params,
      });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        let errorMessage = 'An unexpected error occurred';
        let errorDetails = {};

        try {
          const errorData =
            typeof error.response?.data === 'string'
              ? JSON.parse(error.response.data)
              : error.response?.data;

          errorMessage = errorData?.message || errorMessage;

          if (errorData?.details) {
            errorDetails = errorData.details.reduce(
              (acc: Record<string, string>, detail: any) => {
                if (detail.path) {
                  acc[detail.path[0]] = detail.message;
                }
                return acc;
              },
              {}
            );
          }
        } catch (parseError) {
          console.error('Error parsing response:', parseError);
        }

        const apiError = new ApiError(
          errorMessage,
          error.response?.status || 500,
          errorDetails,
          error.response?.data?.code
        );

        switch (apiError.status) {
          case 401:
            toast.error('Session expired. Please sign in again.');
            window.location.href = '/auth/signin';
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

  static async get<T>(url: string, params?: object): Promise<IApiResponse<T>> {
    return this.request<T>('get', url, undefined, params);
  }

  static async post<T>(url: string, data?: any): Promise<IApiResponse<T>> {
    return this.request<T>('post', url, data);
  }

  static async put<T>(url: string, data?: any): Promise<IApiResponse<T>> {
    return this.request<T>('put', url, data);
  }

  static async delete<T>(url: string): Promise<IApiResponse<T>> {
    return this.request<T>('delete', url);
  }
}
