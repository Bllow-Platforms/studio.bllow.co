export interface IApiResponse<T = any> {
    data: T;
    status: number;
    message: string;
}

export interface IApiError {
    message: string;
    status: number;
    errors?: Record<string, string[]>;
}
