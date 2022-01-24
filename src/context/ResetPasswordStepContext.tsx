import React, { createContext, Dispatch, useContext, useState } from 'react';

type ResetPasswordStepState = 0 | 1 | 2;
type ResetPasswordStepDispatch = Dispatch<ResetPasswordStepState>;

const ResetPasswordStepStateContext = createContext<ResetPasswordStepState>(0);
const ResetPasswordStepDispatchContext =
    createContext<ResetPasswordStepDispatch>(() => null);

function ResetPasswordStepContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [step, setStep] = useState<ResetPasswordStepState>(0);
    return (
        <ResetPasswordStepStateContext.Provider value={step}>
            <ResetPasswordStepDispatchContext.Provider value={setStep}>
                {children}
            </ResetPasswordStepDispatchContext.Provider>
        </ResetPasswordStepStateContext.Provider>
    );
}

export function useResetPasswordStepState() {
    return useContext(ResetPasswordStepStateContext);
}

export function useResetPasswordStepDispatch() {
    return useContext(ResetPasswordStepDispatchContext);
}

export default ResetPasswordStepContextProvider;
