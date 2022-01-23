import React from 'react';
import { Box, Button, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function LoginForm() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 8,
            }}
        >
            <Typography
                component="h1"
                variant="h3"
                sx={{
                    letterSpacing: '.4em',
                    textAlign: 'center',
                    textIndent: '.4em',
                }}
            >
                ABLY
            </Typography>
            <Box component="form" sx={{ mt: 1 }}>
                <TextField margin="normal" fullWidth required label="Email" />
                <TextField
                    margin="normal"
                    fullWidth
                    required
                    label="Password"
                />
                <Button
                    fullWidth
                    variant="contained"
                    type="submit"
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
        </Box>
    );
}

export default LoginForm;
