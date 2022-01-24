import React, { useState } from 'react';
import { Box, Button, InputAdornment, TextField } from '@mui/material';

function VerifyAuthCodeForm() {
    const [authCode, setAuthCode] = useState('');

    function updateAuthCode(e: React.ChangeEvent<HTMLInputElement>) {
        setAuthCode(e.target.value);
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
                    endAdornment: (
                        <InputAdornment disablePointerEvents position="end">
                            mm:ss
                        </InputAdornment>
                    ),
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
                <Button fullWidth size="large" variant="outlined">
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
