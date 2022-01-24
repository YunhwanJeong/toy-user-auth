import React, { useState } from 'react';
import { Box, Button, CircularProgress } from '@mui/material';
import EmailInput from '../../../components/Inputs/EmailInput';
import { isValidEmailFormat } from '../../../utils/StringUtils';
import useVerifyEmailQuery from '../../../hooks/queries/UseVerifyEmailQuery';
import { VerifyEmailResponse } from '../../../apis/ResetPassword';
import { AxiosError } from 'axios';
import { AxiosErrorResponseData } from '../../../utils/CustomAxios';
import { useToastDispatch } from '../../../context/ToastContext';
import { useVerifiedEmailDispatch } from '../../../context/VerifiedEmailContext';
import { useResetPasswordStepDispatch } from '../../../context/ResetPasswordStepContext';
import { useNavigate } from 'react-router-dom';

function VerifyEmailForm() {
    const [emailState, setEmailState] = useState('');
    const toastDispatch = useToastDispatch();
    const verifiedEmailDispatch = useVerifiedEmailDispatch();
    const resetPasswordStepDispatch = useResetPasswordStepDispatch();
    const navigate = useNavigate();
    const { isLoading, refetch } = useVerifyEmailQuery(emailState, {
        enabled: false,
        onSuccess,
        onError,
    });

    function onSuccess(data: VerifyEmailResponse) {
        verifiedEmailDispatch(emailState);
        resetPasswordStepDispatch(1);
    }

    function onError(error: AxiosError<AxiosErrorResponseData>) {
        if (error.response) {
            toastDispatch({
                type: 'OPEN',
                severity: 'error',
                message: error.response.data.error.message,
            });
        }
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        refetch();
    }

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 10 }}>
            <EmailInput
                emailState={emailState}
                setEmailState={setEmailState}
                disabled={isLoading}
            />
            <Box
                sx={{
                    mt: 5,
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 1,
                }}
            >
                <Button
                    fullWidth
                    onClick={() => navigate(-1)}
                    size="large"
                    variant="outlined"
                >
                    이전
                </Button>
                <Button
                    fullWidth
                    disabled={
                        emailState === '' ||
                        !isValidEmailFormat(emailState) ||
                        isLoading
                    }
                    variant="contained"
                    type="submit"
                >
                    {isLoading ? <CircularProgress size={20} /> : '다음'}
                </Button>
            </Box>
        </Box>
    );
}

export default VerifyEmailForm;
