import React from 'react';
import { Container } from '@mui/material';

function UserPageTemplate({ children }: { children: React.ReactNode }) {
    return (
        <Container component="main" maxWidth="xs" sx={{ mt: 12 }}>
            {children}
        </Container>
    );
}

export default UserPageTemplate;
