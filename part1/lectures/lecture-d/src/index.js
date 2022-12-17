import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import EventApp from './EventApp';
import FunctionApp from './FunctionApp'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
ReactDOM.createRoot(document.getElementById('EventApp')).render(<EventApp />)
// ReactDOM.createRoot(document.getElementById('EventApp')).render(<FunctionApp />)
