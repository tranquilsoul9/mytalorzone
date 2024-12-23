import React from 'react';
import ReactDOM from 'react-dom/client';  // Notice the change here
import './styles.css';
import App from './App';  // Assuming you have an App component

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
