import React, { useState } from 'react';
import { Box, Button, CircularProgress } from '@mui/material';
import EmailInput from '../../components/Inputs/EmailInput';
import { isValidEmailFormat } from '../../utils/StringUtils';
import useVerifyEmailQuery from '../../hooks/queries/UseVerifyEmailQuery';
import { VerifyEmailResponse } from '../../apis/ResetPassword';
import { AxiosError } from 'axios';
import { AxiosErrorResponseData } from '../../utils/CustomAxios';
import { useToastDispatch } from '../../context/ToastContext';

function VerifyEmailForm() {
    const [emailState, setEmailState] = useState('');
    const toastDispatch = useToastDispatch();
    const { isLoading, refetch } = useVerifyEmailQuery(emailState, {
        enabled: false,
        onSuccess,
        onError,
    });

    function onSuccess(data: VerifyEmailResponse) {}

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
            <EmailInput emailState={emailState} setEmailState={setEmailState} />
            <Box
                sx={{
                    mt: 5,
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 1,
                }}
            >
                <Button fullWidth size="large" variant="outlined">
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
