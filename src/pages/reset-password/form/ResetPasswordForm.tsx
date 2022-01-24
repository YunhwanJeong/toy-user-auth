import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

function ResetPasswordForm() {
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirm, setNewPasswordConfirm] = useState('');

    function updateNewPasswordState(e: React.ChangeEvent<HTMLInputElement>) {
        setNewPassword(e.target.value);
    }

    function updateNewPasswordConfirmState(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        setNewPasswordConfirm(e.target.value);
    }

    return (
        <Box component="form">
            <TextField
                margin="normal"
                fullWidth
                required
                type="password"
                name="newPassword"
                label="New Password"
                placeholder="새 비밀번호"
                value={newPassword}
                onChange={updateNewPasswordState}
            />
            <TextField
                margin="normal"
                fullWidth
                required
                type="password"
                name="newPasswordConfirm"
                label="Confirm Password"
                placeholder="비밀번호 확인"
                value={newPasswordConfirm}
                onChange={updateNewPasswordConfirmState}
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
                    처음으로
                </Button>
                <Button fullWidth variant="contained" type="submit">
                    비밀번호 변경하기
                </Button>
            </Box>
        </Box>
    );
}

export default ResetPasswordForm;
