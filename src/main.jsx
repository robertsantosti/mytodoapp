import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyle } from './main.style';
import { AppRoutes } from './routes/AppRoutes';
import { TodosProvider } from './contexts/TodosContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <TodosProvider>
      <AppRoutes/>
    </TodosProvider>
  </React.StrictMode>,
)
