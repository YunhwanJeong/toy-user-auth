import axios from 'axios';

const DEFAULT_BASE_URL = 'https://ably-frontend-assignment-server.vercel.app';
const DEFAULT_HEADERS = { 'Content-Type': 'application/json' };

export interface AxiosErrorResponseData {
    error: {
        message: string;
    };
}

const customAxios = axios.create({
    baseURL: DEFAULT_BASE_URL,
    headers: DEFAULT_HEADERS,
});

export default customAxios;
