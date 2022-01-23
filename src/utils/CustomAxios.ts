import axios from 'axios';

const DEFAULT_BASE_URL = 'https://ably-frontend-assignment-server.vercel.app';
const DEFAULT_HEADERS = { 'Content-Type': 'application/json' };

const customAxios = axios.create({
    baseURL: DEFAULT_BASE_URL,
    headers: DEFAULT_HEADERS,
});

export default customAxios;
