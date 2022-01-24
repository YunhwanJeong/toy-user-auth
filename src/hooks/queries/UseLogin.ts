import { useQuery } from 'react-query';
import { Auth } from '../../apis';
import { LoginData, LoginResponse } from '../../apis/Auth';
import { AxiosError } from 'axios';
import { AxiosErrorResponseData } from '../../utils/CustomAxios';

async function getAccessToken(email: string, password: string) {
    return Auth.login({ email, password });
}

function useLogin(
    loginData: LoginData,
    onSuccess: (data: LoginResponse) => void,
    onError: (error: AxiosError<AxiosErrorResponseData>) => void
) {
    return useQuery(
        'login',
        () => getAccessToken(loginData.email, loginData.password),
        {
            enabled: false,
            onSuccess,
            onError,
        }
    );
}

export default useLogin;
