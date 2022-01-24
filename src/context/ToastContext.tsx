import React, { createContext, Dispatch, useContext, useReducer } from 'react';

type Severity = 'error' | 'warning' | 'info' | 'success';

interface ToastState {
    isOpen: boolean;
    severity: Severity;
    message: string;
}

type ToastAction =
    | { type: 'OPEN'; severity: Severity; message: string }
    | { type: 'CLOSE' };

const initialState: ToastState = {
    isOpen: false,
    severity: 'error',
    message: '',
};

type ToastDispatch = Dispatch<ToastAction>;

const ToastStateContext = createContext<ToastState>(initialState);
const ToastDispatchContext = createContext<ToastDispatch>(() => null);

function reducer(state: ToastState, action: ToastAction): ToastState {
    switch (action.type) {
        case 'OPEN':
            return {
                isOpen: true,
                severity: action.severity,
                message: action.message,
            };
        case 'CLOSE':
            return {
                ...state,
                isOpen: false,
            };
        default:
            throw new Error('Unhandled action');
    }
}

function ToastContextProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ToastStateContext.Provider value={state}>
            <ToastDispatchContext.Provider value={dispatch}>
                {children}
            </ToastDispatchContext.Provider>
        </ToastStateContext.Provider>
    );
}

export function useToastState() {
    return useContext(ToastStateContext);
}

export function useToastDispatch() {
    return useContext(ToastDispatchContext);
}

export default ToastContextProvider;
