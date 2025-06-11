import React from 'react';
import ReactDOM from 'react-dom/client';
import SmilesProvider from './EmojisPage/context/VotingContext';
import ThemeProvider from "./contexts/ThemeContext";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <SmilesProvider>
                <App />
            </SmilesProvider>
        </ThemeProvider>
    </React.StrictMode>
);

