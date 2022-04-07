import React from 'react';
import ReactDOM from 'react-dom';
import { TodoProvider } from "./context/TodoContext";
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
    <App />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);