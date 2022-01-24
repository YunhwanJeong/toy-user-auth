import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

const PASSWORD_NOT_MATCH_TEXT = '비밀번호가 일치하지 않습니다';

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
                error={
                    newPassword !== '' &&
                    newPasswordConfirm !== '' &&
                    newPassword !== newPasswordConfirm
                }
                helperText={
                    newPassword !== '' &&
                    newPasswordConfirm !== '' &&
                    newPassword !== newPasswordConfirm
                        ? PASSWORD_NOT_MATCH_TEXT
                        : ''
                }
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
                <Button
                    fullWidth
                    disabled={
                        newPassword === '' ||
                        newPasswordConfirm === '' ||
                        newPassword !== newPasswordConfirm
                    }
                    variant="contained"
                    type="submit"
                >
                    비밀번호 변경하기
                </Button>
            </Box>
        </Box>
    );
}

export default ResetPasswordForm;
