import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useResetPasswordStepDispatch } from '../../../context/ResetPasswordStepContext';
import RemainAuthMillisecond from './RemainAuthMillisecond';

function VerifyAuthCodeForm() {
    const [authCode, setAuthCode] = useState('');
    const resetPasswordStepDispatch = useResetPasswordStepDispatch();

    function updateAuthCode(e: React.ChangeEvent<HTMLInputElement>) {
        setAuthCode(e.target.value);
    }

    function goBackToPreviousStep(e: React.MouseEvent<HTMLButtonElement>) {
        resetPasswordStepDispatch(0);
    }

    return (
        <Box component="form" sx={{ mt: 10 }}>
            <TextField
                fullWidth
                required
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
                <Button fullWidth variant="contained" type="submit">
                    다음
                </Button>
            </Box>
        </Box>
    );
}

export default VerifyAuthCodeForm;
