import React from 'react';
import ResetPasswordPageTemplate from './ResetPasswordPageTemplate';
import ResetPasswordStepper from './ResetPasswordStepper';
import VerifyEmailForm from './VerifyEmailForm';
import VerifiedEmailContextProvider from '../../context/VerifiedEmailContext';

function ResetPasswordPage() {
    return (
        <ResetPasswordPageTemplate>
            <ResetPasswordStepper />
            <VerifiedEmailContextProvider>
                <VerifyEmailForm />
            </VerifiedEmailContextProvider>
        </ResetPasswordPageTemplate>
    );
}

export default ResetPasswordPage;
