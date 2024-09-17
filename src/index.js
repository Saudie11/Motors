import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Provider } from 'react-redux';
import  store  from './Components/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <SSRProvider>
     <Provider store={store}>
    <App />
    </Provider>
  </SSRProvider>
  </React.StrictMode>
);

reportWebVitals();
