import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserDisplay from './features/users/UserDisplay.jsx';
import axios from 'axios';
import { Provider } from 'react-redux';
import { setupStore } from './app/store.js';
import { worker } from "./mocks/browser";

axios.defaults.baseURL = '';

if (process.env.NODE_ENV === 'development') {

  worker.start()
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <UserDisplay />
    </Provider>
  </React.StrictMode>,
)
