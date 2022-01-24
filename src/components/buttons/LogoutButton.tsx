import React from 'react';
import TextButton from './TextButton';
import useLogoutQuery from '../../hooks/queries/UseLogoutQuery';
import { useLoginDispatch, useLoginState } from '../../context/LoginContext';
import { useToastDispatch } from '../../context/ToastContext';
import { AxiosError } from 'axios';
import { AxiosErrorResponseData } from '../../utils/CustomAxios';
import { CircularProgress } from '@mui/material';

function LogoutButton() {
    const accessToken = useLoginState();
    const loginDispatch = useLoginDispatch();
    const toastDispatch = useToastDispatch();
    const { isLoading, refetch } = useLogoutQuery(accessToken, {
        enabled: false,
        onSuccess,
        onError,
    });

    function onSuccess() {
        loginDispatch(null);
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

    function handleClick(e: React.MouseEvent) {
        e.preventDefault();
        refetch();
    }

    return (
        <TextButton onClick={handleClick}>
            {isLoading ? <CircularProgress size={20} /> : '로그아웃'}
        </TextButton>
    );
}

export default LogoutButton;
