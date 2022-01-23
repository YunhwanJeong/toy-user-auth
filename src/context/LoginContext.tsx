import React, { createContext, Dispatch, useContext, useState } from 'react';

type AccessToken = string;
type LoginState = AccessToken | null;
type LoginDispatch = Dispatch<LoginState>;

const LoginStateContext = createContext<LoginState>(null);
const LoginDispatchContext = createContext<LoginDispatch>(() => null);

function LoginContextProvider({ children }: { children: React.ReactNode }) {
    const [loginState, setLoginState] = useState<LoginState>(null);

    return (
        <LoginStateContext.Provider value={loginState}>
            <LoginDispatchContext.Provider value={setLoginState}>
                {children}
            </LoginDispatchContext.Provider>
        </LoginStateContext.Provider>
    );
}

export function useLoginState() {
    return useContext(LoginStateContext);
}

export function useLoginDispatch() {
    return useContext(LoginDispatchContext);
}

export default LoginContextProvider;
