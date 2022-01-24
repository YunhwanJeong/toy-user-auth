import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/login';
import { useLoginState } from '../context/global/LoginContext';
import UserPage from '../pages/user';
import ResetPasswordPage from '../pages/reset-password';

function Router() {
    const isLoggedIn = !!useLoginState();
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}

export default Router;
