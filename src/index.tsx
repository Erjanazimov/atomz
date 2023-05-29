import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {HashRouter} from "react-router-dom";
import ContextProvider from "./context/contexts";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ContextProvider>
        <HashRouter>
            <App />
        </HashRouter>
    </ContextProvider>
);
