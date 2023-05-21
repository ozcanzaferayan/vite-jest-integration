import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserDisplay from './features/users/UserDisplay.jsx';
import axios from 'axios';
import { Provider } from 'react-redux';
import { setupStore } from './app/store.js';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <UserDisplay />
    </Provider>
  </React.StrictMode>,
)
