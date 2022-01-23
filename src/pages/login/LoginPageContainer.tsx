import React from 'react';
import { Container } from '@mui/material';

function LoginPageContainer({ children }: { children: React.ReactNode }) {
    return (
        <Container component="main" maxWidth="xs">
            {children}
        </Container>
    );
}

export default LoginPageContainer;
