import React from 'react';
import { Container, Typography } from '@mui/material';

function ResetPasswordPageTemplate({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Container component="main" maxWidth="sm" sx={{ mt: 10 }}>
            <Typography variant="h6" component="h1" align="center">
                비밀번호 재설정
            </Typography>
            {children}
        </Container>
    );
}

export default ResetPasswordPageTemplate;
