import axios from 'axios';

const DEFAULT_BASE_URL = 'https://ably-frontend-assignment-server.vercel.app';
const DEFAULT_HEADERS = { 'Content-Type': 'application/json' };
const UNKNOWN_ERROR_MESSAGE = '알 수 없는 에러가 발생하였습니다!!!';

export interface AxiosErrorResponseData {
    error: {
        message: string;
    };
}

const customAxios = axios.create({
    baseURL: DEFAULT_BASE_URL,
    headers: DEFAULT_HEADERS,
});

customAxios.interceptors.response.use(
    function (config) {
        return config;
    },
    function (error) {
        if (!error.response) {
            error.response = {
                data: {
                    error: {
                        message: UNKNOWN_ERROR_MESSAGE,
                    },
                },
            };
        }

        return Promise.reject(error);
    }
);

export default customAxios;
