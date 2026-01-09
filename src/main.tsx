import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Add type declaration for window.hideLoadingScreen
declare global {
  interface Window {
    hideLoadingScreen?: () => void;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Hide loading screen when React mounts
if (typeof window !== 'undefined' && window.hideLoadingScreen) {
  window.hideLoadingScreen();
}
