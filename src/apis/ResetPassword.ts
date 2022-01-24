import customAxios from '../utils/CustomAxios';
import { AxiosResponse } from 'axios';

export interface VerifyEmailResponse {
    issueToken: string;
    remainMillisecond: number;
}

async function verifyEmail<T = VerifyEmailResponse>(email: string): Promise<T> {
    const response: AxiosResponse<T> = await customAxios.get(
        `/api/reset-password`,
        { params: { email } }
    );

    return response.data;
}

export default {
    verifyEmail,
};
