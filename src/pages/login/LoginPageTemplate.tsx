import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function LoginPageTemplate({ children }: { children: React.ReactNode }) {
    return (
        <Container component="main" maxWidth="xs">
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
                {children}
            </Box>
        </Container>
    );
}

export default LoginPageTemplate;
