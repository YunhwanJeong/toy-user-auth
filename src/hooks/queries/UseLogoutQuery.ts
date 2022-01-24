import { useQuery, UseQueryOptions } from 'react-query';
import { Auth } from '../../apis';
import { LogoutResponse } from '../../apis/Auth';
import { AxiosError } from 'axios';
import { AxiosErrorResponseData } from '../../utils/CustomAxios';

function useLogoutQuery(
    accessToken: string | null,
    options: Omit<
        UseQueryOptions<LogoutResponse, AxiosError<AxiosErrorResponseData>>,
        'queryKey' | 'queryFn'
    >
) {
    return useQuery('logout', () => Auth.logout(accessToken), options);
}

export default useLogoutQuery;
