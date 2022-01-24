import { useQuery, UseQueryOptions } from 'react-query';
import { GetUserResponse } from '../../apis/User';
import { AxiosError } from 'axios';
import { User } from '../../apis';
import { AxiosErrorResponseData } from '../../utils/CustomAxios';

function useGetUserQuery(
    accessToken: string | null,
    options: Omit<
        UseQueryOptions<GetUserResponse, AxiosError<AxiosErrorResponseData>>,
        'queryKey' | 'queryFn'
    >
) {
    return useQuery<GetUserResponse, AxiosError, GetUserResponse>(
        'getUser',
        () => User.getUser(accessToken),
        options
    );
}

export default useGetUserQuery;
