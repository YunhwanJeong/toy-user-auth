import customAxios from '../utils/CustomAxios';
import { AxiosResponse } from 'axios';

export interface VerifyEmailResponse {
    issueToken: string;
    remainMillisecond: number;
}

export interface VerifyAuthCodeResponse {
    confirmToken: string;
}

export interface ResetPasswordResponse {
    email: string;
}

export interface VerifyAuthCodeData {
    email: string;
    authCode: string;
    issueToken: string;
}

export interface ResetPasswordData {
    email: string;
    confirmToken: string;
    newPassword: string;
    newPasswordConfirm: string;
}

async function verifyEmail<T = VerifyEmailResponse>(email: string): Promise<T> {
    const response: AxiosResponse<T> = await customAxios.get(
        '/api/reset-password',
        { params: { email } }
    );

    return response.data;
}

async function verifyAuthCode<T = VerifyAuthCodeResponse>(
    verifyAuthCodeData: VerifyAuthCodeData
): Promise<T> {
    const response: AxiosResponse<T> = await customAxios.post(
        '/api/reset-password',
        verifyAuthCodeData
    );
    return response.data;
}

async function reset<T = ResetPasswordResponse>(
    resetPasswordData: ResetPasswordData
): Promise<T> {
    const response: AxiosResponse<T> = await customAxios.patch(
        '/api/reset-password',
        resetPasswordData
    );
    return response.data;
}

export default {
    verifyEmail,
    verifyAuthCode,
    reset,
};
