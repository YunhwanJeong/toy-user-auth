import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import { useToastDispatch, useToastState } from '../../context/ToastContext';

const DEFAULT_ERROR_MESSAGE = '알 수 없는 오류가 발생했습니다';

function Toast() {
    const { isOpen, severity, message } = useToastState();
    const dispatch = useToastDispatch();

    function handleClose(event: React.SyntheticEvent | Event, reason: string) {
        dispatch({ type: 'CLOSE' });
    }

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={isOpen}
            onClose={handleClose}
        >
            <Alert variant="filled" severity={severity}>
                {message ? message : DEFAULT_ERROR_MESSAGE}
            </Alert>
        </Snackbar>
    );
}

export default Toast;
