import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyle } from './main.style';
import { AppRoutes } from './routes/AppRoutes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <AppRoutes/>
  </React.StrictMode>,
)
