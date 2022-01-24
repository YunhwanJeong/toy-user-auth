import customAxios from '../utils/CustomAxios';
import { AxiosResponse } from 'axios';

export interface LoginData {
    email: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
}

async function login<T = LoginResponse>(loginData: LoginData): Promise<T> {
    const response: AxiosResponse<T> = await customAxios.post(
        '/api/login',
        loginData
    );
    return response.data;
}

export default {
    login,
};
