import React, { useState } from 'react';
import { Box, Button, CircularProgress, TextField } from '@mui/material';
import { useResetPasswordStepDispatch } from '../../../context/reset-password/ResetPasswordStepContext';
import RemainAuthMillisecond from './RemainAuthMillisecond';
import useVerifyAuthCodeQuery from '../../../hooks/queries/UseVerifyAuthCodeQuery';
import {
    useVerifiedEmailDispatch,
    useVerifiedEmailState,
} from '../../../context/reset-password/VerifiedEmailContext';
import {
    useIssueTokenDispatch,
    useIssueTokenState,
} from '../../../context/reset-password/form/IssueTokenContext';
import { useToastDispatch } from '../../../context/global/ToastContext';
import { VerifyAuthCodeResponse } from '../../../apis/ResetPassword';
import { AxiosError } from 'axios';
import { AxiosErrorResponseData } from '../../../utils/CustomAxios';
import { useRemainAuthMillisecondDispatch } from '../../../context/reset-password/form/RemainAuthMillisecondContext';
import { useConfirmTokenDispatch } from '../../../context/reset-password/form/ConfirmTokenContext';

function VerifyAuthCodeForm() {
    const [authCode, setAuthCode] = useState('');

    const verifiedEmailState = useVerifiedEmailState();
    const issueTokenState = useIssueTokenState();

    const resetPasswordStepDispatch = useResetPasswordStepDispatch();
    const verifiedEmailDispatch = useVerifiedEmailDispatch();
    const issueTokenDispatch = useIssueTokenDispatch();
    const remainAuthMillisecondDispatch = useRemainAuthMillisecondDispatch();
    const toastDispatch = useToastDispatch();
    const confirmTokenDispatch = useConfirmTokenDispatch();

    const { isLoading, refetch } = useVerifyAuthCodeQuery(
        { email: verifiedEmailState, authCode, issueToken: issueTokenState },
        {
            enabled: false,
            onSuccess,
            onError,
        }
    );

    function onSuccess(data: VerifyAuthCodeResponse) {
        resetPasswordStepDispatch(2);
        confirmTokenDispatch(data.confirmToken);
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

    function updateAuthCode(e: React.ChangeEvent<HTMLInputElement>) {
        setAuthCode(e.target.value);
    }

    function goBackToPreviousStep(e: React.MouseEvent<HTMLButtonElement>) {
        verifiedEmailDispatch('');
        resetPasswordStepDispatch(0);
        issueTokenDispatch('');
        remainAuthMillisecondDispatch(0);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        refetch();
    }

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 10 }}>
            <TextField
                fullWidth
                required
                disabled={isLoading}
                label="인증코드"
                value={authCode}
                onChange={updateAuthCode}
                InputProps={{
                    endAdornment: <RemainAuthMillisecond />,
                }}
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
                    size="large"
                    variant="outlined"
                    onClick={goBackToPreviousStep}
                >
                    이전
                </Button>
                <Button
                    fullWidth
                    disabled={authCode === '' || isLoading}
                    variant="contained"
                    type="submit"
                >
                    {isLoading ? <CircularProgress size={20} /> : '다음'}
                </Button>
            </Box>
        </Box>
    );
}

export default VerifyAuthCodeForm;
