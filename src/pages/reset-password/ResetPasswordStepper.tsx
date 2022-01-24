import React from 'react';
import { Step, StepLabel, Stepper } from '@mui/material';

const STEPS = ['이메일 입력', '인증 코드 입력', '새 비밀번호'];

function ResetPasswordStepper() {
    return (
        <Stepper sx={{ maxWidth: '90%', margin: '50px auto' }}>
            {STEPS.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
}

export default ResetPasswordStepper;
