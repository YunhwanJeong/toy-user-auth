import customAxios, { API_PREFIX } from '../utils/CustomAxios';
import { AxiosResponse } from 'axios';

export interface LoginData {
    email: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
}

export interface LogoutResponse {
    lastConnectedAt: Date;
}

async function login<T = LoginResponse>(loginData: LoginData): Promise<T> {
    const response: AxiosResponse<T> = await customAxios.post(
        `${API_PREFIX}/login`,
        loginData
    );
    return response.data;
}

async function logout(accessToken: string | null) {
    const response = await customAxios.post(`${API_PREFIX}/logout`, undefined, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return response.data;
}

export default {
    login,
    logout,
};
