import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './styles/index.css';
import './styles/globals.css';
import { AuthContextProvider } from './context/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Suspense>
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </Suspense>
    </React.StrictMode>
);
