import React, { createContext, Dispatch, useContext, useState } from 'react';

type ConfirmTokenState = string;
type ConfirmTokenDispatch = Dispatch<ConfirmTokenState>;

const ConfirmTokenStateContext = createContext<ConfirmTokenState>('');
const ConfirmTokenDispatchContext = createContext<ConfirmTokenDispatch>(
    () => null
);

function ConfirmTokenContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [confirmToken, setConfirmToken] = useState('');
    return (
        <ConfirmTokenStateContext.Provider value={confirmToken}>
            <ConfirmTokenDispatchContext.Provider value={setConfirmToken}>
                {children}
            </ConfirmTokenDispatchContext.Provider>
        </ConfirmTokenStateContext.Provider>
    );
}

export function useConfirmTokenState() {
    return useContext(ConfirmTokenStateContext);
}

export function useConfirmTokenDispatch() {
    return useContext(ConfirmTokenDispatchContext);
}

export default ConfirmTokenContextProvider;
