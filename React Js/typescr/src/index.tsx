import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDo from './Components/ToDo/index'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToDo></ToDo>
    <ToDo></ToDo>
    <ToDo></ToDo>
  </React.StrictMode>
);
