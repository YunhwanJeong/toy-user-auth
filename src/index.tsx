import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import { CssBaseline } from '@mui/material';

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline />
        <Router />
    </React.StrictMode>,
    document.getElementById('root')
);
