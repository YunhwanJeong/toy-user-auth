import React, { useState } from 'react';
import { Box, Button, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { isValidEmailFormat } from '../../utils/StringUtils';
import { QueryFunctionContext, useQuery } from 'react-query';
import {} from '../../apis/Auth';
import { Auth } from '../../apis';
import { useLoginDispatch } from '../../context/LoginContext';

const INVALID_EMAIL_TEXT = '올바른 이메일 형식이 아닙니다';

function LoginForm() {
    const [emailState, setEmailState] = useState('');
    const [passwordState, setPasswordState] = useState('');
    const loginDispatch = useLoginDispatch();
    const { isLoading, refetch } = useQuery('login', loginQueryFn, {
        enabled: false,
        onSuccess: (data) => {
            loginDispatch(data.accessToken);
        },
    });

    function updateEmailState(e: React.ChangeEvent<HTMLInputElement>) {
        setEmailState(e.target.value);
    }

    function updatePasswordState(e: React.ChangeEvent<HTMLInputElement>) {
        setPasswordState(e.target.value);
    }

    async function loginQueryFn(context: QueryFunctionContext) {
        return Auth.login({ email: emailState, password: passwordState });
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        refetch();
    }

    function isUserEmailInputInvalid() {
        return emailState !== '' && !isValidEmailFormat(emailState);
    }

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
            <Button
                fullWidth
                variant="contained"
                type="submit"
                size="large"
                sx={{ mt: 3 }}
            >
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
