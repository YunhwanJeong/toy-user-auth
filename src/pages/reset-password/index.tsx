import React from 'react';
import ResetPasswordPageTemplate from './ResetPasswordPageTemplate';
import ResetPasswordStepper from './ResetPasswordStepper';
import VerifiedEmailContextProvider from '../../context/reset-password/VerifiedEmailContext';
import ResetPasswordStepContextProvider from '../../context/reset-password/ResetPasswordStepContext';
import ResetPasswordFormRenderer from './form';

function ResetPasswordPage() {
    return (
        <ResetPasswordPageTemplate>
            <ResetPasswordStepContextProvider>
                <ResetPasswordStepper />
                <VerifiedEmailContextProvider>
                    <ResetPasswordFormRenderer />
                </VerifiedEmailContextProvider>
            </ResetPasswordStepContextProvider>
        </ResetPasswordPageTemplate>
    );
}

export default ResetPasswordPage;
