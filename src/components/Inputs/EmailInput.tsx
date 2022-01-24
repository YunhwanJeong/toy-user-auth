import React from 'react';
import { TextField } from '@mui/material';
import { isValidEmailFormat } from '../../utils/StringUtils';

const INVALID_EMAIL_TEXT = '올바른 이메일 형식이 아닙니다';

interface EmailInputProps {
    emailState: string;
    setEmailState: React.Dispatch<React.SetStateAction<string>>;
    disabled: boolean;
}

function EmailInput({ emailState, setEmailState, disabled }: EmailInputProps) {
    function isUserEmailInputInvalid() {
        return !(emailState === '') && !isValidEmailFormat(emailState);
    }

    function updateEmailState(e: React.ChangeEvent<HTMLInputElement>) {
        setEmailState(e.target.value);
    }

    return (
        <TextField
            margin="normal"
            fullWidth
            required
            disabled={disabled}
            type="email"
            name="email"
            label="Email"
            error={isUserEmailInputInvalid()}
            helperText={isUserEmailInputInvalid() ? INVALID_EMAIL_TEXT : ''}
            value={emailState}
            onChange={updateEmailState}
        />
    );
}

export default EmailInput;
