import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useLoginState } from '../context/global/LoginContext';
import { LinearProgress } from '@mui/material';

const UserPage = lazy(() => import('../pages/user'));
const LoginPage = lazy(() => import('../pages/login'));
const ResetPasswordPage = lazy(() => import('../pages/reset-password'));

function Router() {
    const isLoggedIn = !!useLoginState();
    return (
        <BrowserRouter>
            <Suspense fallback={<LinearProgress />}>
                <Routes>
                    {isLoggedIn ? (
                        <>
                            <Route path="/user" element={<UserPage />} />
                            <Route
                                path="*"
                                element={<Navigate replace to={'/user'} />}
                            />
                        </>
                    ) : (
                        <>
                            <Route path="/login" element={<LoginPage />} />
                            <Route
                                path="/reset-password"
                                element={<ResetPasswordPage />}
                            />
                            <Route
                                path="*"
                                element={<Navigate replace to="login" />}
                            />
                        </>
                    )}
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default Router;
