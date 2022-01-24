import customAxios, { API_PREFIX } from '../utils/CustomAxios';
import { AxiosResponse } from 'axios';

const RESET_PASSWORD_API_ENDPOINT = '/reset-password';

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
        `${API_PREFIX}${RESET_PASSWORD_API_ENDPOINT}`,
        { params: { email } }
    );

    return response.data;
}

async function verifyAuthCode<T = VerifyAuthCodeResponse>(
    verifyAuthCodeData: VerifyAuthCodeData
): Promise<T> {
    const response: AxiosResponse<T> = await customAxios.post(
        `${API_PREFIX}${RESET_PASSWORD_API_ENDPOINT}`,
        verifyAuthCodeData
    );
    return response.data;
}

async function reset<T = ResetPasswordResponse>(
    resetPasswordData: ResetPasswordData
): Promise<T> {
    const response: AxiosResponse<T> = await customAxios.patch(
        `${API_PREFIX}${RESET_PASSWORD_API_ENDPOINT}`,
        resetPasswordData
    );
    return response.data;
}

export default {
    verifyEmail,
    verifyAuthCode,
    reset,
};
