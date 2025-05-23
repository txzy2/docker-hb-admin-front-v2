import axios, { AxiosError, AxiosResponse } from 'axios';

export class HttpService {
    private baseUrl: string = '/api/v1';

    public async get<T>(path: string, params?: any): Promise<T> {
        try {
            const response: AxiosResponse<T> = await axios.get(`${this.baseUrl}${path}`, { params });
            return response.data;
        } catch (error) {
            this.handleError(error as AxiosError);
            throw error;
        }
    }

    public async post<T>(path: string, data?: any): Promise<T> {
        try {
            const response: AxiosResponse<T> = await axios.post(`${this.baseUrl}${path}`, data);
            return response.data;
        } catch (error) {
            this.handleError(error as AxiosError);
            throw error;
        }
    }

    private handleError(error: AxiosError): void {
        if (error.response) {
            console.error('Response error:', error.response.data);
            console.error('Status code:', error.response.status);
        } else if (error.request) {
            console.error('Request error:', error.request);
        } else {
            console.error('Error:', error.message);
        }
    }
}
