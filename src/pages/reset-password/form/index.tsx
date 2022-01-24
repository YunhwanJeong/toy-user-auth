import React from 'react';
import { useResetPasswordStepState } from '../../../context/ResetPasswordStepContext';
import VerifyEmailForm from './VerifyEmailForm';
import VerifyAuthCodeForm from './VerifyAuthCodeForm';
import ResetPasswordForm from './ResetPasswordForm';
import IssueTokenContextProvider from '../../../context/IssueTokenContext';
import RemainAuthMillisecondContextProvider from '../../../context/RemainAuthMillisecondContext';
import ConfirmTokenContextProvider from '../../../context/ConfirmTokenContext';

function ResetPasswordFormRenderer() {
    const step = useResetPasswordStepState();
    const form = () => {
        switch (step) {
            case 0:
                return <VerifyEmailForm />;
            case 1:
                return <VerifyAuthCodeForm />;
            case 2:
                return <ResetPasswordForm />;
            default:
                throw new Error(
                    `Unknown step(${step}) of reset password has been set`
                );
        }
    };
    return (
        <IssueTokenContextProvider>
            <RemainAuthMillisecondContextProvider>
                <ConfirmTokenContextProvider>
                    {form()}
                </ConfirmTokenContextProvider>
            </RemainAuthMillisecondContextProvider>
        </IssueTokenContextProvider>
    );
}

export default ResetPasswordFormRenderer;
