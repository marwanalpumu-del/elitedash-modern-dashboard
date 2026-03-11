/**
 * @file main.jsx
 * @author EliteDash Developer
 * @version 1.0.0
 * @description Application Entry Point. 
 * Responsible for mounting the React component tree into the synchronous DOM.
 * Standards: React 18 (Concurrent Mode), Vite HMR, ES Modules.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Global Tailwind configuration and UI Protocols

/**
 * @function Bootstrap
 * @description Initializes the Root container and renders the core App component 
 * wrapped in StrictMode for identifying potential side-effect issues.
 */
const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Critical Error: Target container 'root' not found in DOM.");
}
