import React, { createContext, Dispatch, useContext, useState } from 'react';

type IssueTokenState = string;
type IssueTokenDispatch = Dispatch<IssueTokenState>;

const IssueTokenStateContext = createContext<IssueTokenState>('');
const IssueTokenDispatchContext = createContext<IssueTokenDispatch>(() => null);

function IssueTokenContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [issueToken, setIssueToken] = useState('');
    return (
        <IssueTokenStateContext.Provider value={issueToken}>
            <IssueTokenDispatchContext.Provider value={setIssueToken}>
                {children}
            </IssueTokenDispatchContext.Provider>
        </IssueTokenStateContext.Provider>
    );
}

export function useIssueTokenState() {
    return useContext(IssueTokenStateContext);
}

export function useIssueTokenDispatch() {
    return useContext(IssueTokenDispatchContext);
}

export default IssueTokenContextProvider;
