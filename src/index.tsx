import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import LoginContextProvider from './context/global/LoginContext';
import Toast from './modals/components/Toast';
import ToastContextProvider from './context/global/ToastContext';
import ModalPortal from './modals/portal/ModalPortal';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <CssBaseline />
            <LoginContextProvider>
                <ToastContextProvider>
                    <ModalPortal>
                        <Toast />
                    </ModalPortal>
                    <Router />
                </ToastContextProvider>
            </LoginContextProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
