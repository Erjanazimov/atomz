import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {HashRouter} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ContextProvider from "./context/contexts";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <HelmetProvider>
    <ContextProvider>
        <HashRouter>
            <App />
        </HashRouter>
    </ContextProvider>
    </HelmetProvider>
);
