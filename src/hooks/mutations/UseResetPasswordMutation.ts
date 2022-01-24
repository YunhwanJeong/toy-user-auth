import { useMutation, UseMutationOptions } from 'react-query';
import { ResetPassword } from '../../apis';
import {
    ResetPasswordData,
    ResetPasswordResponse,
} from '../../apis/ResetPassword';
import { AxiosError } from 'axios';
import { AxiosErrorResponseData } from '../../utils/CustomAxios';

function useResetPasswordMutation(
    resetPasswordData: ResetPasswordData,
    options: Omit<
        UseMutationOptions<
            ResetPasswordResponse,
            AxiosError<AxiosErrorResponseData>
        >,
        'queryKey' | 'queryFn'
    >
) {
    return useMutation(
        'resetPassword',
        () => ResetPassword.reset(resetPasswordData),
        options
    );
}

export default useResetPasswordMutation;
