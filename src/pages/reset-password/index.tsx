import React from 'react';
import ResetPasswordPageTemplate from './ResetPasswordPageTemplate';
import ResetPasswordStepper from './ResetPasswordStepper';
import VerifyEmailForm from './VerifyEmailForm';

function ResetPasswordPage() {
    return (
        <ResetPasswordPageTemplate>
            <ResetPasswordStepper />
            <VerifyEmailForm />
        </ResetPasswordPageTemplate>
    );
}

export default ResetPasswordPage;
