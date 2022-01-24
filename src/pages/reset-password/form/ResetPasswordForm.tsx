import React, { useState } from 'react';
import { Box, Button, CircularProgress, TextField } from '@mui/material';
import useResetPasswordMutation from '../../../hooks/mutations/UseResetPasswordMutation';
import {
    useVerifiedEmailDispatch,
    useVerifiedEmailState,
} from '../../../context/reset-password/VerifiedEmailContext';
import {
    useConfirmTokenDispatch,
    useConfirmTokenState,
} from '../../../context/reset-password/form/ConfirmTokenContext';
import { ResetPasswordResponse } from '../../../apis/ResetPassword';
import { AxiosError } from 'axios';
import { AxiosErrorResponseData } from '../../../utils/CustomAxios';
import { useToastDispatch } from '../../../context/global/ToastContext';
import { useNavigate } from 'react-router-dom';
import { useResetPasswordStepDispatch } from '../../../context/reset-password/ResetPasswordStepContext';
import { useIssueTokenDispatch } from '../../../context/reset-password/form/IssueTokenContext';
import { useRemainAuthMillisecondDispatch } from '../../../context/reset-password/form/RemainAuthMillisecondContext';

const PASSWORD_NOT_MATCH_TEXT = '비밀번호가 일치하지 않습니다';

function ResetPasswordForm() {
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirm, setNewPasswordConfirm] = useState('');

    const verifiedEmailState = useVerifiedEmailState();
    const confirmTokenState = useConfirmTokenState();

    const toastDispatch = useToastDispatch();
    const resetPasswordStepDispatch = useResetPasswordStepDispatch();
    const verifiedEmailDispatch = useVerifiedEmailDispatch();
    const issueTokenDispatch = useIssueTokenDispatch();
    const remainAuthMillisecondDispatch = useRemainAuthMillisecondDispatch();
    const confirmTokenDispatch = useConfirmTokenDispatch();

    const navigate = useNavigate();
    const { isLoading, mutate } = useResetPasswordMutation(
        {
            email: verifiedEmailState,
            confirmToken: confirmTokenState,
            newPassword,
            newPasswordConfirm,
        },
        {
            onSuccess,
            onError,
        }
    );

    function resetStates() {
        resetPasswordStepDispatch(0);
        verifiedEmailDispatch('');
        issueTokenDispatch('');
        remainAuthMillisecondDispatch(0);
        confirmTokenDispatch('');
    }

    function onSuccess(data: ResetPasswordResponse) {
        toastDispatch({
            type: 'OPEN',
            severity: 'success',
            message: '비밀번호가 변경되었어요!',
        });
        resetStates();
        navigate('/login');
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

    function updateNewPasswordState(e: React.ChangeEvent<HTMLInputElement>) {
        setNewPassword(e.target.value);
    }

    function updateNewPasswordConfirmState(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        setNewPasswordConfirm(e.target.value);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        mutate();
    }

    function goBackToFirstStep(e: React.MouseEvent<HTMLButtonElement>) {
        resetStates();
    }

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <TextField
                margin="normal"
                fullWidth
                required
                type="password"
                name="newPassword"
                label="New Password"
                placeholder="새 비밀번호"
                value={newPassword}
                onChange={updateNewPasswordState}
            />
            <TextField
                margin="normal"
                fullWidth
                required
                type="password"
                name="newPasswordConfirm"
                label="Confirm Password"
                placeholder="비밀번호 확인"
                value={newPasswordConfirm}
                onChange={updateNewPasswordConfirmState}
                error={
                    newPassword !== '' &&
                    newPasswordConfirm !== '' &&
                    newPassword !== newPasswordConfirm
                }
                helperText={
                    newPassword !== '' &&
                    newPasswordConfirm !== '' &&
                    newPassword !== newPasswordConfirm
                        ? PASSWORD_NOT_MATCH_TEXT
                        : ''
                }
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
                    onClick={goBackToFirstStep}
                >
                    처음으로
                </Button>
                <Button
                    fullWidth
                    disabled={
                        newPassword === '' ||
                        newPasswordConfirm === '' ||
                        newPassword !== newPasswordConfirm ||
                        isLoading
                    }
                    variant="contained"
                    type="submit"
                >
                    {isLoading ? (
                        <CircularProgress size={20} />
                    ) : (
                        '비밀번호 변경하기'
                    )}
                </Button>
            </Box>
        </Box>
    );
}

export default ResetPasswordForm;
