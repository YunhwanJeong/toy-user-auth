import React, { useState } from 'react';
import { Box, Button, CircularProgress, TextField } from '@mui/material';
import { useResetPasswordStepDispatch } from '../../../context/ResetPasswordStepContext';
import RemainAuthMillisecond from './RemainAuthMillisecond';
import useVerifyAuthCodeQuery from '../../../hooks/queries/UseVerifyAuthCodeQuery';
import {
    useVerifiedEmailDispatch,
    useVerifiedEmailState,
} from '../../../context/VerifiedEmailContext';
import {
    useIssueTokenDispatch,
    useIssueTokenState,
} from '../../../context/IssueTokenContext';
import { useToastDispatch } from '../../../context/ToastContext';
import { VerifyAuthCodeResponse } from '../../../apis/ResetPassword';
import { AxiosError } from 'axios';
import { AxiosErrorResponseData } from '../../../utils/CustomAxios';
import { useRemainAuthMillisecondDispatch } from '../../../context/RemainAuthMillisecondContext';

function VerifyAuthCodeForm() {
    const [authCode, setAuthCode] = useState('');
    const resetPasswordStepDispatch = useResetPasswordStepDispatch();
    const verifiedEmailState = useVerifiedEmailState();
    const verifiedEmailDispatch = useVerifiedEmailDispatch();
    const issueTokenState = useIssueTokenState();
    const issueTokenDispatch = useIssueTokenDispatch();
    const remainAuthMillisecondDispatch = useRemainAuthMillisecondDispatch();
    const toastDispatch = useToastDispatch();

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
    }

    function onError(error: AxiosError<AxiosErrorResponseData>) {
        const message = error.response
            ? error.response.data.error.message
            : '알 수 없는 에러가 발생하였습니다';

        toastDispatch({
            type: 'OPEN',
            severity: 'error',
            message,
        });
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
