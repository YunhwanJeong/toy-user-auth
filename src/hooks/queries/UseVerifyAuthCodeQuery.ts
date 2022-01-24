import { useQuery, UseQueryOptions } from 'react-query';
import { ResetPassword } from '../../apis';
import {
    VerifyAuthCodeData,
    VerifyAuthCodeResponse,
} from '../../apis/ResetPassword';
import { AxiosError } from 'axios';
import { AxiosErrorResponseData } from '../../utils/CustomAxios';

function useVerifyAuthCodeQuery(
    verifyAuthCodeData: VerifyAuthCodeData,
    options: Omit<
        UseQueryOptions<
            VerifyAuthCodeResponse,
            AxiosError<AxiosErrorResponseData>
        >,
        'queryKey' | 'queryFn'
    >
) {
    return useQuery(
        'verifyAuthCode',
        () => ResetPassword.verifyAuthCode(verifyAuthCodeData),
        options
    );
}

export default useVerifyAuthCodeQuery;
