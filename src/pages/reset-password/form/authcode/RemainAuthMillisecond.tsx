import React from 'react';
import { useInterval } from '../../../../hooks/UseInterval';
import {
    useRemainAuthMillisecondDispatch,
    useRemainAuthMillisecondState,
} from '../../../../context/reset-password/form/RemainAuthMillisecondContext';
import { useToastDispatch } from '../../../../context/global/ToastContext';
import { InputAdornment } from '@mui/material';
import moment from 'moment';

const REMAIN_MILLISECOND_DECREASE_UNIT = 1000;

function RemainAuthMillisecond() {
    const remainMillisecond = useRemainAuthMillisecondState();
    const remainMillisecondDispatch = useRemainAuthMillisecondDispatch();
    const toastDispatch = useToastDispatch();
    useInterval(() => {
        if (remainMillisecond > 0) {
            remainMillisecondDispatch(remainMillisecond - 1000);
        } else {
            toastDispatch({
                type: 'OPEN',
                severity: 'error',
                message: '인증 시간이 만료되었습니다',
            });
        }
    }, REMAIN_MILLISECOND_DECREASE_UNIT);
    return (
        <InputAdornment disablePointerEvents position="end">
            {moment(remainMillisecond).format('mm:ss')}
        </InputAdornment>
    );
}

export default RemainAuthMillisecond;
