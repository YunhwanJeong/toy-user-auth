import React from 'react';
import { Button } from '@mui/material';

function TextButton({
    onClick,
    children,
}: {
    onClick: React.MouseEventHandler;
    children: React.ReactNode;
}) {
    return <Button onClick={onClick}>{children}</Button>;
}

export default TextButton;
