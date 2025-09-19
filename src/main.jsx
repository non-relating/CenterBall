
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Small global overlay to show runtime errors on the page when React fails
function installGlobalErrorOverlay() {
  if (typeof window === 'undefined') return;
  let overlay = document.getElementById('global-error-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'global-error-overlay';
    Object.assign(overlay.style, {
      position: 'fixed',
      left: '12px',
      right: '12px',
      top: '12px',
      padding: '12px',
      background: 'rgba(20,20,20,0.95)',
      color: 'white',
      fontFamily: 'monospace',
      fontSize: '12px',
      zIndex: 999999,
      whiteSpace: 'pre-wrap',
      borderRadius: '8px',
      display: 'none',
      maxHeight: '60vh',
      overflow: 'auto',
    });
    document.body.appendChild(overlay);
  }

  const show = (msg) => {
    overlay.style.display = 'block';
    overlay.textContent = msg;
  };

  window.addEventListener('error', (ev) => {
    try {
      const err = ev.error || ev;
      show(`${err && err.stack ? err.stack : String(err)}`);
      // Also log to console so devtools capture it
      console.error(err);
    } catch (e) {
      console.error('Error while displaying overlay', e);
    }
  });

  window.addEventListener('unhandledrejection', (ev) => {
    try {
      const reason = ev.reason || ev;
      show(`${reason && reason.stack ? reason.stack : String(reason)}`);
      console.error('Unhandled Rejection:', reason);
    } catch (e) {
      console.error('Error while displaying rejection', e);
    }
  });
}

installGlobalErrorOverlay();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
