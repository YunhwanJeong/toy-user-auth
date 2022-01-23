import customAxios from '../utils/CustomAxios';
import { AxiosResponse } from 'axios';

interface LoginData {
    email: string;
    password: string;
}

interface LoginResponse {
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
