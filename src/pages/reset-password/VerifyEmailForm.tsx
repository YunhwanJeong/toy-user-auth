import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import EmailInput from '../../components/Inputs/EmailInput';

function VerifyEmailForm() {
    const [emailState, setEmailState] = useState('');

    return (
        <Box component="form" sx={{ mt: 10 }}>
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
                <Button fullWidth disabled variant="contained">
                    다음
                </Button>
            </Box>
        </Box>
    );
}

export default VerifyEmailForm;
