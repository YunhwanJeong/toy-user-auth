import { useQuery, UseQueryOptions } from 'react-query';
import { Auth } from '../../apis';
import { LoginData, LoginResponse } from '../../apis/Auth';
import { AxiosError } from 'axios';
import { AxiosErrorResponseData } from '../../utils/CustomAxios';

async function getAccessToken(email: string, password: string) {
    return Auth.login({ email, password });
}

function useLoginQuery(
    loginData: LoginData,
    options: Omit<
        UseQueryOptions<LoginResponse, AxiosError<AxiosErrorResponseData>>,
        'queryKey' | 'queryFn'
    >
) {
    return useQuery(
        'login',
        () => getAccessToken(loginData.email, loginData.password),
        options
    );
}

export default useLoginQuery;
