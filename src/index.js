import React from 'react';
import ReactDOM from 'react-dom/client';
import SmilesProvider from './pages/emojis/context/VotingContext';
import ThemeProvider from "./contexts/ThemeContext";
import { BrowserRouter } from "react-router";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <SmilesProvider>
                    <App />
                </SmilesProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);