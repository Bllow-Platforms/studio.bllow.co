import { AxiosError, AxiosResponse } from 'axios';
import { AXIOS_CONFIG } from '@/config/axios';
import { IApiError , IApiResponse } from '@/interface/api.interface';


export class ApiClient {
    static async get<T>(url: string, params?: object): Promise<IApiResponse<T>> {
        try {
            const response: AxiosResponse = await AXIOS_CONFIG.get(url, { params });
            return response.data;
        } catch (error) {
            return this.handleError(error as AxiosError);
        }
    }

    static async post<T>(url: string, data?: any): Promise<IApiResponse<T>> {
        try {
            const response: AxiosResponse = await AXIOS_CONFIG.post(url, data);
            return response.data;
        } catch (error) {
            return this.handleError(error as AxiosError);
        }
    }

    static async put<T>(url: string, data?: any): Promise<IApiResponse<T>> {
        try {
            const response: AxiosResponse = await AXIOS_CONFIG.put(url, data);
            return response.data;
        } catch (error) {
            return this.handleError(error as AxiosError);
        }
    }

    static async delete<T>(url: string): Promise<IApiResponse<T>> {
        try {
            const response: AxiosResponse = await AXIOS_CONFIG.delete(url);
            return response.data;
        } catch (error) {
            return this.handleError(error as AxiosError);
        }
    }

    private static handleError(error: AxiosError): never {
        const apiError: ApiError = {
            message: error.response?.data?.message || 'An unexpected error occurred',
            status: error.response?.status || 500,
            errors: error.response?.data?.errors
        };
        throw apiError;
    }
}