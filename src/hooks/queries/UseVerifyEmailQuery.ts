import { useQuery, UseQueryOptions } from 'react-query';
import { ResetPassword } from '../../apis';
import { AxiosError } from 'axios';
import { AxiosErrorResponseData } from '../../utils/CustomAxios';
import { VerifyEmailResponse } from '../../apis/ResetPassword';

function useVerifyEmailQuery(
    email: string,
    options: Omit<
        UseQueryOptions<
            VerifyEmailResponse,
            AxiosError<AxiosErrorResponseData>
        >,
        'queryKey' | 'queryFn'
    >
) {
    return useQuery(
        'verifyEmail',
        () => ResetPassword.verifyEmail(email),
        options
    );
}

export default useVerifyEmailQuery;
