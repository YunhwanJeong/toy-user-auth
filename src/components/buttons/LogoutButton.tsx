import React from 'react';
import useLogoutQuery from '../../hooks/queries/UseLogoutQuery';
import { useLoginDispatch, useLoginState } from '../../context/LoginContext';
import { useToastDispatch } from '../../context/ToastContext';
import { AxiosError } from 'axios';
import { AxiosErrorResponseData } from '../../utils/CustomAxios';
import { Button, CircularProgress } from '@mui/material';

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
        <Button onClick={handleClick}>
            {isLoading ? <CircularProgress size={20} /> : '로그아웃'}
        </Button>
    );
}

export default LogoutButton;
