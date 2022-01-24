import customAxios from '../utils/CustomAxios';
import { AxiosResponse } from 'axios';

export interface GetUserResponse {
    name: string;
    email: string;
    profileImage: string;
    lastConnectedAt: Date;
}

async function getUser<T = GetUserResponse>(
    accessToken: string | null
): Promise<T> {
    const response: AxiosResponse<T> = await customAxios.get('/api/user', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.data;
}

export default {
    getUser,
};
