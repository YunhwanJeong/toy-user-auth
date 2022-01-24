import React from 'react';
import ResetPasswordPageTemplate from './ResetPasswordPageTemplate';
import ResetPasswordStepper from './ResetPasswordStepper';
import VerifiedEmailContextProvider from '../../context/VerifiedEmailContext';
import ResetPasswordStepContextProvider from '../../context/ResetPasswordStepContext';
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
