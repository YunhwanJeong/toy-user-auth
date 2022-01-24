import React, { createContext, Dispatch, useContext, useState } from 'react';

type VerifiedEmailState = string;
type VerifiedEmailDispatch = Dispatch<VerifiedEmailState>;

const VerifiedEmailStateContext = createContext<VerifiedEmailState>('');
const VerifiedEmailDispatchContext = createContext<VerifiedEmailDispatch>(
    () => null
);

function VerifiedEmailContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [verifiedEmail, setVerifiedEmail] = useState('');
    return (
        <VerifiedEmailStateContext.Provider value={verifiedEmail}>
            <VerifiedEmailDispatchContext.Provider value={setVerifiedEmail}>
                {children}
            </VerifiedEmailDispatchContext.Provider>
        </VerifiedEmailStateContext.Provider>
    );
}

export function useVerifiedEmailState() {
    return useContext(VerifiedEmailStateContext);
}

export function useVerifiedEmailDispatch() {
    return useContext(VerifiedEmailDispatchContext);
}

export default VerifiedEmailContextProvider;
