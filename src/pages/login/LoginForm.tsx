import React, { useState } from 'react';
import { Box, Button, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { isValidEmailFormat } from '../../utils/StringUtils';

const INVALID_EMAIL_TEXT = '올바른 이메일 형식이 아닙니다';

function LoginForm() {
    const [emailState, setEmailState] = useState('');
    const [passwordState, setPasswordState] = useState('');

    function updateEmailState(e: React.ChangeEvent<HTMLInputElement>) {
        setEmailState(e.target.value);
    }

    function updatePasswordState(e: React.ChangeEvent<HTMLInputElement>) {
        setPasswordState(e.target.value);
    }

    function isUserEmailInputInvalid() {
        return emailState !== '' && !isValidEmailFormat(emailState);
    }

    return (
        <Box component="form" sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                fullWidth
                required
                type="email"
                name="email"
                label="Email"
                error={isUserEmailInputInvalid()}
                helperText={isUserEmailInputInvalid() ? INVALID_EMAIL_TEXT : ''}
                value={emailState}
                onChange={updateEmailState}
            />
            <TextField
                margin="normal"
                fullWidth
                required
                type="password"
                name="password"
                label="Password"
                value={passwordState}
                onChange={updatePasswordState}
            />
            <Button fullWidth variant="contained" type="submit" sx={{ mt: 3 }}>
                로그인
            </Button>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 3,
                }}
            >
                <Link
                    component={RouterLink}
                    to="/reset-password"
                    variant="body2"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    비밀번호 재설정
                </Link>
            </Box>
        </Box>
    );
}

export default LoginForm;